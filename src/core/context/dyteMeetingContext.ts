import { createContext } from 'stencil-context';

const defaultValue = { meeting: 'bar' };

const { Provider, Consumer } = createContext(defaultValue);

export const DyteMeetingContextProvider = Provider;
export const DyteMeetingContextConsumer = Consumer;

export class DyteClient {
  constructor() {
    console.log('Constructor of DyteClient called');
  }

  static init(roomName: string, authToken: string): Meeting {
    console.log('initializing app');
    //Fetch data over API about room and fill in dyteself, and other properties of Meeting
    let dyteself = new DyteSelf(authToken);
    let dyteroom = new DyteRoom(roomName);
    let dyteparticipants = new DyteParticipants();
    return new Meeting(dyteself, dyteroom, dyteparticipants);
  }
}

import { state } from '../../core/store/meetingStore';

export class Meeting {
  self: DyteSelf;
  room: DyteRoom;
  participants: DyteParticipants;
  eventCallbacks: Map<string, Function>;

  constructor(self: DyteSelf, room: DyteRoom, participants: DyteParticipants) {
    this.self = self;
    this.room = room;
    this.participants = participants;
    this.eventCallbacks = new Map<string, Function>();
  }

  joinRoom(): Promise<void> {
    // this.self.id = "newId2";
    let newMeeting = Object.assign({}, state.meeting);
    newMeeting.self.id = 'newId';
    state['meeting'] = newMeeting;
    return new Promise(resolve => resolve());
  }

  static default(): Meeting {
    return new Meeting(DyteSelf.default(), DyteRoom.default(), DyteParticipants.default());
  }

  on(eventName: string, callback: Function) {
    this.eventCallbacks.set(eventName, callback);
  }
}

export class DyteSelf {
  id: string;
  // name: string;
  // clientSpecificId: any;
  // audioTrack: MediaStreamTrack;
  // videoTrack: MediaStreamTrack;
  // screenShareTracks: {
  //   audio: MediaStreamTrack;
  //   video: MediaStreamTrack;
  // };
  // audioEnabled: boolean;
  // videoEnabled: boolean;
  // screenShareEnabled: boolean;
  // permissions: {
  //   audio?: 'ACCEPTED' | 'DENIED';
  //   video?: 'ACCEPTED' | 'DENIED';
  // };
  // roomJoined: boolean;

  constructor(id: string) {
    this.id = id;
  }

  setupTracks(): Promise<void> {
    return new Promise(resolve => resolve());
  }

  static default(): DyteSelf {
    return new DyteSelf('id');
  }
}

export class DyteRoom {
  roomName: string;

  // roomType: RoomViewType;

  // chatMessages: ChatMessage[];

  // polls: Poll[];

  constructor(roomName: string) {
    this.roomName = roomName;
  }

  static default(): DyteRoom {
    return new DyteRoom('');
  }
}

export class DyteParticipants {
  waitlisted: DyteParticipant[];
  // joined: DyteParticipant[];
  // active: DyteParticipant[];
  // pinned: DyteParticipant[];

  constructor() {
    this.waitlisted = [];
  }

  static default(): DyteParticipants {
    return new DyteParticipants();
  }
}

interface DyteParticipant {
  id: string;
  // userId: string;
  // name: string;
  // picture: string;
  // isHost: boolean;
  // clientSpecificId?: string;
  // flags: { [key: string]: string | boolean };
  // // device: DeviceConfig;
  // videoTrack: MediaStreamTrack;
  // audioTrack: MediaStreamTrack;
  // videoEnabled: boolean;
  // audioEnabled: boolean;
}

// interface RoomViewType {}
// interface ChatMessage {}
// interface Poll {}
// interface DeviceConfig {}

// interface DyteParticipantMap{}
