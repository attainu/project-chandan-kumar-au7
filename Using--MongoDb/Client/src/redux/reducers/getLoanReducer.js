const initialState = {
  GetLoanData: {},
};

const GetLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOAN_DATA":
      return {
        ...state,
        GetLoanData: action.payload,
      };
    default:
      return state;
  }
};

export default GetLoanReducer;
