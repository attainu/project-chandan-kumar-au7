const initialState = {
  user: {
    isLoggedIn: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_DATA_INTO_REDUX_STORE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
