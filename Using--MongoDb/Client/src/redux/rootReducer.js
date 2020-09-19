import { combineReducers } from "redux";

import userReducer from "../redux/reducers/userReducer";
import ApiFetchReducer from "../redux/reducers/ApiFetchReducer";

export default combineReducers({
  userRegisterDataFromStore: userReducer,
  todoDataFromStore: ApiFetchReducer,
});
