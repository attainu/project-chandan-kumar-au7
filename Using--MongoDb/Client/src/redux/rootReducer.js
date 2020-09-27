import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import errorReducer from "../redux/reducers/errorReducer";
import HaveToDisplyNotifier from "../redux/reducers/HaveToDisplyNotifier";

export default combineReducers({
  userDataFromStore: userReducer,
  errorDatafromStore: errorReducer,
  HaveToDisplyNotifier: HaveToDisplyNotifier,
});
