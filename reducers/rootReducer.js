import { combineReducers } from "redux";
import authReducer from "./authReducer";
import helloReducer from './helloReducer';

export default combineReducers({
  auth: authReducer,
  hello: helloReducer
});
