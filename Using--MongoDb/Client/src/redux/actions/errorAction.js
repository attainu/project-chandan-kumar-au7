export const userRegisterErrorAction = (data) => {
  return {
    type: "SET_REGISTER_ERRORS",
    payload: data,
  };
};

export const userLoginErrorAction = (data) => {
  return {
    type: "SET_LOGIN_ERRORS",
    payload: data,
  };
};

export const userForgotPassErrorAction = (data) => {
  return {
    type: "SET_CHANGE_PASSWORD_ERRORS",
    payload: data,
  };
};

export const userForgotPassOtpVarifyErrorAction = (data) => {
  return {
    type: "SET_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
    payload: data,
  };
};

//  ========================== <<<<>>>> ====================================== //

export const adminRegisterErrorAction = (data) => {
  return {
    type: "SET_ADMIN_REGISTER_ERRORS",
    payload: data,
  };
};

export const adminLoginErrorAction = (data) => {
  return {
    type: "SET_ADMIN_LOGIN_ERRORS",
    payload: data,
  };
};

export const adminForgotPassErrorAction = (data) => {
  return {
    type: "SET_ADMIN_CHANGE_PASSWORD_ERRORS",
    payload: data,
  };
};

export const adminForgotPassOtpVarifyErrorAction = (data) => {
  return {
    type: "SET_ADMIN_FORGOTPASSWORD_OTP_VARIFY_ERRORS",
    payload: data,
  };
};
