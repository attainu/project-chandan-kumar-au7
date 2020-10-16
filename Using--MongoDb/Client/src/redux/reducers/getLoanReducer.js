const initialState = {
  GetLoanData: {},
  loanAmountAndTenor: null,
};

const GetLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOAN_DATA":
      return {
        ...state,
        GetLoanData: action.payload,
      };
    case "LOANAMOUNT_AND_TENOR":
      console.log("loanAmount_And_Tenor ", action.payload);
      return {
        ...state,
        loanAmountAndTenor: action.payload,
      };
    default:
      return state;
  }
};

export default GetLoanReducer;
