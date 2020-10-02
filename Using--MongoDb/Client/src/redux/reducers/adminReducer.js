import isEmpty from "../validation/is-empty";

const initialState = {
  admin: {},
  loginsuccess: {},
  isAuthenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "LOGIN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
      };
    case "ADMIN_LOGIN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        loginsuccess: action.payload,
      };
    case "SET_ADMIN_LOGGED_IN":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        admin: action.payload,
      };

    case "ADMIN_SECRETTOKEN_ASSIGN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        loginsuccess: action.payload,
      };
    case "ADMIN_SECRETTOKEN_VARIFY_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        loginsuccess: action.payload,
      };
    case "FORGOTPASSWORD_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "FORGOTPASSWORD_OTP_VARIFY_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "FORGOTPASSWORD_NEW CREDIENTIALS_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
