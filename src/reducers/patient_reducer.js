import { PATIENT_ENTERED } from '../actions/actionsTypes';

export default function(state = null, action) {
  switch (action.type) {
    case PATIENT_ENTERED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
