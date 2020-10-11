import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  SET_ADMIN_LOGGED_IN,
  ADD_LOGGED_IN_BY,
  ADMINNAME_FOR_ASIDEBAR_DATA_INTO_REDUX_STORE,
  REMOVE_LOGGED_IN_BY,
} from "../actionType";

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin REGISTERATION [ BACKEND ] DATA } =========//
export const adminRegisterAction = (data) => {
  return {
    type: "REGISTER_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin LOGIN [ BACKEND ] DATA } =========//
export const adminLoginAction = (data) => {
  return {
    type: "ADMIN_LOGGED_IN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};
// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin LOGIN [ BACKEND ] DATA } =========//
export const adminLoginForMessageAction = (data) => {
  return {
    type: "ADMIN_LOGIN_SUCCESS_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

const adminLogoutAction = (data) => {
  return {
    type: "SET_ADMIN_LOGGED_IN",
    payload: data,
  };
};

// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin adminAssignSecretToken [ BACKEND ] DATA } =========//
export const adminAssignSecretTokenAction = (data) => {
  return {
    type: "ADMIN_SECRETTOKEN_ASSIGN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};
// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin adminAssignSecretToken [ BACKEND ] DATA } =========//
export const adminAlreadyVarifiedAction = (data) => {
  return {
    type: "ADMIN_ALREADY_VARIFIED_ASSIGN_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};
// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin adminAssignSecretToken [ BACKEND ] DATA } =========//
export const adminAssignSecretTokenVarifyAction = (data) => {
  return {
    type: "ADMIN_SECRETTOKEN_VARIFY_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};
// =========== It will be imported inside the { PAGES folder } where ever we will be needing {  admin adminFORGOTPASSWORD [ BACKEND ] DATA } =========//
export const adminForgotPassAction = (data) => {
  return {
    type: "FORGOTPASSWORD_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const adminForgotPassOtpVarifyAction = (data) => {
  return {
    type: "FORGOTPASSWORD_OTP_VARIFY_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

export const adminForgotpassNEWCredentialsAction = (data) => {
  return {
    type: "FORGOTPASSWORD_NEW CREDIENTIALS_DATA_INTO_REDUX_STORE",
    payload: data,
  };
};

// =========================================== [ REGISTER ] This is for HITTING [BACKEND] end point =====================================//
export const adminRegisterFuncFromadminAction = (
  adminRegisterCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/register",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/register",
        data: adminRegisterCredentials,
      });
      // console.log("data from admin action FILE : ", data);
      if (data.success) {
        dispatch(adminRegisterAction(data));

        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });

        history.push("/login");

        setTimeout(() => {
          dispatch(adminRegisterAction({}));
        }, 6000);
      } else {
        dispatch({
          type: "SET_ADMIN_REGISTER_ERRORS",
          payload: data,
        });
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });

        setTimeout(() => {
          dispatch({
            type: "SET_ADMIN_REGISTER_ERRORS",
            payload: {},
          });
        }, 6000);
      }
    } catch (err) {
      // console.log("from catch block of admin func register");
      dispatch({
        type: "SET_ADMIN_REGISTER_ERRORS",
        payload: err.message,
      });
      // console.log("Error in adminRegister Action file ", err.message);
    }
  };
};
// =========================================== [ asssign secretToken and email sending ]This is for HITTING [BACKEND] end point =====================================//
export const adminAssignSecretTokenFuncFromadminAction = (email) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/assignsecrettoken",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/assignsecrettoken",
        data: email,
      });
      // console.log("assigned secretToken from AdminAction FILE :::: : ", data);
      if (data.success) {
        // console.log("success part run : ");
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
        dispatch(adminAlreadyVarifiedAction(data));
        setTimeout(() => {
          dispatch(adminAlreadyVarifiedAction({}));
        }, 6000);
      } else {
        // console.log(" from else block assigned secretToken : ", data);
        if (data.EMAILSENDsuccess) {
          // console.log(" else than if block assigned secretToken : ", data);
          dispatch(adminAssignSecretTokenAction(data));
          dispatch({
            type: "HAVE_TO_STOP_SPINNER",
          });

          setTimeout(() => {
            dispatch(adminAssignSecretTokenAction({}));
          }, 6000);
        } else {
          dispatch({
            type: "SET_ADMIN_EMAIL_SENDING_ERRORS",
            payload: data,
          });

          dispatch({
            type: "HAVE_TO_STOP_SPINNER",
          });

          setTimeout(() => {
            dispatch({
              type: "SET_ADMIN_EMAIL_SENDING_ERRORS",
              payload: {},
            });
          }, 6000);
        }
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_ADMIN_EMAIL_SENDING_ERRORS",
        payload: err,
      });
      // console.log("Error in adminPASSWORD Action file ", err.message);
    }
  };
};

// =========================================== [ OTP/secretToken VARIFY ] This is for HITTING [BACKEND] end point =====================================//
export const adminSecretTokenVarifyFuncFromAdminAction = (
  Email_And_SecretToken
) => {
  //  console.log(
  //   "userForgotpassOTPAsCredentials ",
  //   userForgotpassOTPAsCredentials
  // );
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/varifytoken",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/varifytoken",
        data: Email_And_SecretToken,
      });
      // console.log("OTPVarify data from user action FILE : ", data);
      if (data.OTPVARIFYsuccess) {
        dispatch(adminAssignSecretTokenVarifyAction(data));
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      } else {
        dispatch({
          type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
          payload: data,
        });
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
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

// =========================================== [ LOGIN ]This is for HITTING [BACKEND] end point =====================================//
export const adminLoginFuncFromadminAction = (
  adminLoginCredentials,
  history
) => {
  return async (dispatch) => {
    dispatch({
      type: "HAVE_TO_LOAD_SPINNER",
    });
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/login",
        url: "https://robin--project-mern-backend.herokuapp.com/admins/login",
        data: adminLoginCredentials,
      });
      // console.log("data from admin action FILE : ", data);
      if (data.success) {
        // dispatch(adminLoginForMessageAction(data));
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });

        const { token } = data;
        localStorage.setItem("adminJwtToken", token);

        setAuthToken(token);
        const decoded = jwt_decode(token);

        dispatch(adminLoginForMessageAction(data));
        dispatch(adminLoginAction(decoded.admin));

        history.push("/");

        setTimeout(() => {
          dispatch(adminLoginForMessageAction({}));
        }, 6000);
      } else {
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });

        dispatch({
          type: "SET_LOGIN_ERRORS",
          payload: data,
        });

        setTimeout(() => {
          dispatch({
            type: "SET_LOGIN_ERRORS",
            payload: {},
          });
        }, 6000);
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_LOGIN_ERRORS",
        payload: err,
      });
      // console.log("Error in adminLogin Action file ", err.message);
    }
  };
};

