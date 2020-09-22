import axios from "axios";

export const userRegister = (data) => {
  return {
    type: "REGISTER_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userLogin = (data) => {
  return {
    type: "LOGIN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userRegisterfuncfromUserAction = (
  userRegisterCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/users/register",
        data: userRegisterCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      console.log("data from user action ", data);
      history.push("/login");
    } catch (err) {
      console.log("Error in userRegister Action", err.message);
    }
  };
};
