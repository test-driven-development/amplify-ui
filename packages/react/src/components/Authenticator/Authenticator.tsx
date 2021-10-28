import { translations } from '@aws-amplify/ui';
import { I18n } from 'aws-amplify';
import * as React from 'react';

import { Provider, ProviderProps } from './Provider';
import { ResetPassword } from './ResetPassword';
import { Router, RouterProps } from './Router';
import { SetupTOTP } from './SetupTOTP';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export type AuthenticatorProps = ProviderProps & RouterProps;

export function Authenticator({
  children,
  className,
  components,
  initialState,
  loginMechanisms,
  services,
}: AuthenticatorProps) {
  React.useEffect(() => {
    I18n.putVocabularies(translations);
  }, []);

  return (
    <Provider
      components={components}
      initialState={initialState}
      loginMechanisms={loginMechanisms}
      services={services}
    >
      <Router className={className} children={children} />
    </Provider>
  );
}

Authenticator.Provider = Provider;
Authenticator.ResetPassword = ResetPassword;
Authenticator.SetupTOTP = SetupTOTP;
Authenticator.SignIn = SignIn;
Authenticator.SignUp = SignUp;