// =========================================== [ EMAIL SEND  ] This is for HITTING [BACKEND] end point =====================================//
export const adminForgotpassFuncFromadminAction = (
  adminForgotpassCredentials
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/forgotpassword",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/forgotpassword",
        data: adminForgotpassCredentials,
      });
      // console.log("ForgotPAss data from admin action FILE : ", data);
      if (data.success) {
        dispatch(adminForgotPassAction(data));
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      } else {
        dispatch({
          type: "SET_CHANGE_PASSWORD_ERRORS",
          payload: data,
        });

        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_CHANGE_PASSWORD_ERRORS",
        payload: err,
      });
      // console.log("Error in adminPASSWORD Action file ", err.message);
    }
  };
};

// =========================================== [ OTP VARIFY ] This is for HITTING [BACKEND] end point =====================================//
export const adminForgotPassOtpVarifyFuncFromadminAction = (
  adminForgotpassOTPAsCredentials
) => {
  //  console.log(
  //   "adminForgotpassOTPAsCredentials ",
  //   adminForgotpassOTPAsCredentials
  // );
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/varifyotp",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/varifyotp",
        data: adminForgotpassOTPAsCredentials,
      });
      // console.log("OTPVarify data from admin action FILE : ", data);
      if (data.OTPVARIFYsuccess) {
        dispatch(adminForgotPassOtpVarifyAction(data));
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      } else {
        dispatch({
          type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
          payload: data,
        });
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
        payload: err.message,
      });
      // console.log(
      //   "Error in adminPASSWORD OTP varify Action file ",
      //   err.message
      // );
    }
  };
};

// =========================================== [ NEW CREDIENTIALS ] This is for HITTING [BACKEND] end point =====================================//
export const adminForgotPassNEWCredentialsFromadminAction = (
  adminForgotpassNEWCredentials,
  history
) => {
  // console.log(
  //   "adminForgotpassNEWCredentials ",
  //   adminForgotpassNEWCredentials
  // );
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        // url: "http://localhost:5000/admins/changepassword",
        url:
          "https://robin--project-mern-backend.herokuapp.com/admins/changepassword",
        data: adminForgotpassNEWCredentials,
      });
      //  console.log(
      //   "adminForgotpassNEWCredentials data from admin action FILE : ",
      //   data
      // );
      if (data.success) {
        dispatch(adminForgotpassNEWCredentialsAction(data));
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
        setTimeout(() => {
          history.push("/login");
        });
      } else {
        dispatch({
          type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
          payload: data,
        });
        dispatch({
          type: "HAVE_TO_STOP_SPINNER",
        });
      }
    } catch (err) {
      // console.log("from catch block");
      dispatch({
        type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
        payload: err.message,
      });
      // console.log(
      //   "Error in adminPASSWORD OTP varify Action file ",
      //   err.message
      // );
    }
  };
};

export const getAllInvesters = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "localhost:5000/admins/getalladmims",
      });
      dispatch({
        type: "SET_ALL_ADMINS",
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
        payload: err,
      });
    }
  };
};

export const setadminLoggedIn = (data) => {
  return {
    type: SET_ADMIN_LOGGED_IN,
    payload: data,
  };
};

export const setAdminNameInsideAsidebar = (data) => {
  return {
    type: ADMINNAME_FOR_ASIDEBAR_DATA_INTO_REDUX_STORE,
    payload: data,
  };
};

export const loggedInBy = () => {
  return {
    type: ADD_LOGGED_IN_BY,
  };
};
export const removeLoggedInBy = () => {
  return {
    type: REMOVE_LOGGED_IN_BY,
  };
};

export const adminLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("adminJwtToken");
    setAuthToken(false);
    dispatch(adminLogoutAction({}));
    dispatch(setAdminNameInsideAsidebar(""));
  };
};
