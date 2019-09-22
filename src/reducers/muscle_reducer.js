export default function(state = null, action) {
  switch (action.type) {
    case 'MUSCLE_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
