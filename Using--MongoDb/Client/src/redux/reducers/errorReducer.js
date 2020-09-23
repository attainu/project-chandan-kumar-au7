const initialState = {
  registerErrors: {},
  loginErrors: {},
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

    default:
      return state;
  }
};

export default errorReducer;
