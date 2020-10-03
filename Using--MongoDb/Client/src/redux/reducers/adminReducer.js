import isEmpty from "../validation/is-empty";

const initialState = {
  admin: {},
  adminloginsuccess: {},
  isAuthenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_REGISTER_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "ADMIN_LOGGED_IN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
      };
    case "ADMIN_LOGIN_SUCCESS_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        adminloginsuccess: action.payload,
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
        adminloginsuccess: action.payload,
      };
    case "ADMIN_ALREADY_VARIFIED_ASSIGN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        adminloginsuccess: action.payload,
      };
    case "ADMIN_SECRETTOKEN_VARIFY_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        adminloginsuccess: action.payload,
      };
    case "ADMIN_FORGOTPASSWORD_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "ADMIN_FORGOTPASSWORD_OTP_VARIFY_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };
    case "ADMIN_FORGOTPASSWORD_NEW CREDIENTIALS_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        admin: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
