const initialState = {
  message: "Hi everyone"
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAY_HELLO":
      console.log("hello reducer", action.payload);
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default helloReducer;
