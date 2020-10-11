import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import adminReducer from "../redux/reducers/adminReducer";
import errorReducer from "../redux/reducers/errorReducer";
import haveToLoadReducer from "../redux/reducers/haveToLoadReducer";
import HaveToDisplyNotifierReducer from "./reducers/HaveToDisplyNotifierReducer";
import loggedInByReducer from "./reducers/loggedInByReducer";

import GetLoanReducer from "./reducers/getLoanReducer";

export default combineReducers({
  userDataFromStore: userReducer,
  adminDataFromStore: adminReducer,
  errorDatafromStore: errorReducer,
  haveToLoadDataFromStore: haveToLoadReducer,
  HaveToDisplyNotifier: HaveToDisplyNotifierReducer,
  LoggedInByFromStore: loggedInByReducer,

  GetLoanDataResponseFromStore: GetLoanReducer,
});
