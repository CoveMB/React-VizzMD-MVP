import { PRINTING_TOOGLE } from '../actions/actionsTypes';

export default function(state = false, action) {
  switch (action.type) {
    case PRINTING_TOOGLE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
