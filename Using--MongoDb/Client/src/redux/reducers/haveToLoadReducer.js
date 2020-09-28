var initialState = "false";

const haveToLoad = (state = initialState, action) => {
  switch (action.type) {
    case "HAVE_TO_LOAD_SPINNER":
      return (initialState = "true");
    case "HAVE_TO_STOP_SPINNER":
      return (initialState = "false");
    default:
      return state;
  }
};

export default haveToLoad;
