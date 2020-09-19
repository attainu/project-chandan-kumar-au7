import axios from "axios";

const fetchFuncInAction = (data) => {
  return {
    type: "Fetch_Api",
    payload: data,
  };
};

export const getAllFetchedData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://jsonplaceholder.typicode.com/todos",
      });
      // console.log(data);
      dispatch(fetchFuncInAction(data));
    } catch (err) {
      console.log("Error in getting all data", err.message);
    }
  };
};
