import { Component, Host, h, State } from '@stencil/core';
import Message from '../../core/entities/message';
import { Consume, Store } from '@runopencode/stencil-state-store';
import { Unsubscribable } from 'rxjs';

@Component({
  tag: 'component-consumer',
  styleUrl: 'component-consumer.css',
  shadow: true,
})
export class ComponentConsumer {
  @Consume('parent-store')
  private store: Promise<Store<Message>>;

  private subscription: Unsubscribable;

  @State()
  private message: string;

  public async componentDidLoad() {
    let store: Store<Message> = await this.store;
    this.subscription = store.subscribe(() => {
      this.message = store.snapshot().message;
    });
  }

  public disconnectedCallback(): void {
    this.subscription.unsubscribe();
  }

  public async change(_: MouseEvent): Promise<void> {
    console.log('here1', this.store);
    let store: Store<Message> = await this.store;
    let state: Message = store.snapshot();

    state.message = 'greeting';

    store.patch(state);
  }

  render() {
    return (
      <Host>
        <state-store-consumer consumer={this}/>
        <slot></slot>
        <div>Okay {this.message}</div>
        <button onClick={this.change}>ButtonChange</button>
      </Host>
    );
  }
}
// <MessageConsumer>{({ foo }) => [<div>{foo??"Foo wasnt present"}</div>, <div>Okay1</div>]}</MessageConsumer>
