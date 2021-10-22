import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';
import { MessageConsumer } from '../../core/context/message';
import { ConnectedEvent } from '../../core/entities/connectedEvent';

@Component({
  tag: 'comp-consumer',
  styleUrl: 'comp-consumer.css',
  shadow: true,
})
export class CompConsumer {
  @Prop() childOverride: boolean = false;

  public componentWillLoad(): void {
    console.log('Component Will Loading from CompConsumer');
    if (!this.childOverride) {
      let connectedEvent: ConnectedEvent = {
        component: 'comp-consumer',
      };
      const event = this.compConsumerConnected.emit(connectedEvent);
      if (event.defaultPrevented) {
        console.log('Default Prevented!');
      }
      console.log(event);
    }
  }

  @Event({
    eventName: 'compConsumerConnected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  compConsumerConnected: EventEmitter<ConnectedEvent>;

  render() {
    return (
      <Host>
        <MessageConsumer>{({ foo }) => [<div>Here: {foo}</div>]}</MessageConsumer>
        <p>Something</p>
      </Host>
    );
  }
}
