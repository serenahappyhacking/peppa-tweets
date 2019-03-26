import { combineReducers } from "redux";
import timeline from "./reducer/timeline";
import profile from "./reducer/profile";

export default combineReducers({
  timeline,
  profile
});
