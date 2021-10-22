import { Component, Host, h, Listen, State } from '@stencil/core';
import { MessageProvider } from '../../core/context/message';
import { ConnectedEvent } from '../../core/entities/connectedEvent';

@Component({
  tag: 'comp-provider',
  styleUrl: 'comp-provider.css',
  shadow: true,
})
export class CompProvider {

  // @Prop() loading: boolean;
  @State() childProvided: boolean;

  @Listen('compConsumerConnected')
  compConumerConnectedHandler(event: CustomEvent<ConnectedEvent>) {
    console.log('Got an event woah!');
    console.log(event.detail.component + ' surfaced');
    this.childProvided = true;
  }

  public componentWillLoad(): void {
    console.log('Component Will Loading from CompProvider');
  }

  render() {
    return (
      <Host>
        <MessageProvider value={{ foo: 'something4' }}>
         {this.childProvided ? <div>Here!</div> : <div>Here from provider!</div>}

          <slot></slot>
        </MessageProvider>
      </Host>
    );
  }
}
