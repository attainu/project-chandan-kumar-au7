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
