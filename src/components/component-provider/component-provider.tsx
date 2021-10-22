import { Component, Host, h, Prop, State } from '@stencil/core';
import Message from '../../core/entities/message';
import { Provide, Store } from '@runopencode/stencil-state-store';
import { Unsubscribable } from 'rxjs';

@Component({
  tag: 'component-provider',
  styleUrl: 'component-provider.css',
  shadow: true,
})
export class ComponentProvider {
  @Prop() first: string;

  @Provide({
    name: 'parent-store',
    defaults: () => {
      let mssg: Message = {
        message: 'something4',
      };
      return mssg;
    },
  })
  private store: Store<Message>;

  private subscription: Unsubscribable;

  @State()
  private message: string;

  public connectedCallback(): void {
    this.subscription = this.store.subscribe((state: Message) => {
      console.log('Subscribed: ', this.message, this.store);
      this.message = state.message;
    });
  }

  public disconnectedCallback(): void {
    this.subscription.unsubscribe();
  }

  public change(): void {
    console.log('here', this.store);
    let state: Message = this.store.snapshot();

    state.message = 'greeting';
    this.store.patch(state);
  }

  render() {
    return (
      <Host>
        <state-store-provider provider={this} />
        <slot />
        <p>
          {this.first} - {this.message}
        </p>
        <p>Here</p>
        <button onClick={this.change}>Change</button>
      </Host>
    );
  }
}

//stencil-context cannot work with slot
// <component-consumer>
//   <p>something3</p>
// </component-consumer>
