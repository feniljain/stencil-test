import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';
import {ConnectedEvent} from '../../core/entities/connectedEvent';

@Component({
  tag: 'dyte-participant-video-disabled',
  styleUrl: 'dyte-participant-video-disabled.css',
  shadow: true,
})
export class DyteParticipantVideoDisabled {
  @Event({
    eventName: 'dyteParticipantVideoDisabledConnected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dyteParticipantDisabledConnected: EventEmitter<ConnectedEvent>;

  @Prop() childOverride: boolean;
  public componentWillLoad(): void {
    console.log('Child Overrided(ParticipantVideo): ' + this.childOverride);
    if (!this.childOverride) {
      let connectedEvent: ConnectedEvent = {
        component: 'dyte-participant-video',
      };
      const event = this.dyteParticipantDisabledConnected.emit(connectedEvent);
      if (event.defaultPrevented) {
        console.log('Default Prevented!');
      }
    }
  }

  render() {
    return (
      <Host>
        <p>+++++++</p>
        <div>ParticipantVideoDisabled</div>
        <slot></slot>
        <p>+++++++</p>
      </Host>
    );
  }
}
