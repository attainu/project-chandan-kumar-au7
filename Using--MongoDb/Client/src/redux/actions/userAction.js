import axios from "axios";

export const userRegisterAction = (data) => {
  return {
    type: "REGISTER_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userLoginAction = (data) => {
  return {
    type: "LOGIN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userRegisterFuncFromUserAction = (
  userRegisterCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/users/register",
        url: "https://robin--project-mern-backend.herokuapp.com/users/register",
        data: userRegisterCredentials,
      });
      // console.log("data from user action FILE : ", data);
      if (data.success) {
        dispatch(userRegisterAction(data));
        history.push("/login");
      } else {
        dispatch({
          type: "SET_REGISTER_ERRORS",
          payload: data,
        });
      }
    } catch (err) {
      console.log("from catch block");
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.message,
      });
      console.log("Error in userRegister Action file ", err.message);
    }
  };
};

export const userLoginFuncFromUserAction = (userLoginCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/users/login",
        url: "https://robin--project-mern-backend.herokuapp.com/users/login",
        data: userLoginCredentials,
      });
      console.log("data from user action FILE : ", data);
      if (data.success) {
        dispatch(userLoginAction(data));
        history.push("/login");
      } else {
        dispatch({
          type: "SET_LOGIN_ERRORS",
          payload: data,
        });
      }
    } catch (err) {
      console.log("from catch block");
      dispatch({
        type: "SET_LOGIN_ERRORS",
        payload: err.message,
      });
      console.log("Error in userLogin Action file ", err.message);
    }
  };
};
