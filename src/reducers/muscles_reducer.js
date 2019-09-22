import muscles from '../../data/muscles';

export default function(state = muscles, action) {
  switch (action.type) {
    case 'MUSCLE_FORCE_ENTERED': {
      return state;
    }
    default: {
      return state;
    }
  }
}
