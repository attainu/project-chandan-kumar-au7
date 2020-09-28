import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import errorReducer from "../redux/reducers/errorReducer";
import haveToLoad from "../redux/reducers/haveToLoadReducer";
import HaveToDisplyNotifier from "./reducers/HaveToDisplyNotifierReducer";

export default combineReducers({
  userDataFromStore: userReducer,
  errorDatafromStore: errorReducer,
  haveToLoadDataFromStore: haveToLoad,
  HaveToDisplyNotifier: HaveToDisplyNotifier,
});
