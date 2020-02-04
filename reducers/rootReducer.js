import { combineReducers } from "redux";
import helloReducer from "./helloReducer";
import authReducer from './authReducer';

export default combineReducers({
  hello: helloReducer,
  auth: authReducer
});
