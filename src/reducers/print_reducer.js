import { PRINTING } from '../actions/actionsTypes';

export default function(state = false, action) {
  switch (action.type) {
    case PRINTING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
