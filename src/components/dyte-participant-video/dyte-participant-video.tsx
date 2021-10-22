import { Component, Host, h, EventEmitter, Event, Prop } from '@stencil/core';
import { DyteClient, Meeting } from '../../core/context/dyteMeetingContext';
import { ConnectedEvent } from '../../core/entities/connectedEvent';
import { state } from '../../core/store/meetingStore';

@Component({
  tag: 'dyte-participant-video',
  styleUrl: 'dyte-participant-video.css',
  shadow: true,
})
export class DyteParticipantVideo {
  @Prop() width: number;
  @Prop() height: number;

  @Event({
    eventName: 'dyteParticipantVideoConnected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dyteParticipantConnected: EventEmitter<ConnectedEvent>;

  @Prop() childOverride: boolean;
  // @Prop() meeting: Meeting;
  public componentWillLoad(): void {
    console.log('Child Overrided(ParticipantVideo): ' + this.childOverride);
    if (!this.childOverride) {
      let connectedEvent: ConnectedEvent = {
        component: 'dyte-participant-video',
      };
      const event = this.dyteParticipantConnected.emit(connectedEvent);
      if (event.defaultPrevented) {
        console.log('Default Prevented!');
      }
    }

    // let meeting = DyteClient.init('roomName', 'authToken');
    // this.meeting = meeting;
  }

  callJoinRoom() {
    state.meeting.joinRoom();
  }

  render() {
    return (
      <Host>
        <p>*****</p>
        <div>ParticipantVideo</div>
        <slot></slot>
        <button onClick={this.callJoinRoom}>CallJoinRoom</button>
        <p>*****</p>
      </Host>
    );
  }
}
