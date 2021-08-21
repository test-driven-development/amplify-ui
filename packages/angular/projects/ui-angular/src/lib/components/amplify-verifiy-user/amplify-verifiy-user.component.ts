import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { AuthPropService, StateMachineService } from '../../services';
import {
  AuthInputAttributes,
  AuthMachineState,
  getActorContext,
  getActorState,
  SignInContext,
  SignInState,
} from '@aws-amplify/ui-core';
import { Subscription } from 'xstate';
import { getAttributeMap } from '../../common';

@Component({
  selector: 'amplify-verifiy-user',
  templateUrl: './amplify-verifiy-user.component.html',
  styles: [],
})
export class AmplifyVerifiyUserComponent implements OnInit {
  @HostBinding('attr.data-amplify-authenticator-verifyuser') dataAttr = '';
  public customComponents: Record<string, TemplateRef<any>>;
  private authSubscription: Subscription;
  public remoteError = '';
  public isPending = false;
  public unverifiedAttributes: string[];
  public context = () => ({});

  constructor(
    private stateMachine: StateMachineService,
    private contextService: AuthPropService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.stateMachine.authService.subscribe((state) => {
      this.onStateUpdate(state);
    });
  }

  ngAfterContentInit(): void {
    this.customComponents = this.contextService.customComponents;
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onStateUpdate(state: AuthMachineState): void {
    const actorState: SignInState = getActorState(state);
    this.remoteError = actorState.context.remoteError;
    this.unverifiedAttributes =
      Object.keys(actorState.context.unverifiedAttributes) || [];
    this.isPending = !actorState.matches('verifyUser.edit');
  }

  onInput($event) {
    $event.preventDefault();
    const { name, value } = $event.target;
    this.stateMachine.send({
      type: 'CHANGE',
      data: { name, value },
    });
  }

  skip() {
    this.stateMachine.send('SKIP');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const state = this.stateMachine.authState;
    const actorContext: SignInContext = getActorContext(state);
    const { formValues } = actorContext;

    this.stateMachine.send({
      type: 'SUBMIT',
      data: { ...formValues },
    });
  }

  get attributeMap(): AuthInputAttributes {
    return getAttributeMap();
  }
}
