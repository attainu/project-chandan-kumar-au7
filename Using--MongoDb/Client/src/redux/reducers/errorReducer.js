const initialState = {
  error: {},
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGISTER_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_LOGIN_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_CHANGE_PASSWORD_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    // ============== <<<<>>>> =================== //
    case "SET_ADMIN_REGISTER_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_ADMIN_LOGIN_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_ADMIN_CHANGE_PASSWORD_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_ADMIN_FORGOTPASSWORD_OTP_VARIFY_ERRORS":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
