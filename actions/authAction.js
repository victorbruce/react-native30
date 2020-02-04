export const loginUser = (authenticate = true ) => dispatch => {
  dispatch({
    type: 'LOGIN_USER',
    payload: authenticate
  })
}