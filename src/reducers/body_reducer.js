export default function(state = null, action) {
  switch (action.type) {
    case 'SET_BODY_BACK': {
      return action.payload;
    }
    case 'SET_BODY_FACE': {
      return action.payload;
    }
    default: {
      return "back";
    }
  }
}
