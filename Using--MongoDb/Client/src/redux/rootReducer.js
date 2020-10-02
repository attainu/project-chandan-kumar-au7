import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import adminReducer from "../redux/reducers/adminReducer";
import errorReducer from "../redux/reducers/errorReducer";
import haveToLoad from "../redux/reducers/haveToLoadReducer";
import HaveToDisplyNotifier from "./reducers/HaveToDisplyNotifierReducer";

export default combineReducers({
  userDataFromStore: userReducer,
  adminDataFromStore: adminReducer,
  errorDatafromStore: errorReducer,
  haveToLoadDataFromStore: haveToLoad,
  HaveToDisplyNotifier: HaveToDisplyNotifier,
});
