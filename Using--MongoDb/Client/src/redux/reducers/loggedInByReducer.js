let loggedInBy = "userJwtToken";

const loggedInByReducer = (state = loggedInBy, action) => {
  switch (action.type) {
    case "ADD_LOGGED_IN_BY":
      return (loggedInBy = "adminJwtToken");
    case "REMOVE_LOGGED_IN_BY":
      return (loggedInBy = "userJwtToken");
    default:
      return state;
  }
};

export default loggedInByReducer;
