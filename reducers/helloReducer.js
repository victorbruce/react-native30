const initialState = {
  message: ""
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAY_HELLO":
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
