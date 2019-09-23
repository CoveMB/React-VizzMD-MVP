import * as actionsType from '../actions/actions';

export default function(state = null, action) {
  switch (action.type) {
    case actionsType.MUSCLE_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
