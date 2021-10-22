import { Component, Host, h, EventEmitter, Event, Prop, State, Listen } from '@stencil/core';
import { ConnectedEvent } from '../../core/entities/connectedEvent';
import { state } from '../../core/store/meetingStore';

@Component({
  tag: 'dyte-participant',
  styleUrl: 'dyte-participant.css',
  shadow: true,
})
export class DyteParticipant {
  @Prop() childOverride: boolean;
  @Prop() dataId: boolean;

  public componentWillLoad(): void {
    console.log('Child Overrided(Participant): ' + this.childOverride);
    if (!this.childOverride) {
      let connectedEvent: ConnectedEvent = {
        component: 'dyte-participant',
      };
      const event = this.dyteParticipantConnected.emit(connectedEvent);
      if (event.defaultPrevented) {
        console.log('Default Prevented!');
      }
    }
  }

  changeMeeting(_: MouseEvent): void {
    console.log('oldId: ', state.meeting.self.id);
    let newMeeting = Object.assign({}, state.meeting);
    newMeeting.self.id = 'newId';
    state['meeting'] = newMeeting;
  }

  @Event({
    eventName: 'dyteParticipantConnected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dyteParticipantConnected: EventEmitter<ConnectedEvent>;

  @State() videoChildProvided: boolean = false;
  @State() disabledVideoChildProvided: boolean = false;

  @Listen('dyteParticipantVideoConnected')
  dyteParticipantVideoConnectedHandler(_: CustomEvent<ConnectedEvent>) {
    this.videoChildProvided = true;
  }

  @Listen('dyteParticipantVideoDisabledConnected')
  dyteParticipantVideoDisabledConnectedHandler(_: CustomEvent<ConnectedEvent>) {
    this.disabledVideoChildProvided = true;
  }

  render() {
    //Here we do not fill in anything if video/disabled-video is not present as they will be fetched by API, and automatically filled in div with id "participant-view"
    return (
      <Host>
        <p>=====</p>
        <div>Participant</div>
        <slot></slot>
        {this.videoChildProvided ? [<div>DyteParticipantVideo Provided</div>] : <div></div>}
        {this.disabledVideoChildProvided ? [<div>DyteParticipantVideoDisabled Provided</div>] : <div></div>}
        <button onClick={this.changeMeeting}>DyteParticipant</button>
        <div id="participant-view"></div>
        <p>=====</p>
      </Host>
    );
  }
}
