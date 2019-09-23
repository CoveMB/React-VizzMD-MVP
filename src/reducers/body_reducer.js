import { FLIP_BODY } from '../actions/actionsTypes';

export default function(state = "face", action) {
  switch (action.type) {
    case FLIP_BODY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
