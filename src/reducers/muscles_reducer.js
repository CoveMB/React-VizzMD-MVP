import * as actionsType from '../actions/actions';
import muscles from '../../data/muscles';

export default function(state = muscles, action) {
  switch (action.type) {
    case actionsType.MUSCLE_FORCE_CHANGED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
