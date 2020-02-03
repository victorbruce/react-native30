export const sayHello = () => dispatch => {
  dispatch({
    type: "SAY_HELLO",
    payload: "Hello React Native in 30 days"
  });
};
