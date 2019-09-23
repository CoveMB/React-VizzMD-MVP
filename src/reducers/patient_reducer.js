import * as actionsType from '../actions/actions';

export default function(state = null, action) {
  switch (action.type) {
    case actionsType.PATIENT_ENTERED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
