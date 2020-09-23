import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import errorReducer from "../redux/reducers/errorReducer";

export default combineReducers({
  userDataFromStore: userReducer,
  errorDatafromStore: errorReducer,
});
