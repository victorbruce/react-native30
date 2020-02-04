const initialState = {
  isAuthenticated: true,
  errors: {}
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;