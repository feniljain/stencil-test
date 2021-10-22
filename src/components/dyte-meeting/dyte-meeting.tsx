import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import {JSXBase} from '@stencil/core/internal';
import { ConnectedEvent } from '../../core/entities/connectedEvent';
import { state } from '../../core/store/meetingStore';

@Component({
  tag: 'dyte-meeting',
  styleUrl: 'dyte-meeting.css',
  shadow: true,
})
export class DyteMeeting {
  @Prop() width: number;
  @Prop() height: number;
  @Prop() language: string;

  @State() childProvided: boolean = false;

  @Listen('dyteParticipantConnected')
  dyteParticipantConnectedHandler(_: CustomEvent<ConnectedEvent>) {
    // console.log(event.detail.component + ' surfaced');
    this.childProvided = true;
  }

    getParticipants() {
        return (
            <dyte-participant child-override="true" />
        );
    }

  render() {
    return (
      <Host>
        {state.meeting.self.id != '' ? this.childProvided ? [<div>DyteParticipant Provided</div>, <slot></slot>] : this.getParticipants() : <div>Please initialize DyteClient</div>}
        <slot name="dyteParticipant"></slot>
        <p>----</p>
      </Host>
    );
  }
}
