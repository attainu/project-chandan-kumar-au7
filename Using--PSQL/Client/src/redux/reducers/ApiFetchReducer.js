const initialState = {
  ApiData: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch_Api":
      return {
        ...state,
        ApiData: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
