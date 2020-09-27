import axios from "axios";

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  USER REGISTERATION [ BACKEND ] DATA } =========//
export const userRegisterAction = (data) => {
  return {
    type: "REGISTER_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  USER LOGIN [ BACKEND ] DATA } =========//
export const userLoginAction = (data) => {
  return {
    type: "LOGIN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  USER USERFORGOTPASSWORD [ BACKEND ] DATA } =========//
export const userForgotPassAction = (data) => {
  return {
    type: "FORGOTPASSWORD_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userForgotPassOtpVarifyAction = (data) => {
  return {
    type: "FORGOTPASSWORD_OTP_VARIFY_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const userForgotpassNEWCredentialsAction = (data) => {
  return {
    type: "FORGOTPASSWORD_NEW CREDIENTIALS_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

// =========================================== [ REGISTER ] This is for HITTING [BACKEND] end point =====================================//
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

// =========================================== [ LOGIN ]This is for HITTING [BACKEND] end point =====================================//
export const userLoginFuncFromUserAction = (userLoginCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/users/login",
        // url: "https://robin--project-mern-backend.herokuapp.com/users/login",
        data: userLoginCredentials,
      });
      console.log("data from user action FILE : ", data);
      if (data.success) {
        dispatch(userLoginAction(data));
        localStorage.setItem("userLoginToken", data.token);

        history.push("/");

        setTimeout(() => {
          dispatch(userLoginAction({}));
          localStorage.removeItem("userLoginToken");
        }, 600000);
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
        payload: err,
      });
      console.log("Error in userLogin Action file ", err.message);
    }
  };
};

// =========================================== [ EMAIL SEND  ] This is for HITTING [BACKEND] end point =====================================//
export const userForgotpassFuncFromUserAction = (userForgotpassCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/users/forgotpassword",
        // url: "https://robin--project-mern-backend.herokuapp.com/users/forgotpassword",
        data: userForgotpassCredentials,
      });
      console.log("ForgotPAss data from user action FILE : ", data);
      if (data.success) {
        dispatch(userForgotPassAction(data));
      } else {
        dispatch({
          type: "SET_CHANGE_PASSWORD_ERRORS",
          payload: data,
        });
      }
    } catch (err) {
      console.log("from catch block");
      dispatch({
        type: "SET_CHANGE_PASSWORD_ERRORS",
        payload: err,
      });
      console.log("Error in USERPASSWORD Action file ", err.message);
    }
  };
};

// =========================================== [ OTP VARIFY ] This is for HITTING [BACKEND] end point =====================================//
export const userForgotPassOtpVarifyFuncFromUserAction = (
  userForgotpassOTPAsCredentials
) => {
  console.log(
    "userForgotpassOTPAsCredentials ",
    userForgotpassOTPAsCredentials
  );
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/users/varifyotp",
        // url: "https://robin--project-mern-backend.herokuapp.com/users/varifyotp",
        data: userForgotpassOTPAsCredentials,
      });
      console.log("OTPVarify data from user action FILE : ", data);
      if (data.OTPVARIFYsuccess) {
        dispatch(userForgotPassOtpVarifyAction(data));
      } else {
        dispatch({
          type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
          payload: data,
        });
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
        payload: err.message,
      });
      // console.log("Error in USERPASSWORD OTP varify Action file ", err.message);
    }
  };
};

// =========================================== [ NEW CREDIENTIALS ] This is for HITTING [BACKEND] end point =====================================//
export const userForgotPassNEWCredentialsFromUserAction = (
  userForgotpassNEWCredentials,
  history
) => {
  // console.log(
  //   "userForgotpassNEWCredentials ",
  //   userForgotpassNEWCredentials
  // );
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/users/changepassword",
        // url: "https://robin--project-mern-backend.herokuapp.com/users/changepassword",
        data: userForgotpassNEWCredentials,
      });
      console.log(
        "userForgotpassNEWCredentials data from user action FILE : ",
        data
      );
      if (data.success) {
        dispatch(userForgotpassNEWCredentialsAction(data));
        setTimeout(() => {
          history.push("/login");
        });
      } else {
        dispatch({
          type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
          payload: data,
        });
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
        payload: err.message,
      });
      // console.log("Error in USERPASSWORD OTP varify Action file ", err.message);
    }
  };
};
