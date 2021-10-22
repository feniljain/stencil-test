import { createStore } from '@stencil/store';
import { Meeting } from '../context/dyteMeetingContext';

const store = createStore({
  meeting: Meeting.default(),
});

function keyChanged(): string {
    return 'id';
}

store.onChange('meeting', value => {
  //Used for emitting event, we need to detect first where the change has happened and then use that to emit necessary event
  console.log('Meeting value changed: ' + JSON.stringify(value));
    switch(keyChanged()) {
        case "id": {
            console.log('id key changed');
            value.eventCallbacks["something"]();
            break;
        }
    }
});

export const dispose = store.dispose;
export const state = store.state;
export const reset = store.reset;
