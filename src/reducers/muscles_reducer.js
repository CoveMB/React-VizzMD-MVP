import muscles from '../../data/muscles';

export default function(state = muscles, action) {
  switch (action.type) {
    case 'MUSCLE_FORCE_CHANGED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
