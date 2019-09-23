import * as actionsType from '../actions/actions';

export default function(state = "face", action) {
  switch (action.type) {
    case actionsType.FLIP_BODY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
