import { createMachine, sendParent, assign } from 'xstate';
import { get } from 'lodash';

import {
  AuthFormData,
  ValidationError,
  AuthEvent,
  CognitoUserAmplify,
  AuthChallengeNames,
  PassedContext,
} from '../../../types';
import { Auth } from 'aws-amplify';

interface SignInContext {
  remoteError?: string;
  validationError?: ValidationError;
  formValues?: AuthFormData;
  user?: CognitoUserAmplify;
  challengeName?: string;
  passedContext?: PassedContext;
}

export const signInActor = createMachine<SignInContext, AuthEvent>(
  {
    initial: 'signIn',
    id: 'signInActor',
    context: {
      remoteError: '',
      formValues: {},
      validationError: {},
    },
    states: {
      signIn: {
        initial: 'edit',
        states: {
          edit: {
            on: {
              SUBMIT: 'submit',
              CHANGE: { actions: 'handleInput' },
              FEDERATED_SIGN_IN: 'federatedSignIn',
            },
          },
          federatedSignIn: {
            invoke: {
              src: 'federatedSignIn',
              onDone: '#signInActor.resolved',
              onError: { actions: 'setRemoteError' },
            },
          },
          submit: {
            entry: 'clearError',
            invoke: {
              src: 'signIn',
              onDone: [
                {
                  cond: 'shouldSetupTOTP',
                  actions: ['setUser', 'setChallengeName'],
                  target: '#signInActor.setupTOTP',
                },
                {
                  cond: 'shouldConfirmSignIn',
                  actions: ['setUser', 'setChallengeName'],
                  target: '#signInActor.confirmSignIn',
                },
                {
                  cond: 'shouldForceChangePassword',
                  actions: ['setUser', 'setChallengeName'],
                  target: '#signInActor.forceNewPassword',
                },
                {
                  actions: 'setUser',
                  target: '#signInActor.resolved',
                },
              ],
              onError: [
                {
                  cond: 'shouldRedirectToConfirmSignUp',
                  actions: ['redirectToConfirmSignUp'],
                },
                {
                  actions: 'setRemoteError',
                  target: 'edit',
                },
              ],
            },
          },
        },
      },
      confirmSignIn: {
        initial: 'edit',
        states: {
          edit: {
            on: {
              SUBMIT: 'submit',
              SIGN_IN: '#signInActor.signIn',
              CHANGE: { actions: 'handleInput' },
            },
          },
          submit: {
            entry: 'clearError',
            invoke: {
              src: 'confirmSignIn',
              onDone: {
                target: '#signInActor.resolved',
                actions: ['setUser', 'clearChallengeName'],
              },
              onError: {
                target: 'edit',
                actions: 'setRemoteError',
              },
            },
          },
        },
      },
      forceNewPassword: {
        initial: 'edit',
        states: {
          edit: {
            on: {
              SUBMIT: 'submit',
              SIGN_IN: '#signInActor.signIn',
              CHANGE: { actions: 'handleInput' },
            },
          },
          submit: {
            entry: 'clearError',
            invoke: {
              src: 'forceNewPassword',
              onDone: {
                actions: ['setUser', 'clearChallengeName'],
                target: '#signInActor.resolved',
              },
              onError: {
                actions: 'setRemoteError',
                target: 'edit',
              },
            },
          },
        },
      },
      setupTOTP: {
        initial: 'edit',
        states: {
          edit: {
            on: {
              SUBMIT: 'submit',
              SIGN_IN: '#signInActor.signIn',
              CHANGE: { actions: 'handleInput' },
            },
          },
          submit: {
            invoke: {
              src: 'verifyTotpToken',
              onDone: {
                actions: ['setUser', 'clearChallengeName'],
                target: '#signInActor.resolved',
              },
              onError: {
                actions: 'setRemoteError',
                target: 'edit',
              },
            },
          },
        },
      },
      resolved: {
        type: 'final',
        entry: 'reportDone',
      },
    },
  },
  {
    actions: {
      handleInput: assign({
        formValues(context, event) {
          const { name, value } = event.data;
          return { ...context.formValues, [name]: value };
        },
      }),
      reportDone: sendParent((context) => ({
        type: 'DONE',
        data: { user: context.user },
      })),
      redirectToConfirmSignUp: sendParent((context, event) => ({
        type: 'ERROR.CONFIRM_SIGN_UP',
        data: {
          passedContext: {
            username: context.formValues?.username,
            intent: 'confirmSignUp',
          },
        },
      })),
      setUser: assign({
        user: (_, event) => event.data.user || event.data,
      }),
      setRemoteError: assign({
        remoteError: (_, event) => event.data?.message || event.data,
      }),
      setChallengeName: assign({
        challengeName: (_, event) => event.data?.challengeName,
      }),
      clearChallengeName: assign({ challengeName: undefined }),
      clearError: assign({ remoteError: '' }),
    },
    guards: {
      shouldConfirmSignIn: (_, event): boolean => {
        const challengeName = get(event, 'data.challengeName');
        const validChallengeNames = [
          AuthChallengeNames.SMS_MFA,
          AuthChallengeNames.SOFTWARE_TOKEN_MFA,
        ];

        return validChallengeNames.includes(challengeName);
      },
      shouldRedirectToConfirmSignUp: (_, event): boolean => {
        return event.data.code === 'UserNotConfirmedException';
      },
      shouldSetupTOTP: (_, event): boolean => {
        const challengeName = get(event, 'data.challengeName');

        return challengeName === AuthChallengeNames.MFA_SETUP;
      },
      shouldForceChangePassword: (_, event): boolean => {
        const challengeName = get(event, 'data.challengeName');

        return challengeName === AuthChallengeNames.NEW_PASSWORD_REQUIRED;
      },
    },
    services: {
      async signIn(context) {
        const { username, password } = context.formValues;

        return Auth.signIn(username, password);
      },
      async confirmSignIn(context, event) {
        const { challengeName, user } = context;
        const { confirmation_code: code } = event.data;

        let mfaType;
        if (
          challengeName === AuthChallengeNames.SMS_MFA ||
          challengeName === AuthChallengeNames.SOFTWARE_TOKEN_MFA
        ) {
          mfaType = challengeName;
        }

        return Auth.confirmSignIn(user, code, mfaType);
      },
      async forceNewPassword(context, event) {
        const { user } = context;
        const password = get(event, 'data.password');

        return Auth.completeNewPassword(user, password);
      },
      async verifyTotpToken(context, event) {
        const { user } = context;
        const { confirmation_code } = event.data;

        return Auth.verifyTotpToken(user, confirmation_code);
      },
      async federatedSignIn(_, event) {
        const { provider } = event.data;
        const result = await Auth.federatedSignIn({ provider });

        return result;
      },
    },
  }
);
