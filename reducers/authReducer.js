const initialState = {
  userData : {
    email: '',
    password:''
  },
  errors: {}
}

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        auth: action.payload
      };
    case 'GET_ERRORS':
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}