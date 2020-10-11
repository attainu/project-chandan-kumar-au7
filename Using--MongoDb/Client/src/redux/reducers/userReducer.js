import isEmpty from "../validation/is-empty";

const initialState = {
  user: {},
  loginsuccess: {},
  registersuccess: {},
  usernameforasidebar: "USER",
  isAuthenticated: false,
  allUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        registersuccess: action.payload,
      };
    case "LOGIN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SET_USER_LOGGED_IN":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case "LOGIN_SUCCESS_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        loginsuccess: action.payload,
      };
    case "USERNAME_FOR_ASIDEBAR_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        usernameforasidebar: action.payload,
      };
    case "FORGOTPASSWORD_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
      };
    case "FORGOTPASSWORD_OTP_VARIFY_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
      };
    case "FORGOTPASSWORD_NEW CREDIENTIALS_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ALL_USERS":
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
