export default function(state = null, action) {
  switch (action.type) {
    case 'MUSCLE_FORCE_ENTERED': {
      return state;
    }
    case 'SET_MUSCLE': {
      return action.payload;
    }
    case 'RESET': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
