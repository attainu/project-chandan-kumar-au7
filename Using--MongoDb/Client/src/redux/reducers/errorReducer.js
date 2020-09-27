const initialState = {
  registerErrors: {},
  loginErrors: {},
  passwordChangingErrors: {},
  userForgotPassOtpVarifyErrors: {},
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGISTER_ERRORS":
      return {
        ...state,
        registerErrors: action.payload,
      };
    case "SET_LOGIN_ERRORS":
      return {
        ...state,
        loginErrors: action.payload,
      };
    case "SET_CHANGE_PASSWORD_ERRORS":
      return {
        ...state,
        passwordChangingErrors: action.payload,
      };
    case "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS":
      return {
        ...state,
        userForgotPassOtpVarifyErrors: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
