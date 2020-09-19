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
