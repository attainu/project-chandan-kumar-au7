import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLoginFuncFromUserAction } from "../redux/actions/userAction";
import { userLoginSuccessAction } from "../redux/actions/userAction";

import {
  userLoginErrorAction,
  adminLoginErrorAction,
} from "../redux/actions/errorAction";

import {
  adminAssignSecretTokenFuncFromadminAction,
  adminSecretTokenVarifyFuncFromAdminAction,
  adminLoginFuncFromadminAction,
  adminAssignSecretTokenVarifyAction,
  // adminAssignSecretTokenAction,
} from "../redux/actions/adminAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );
  const admindatafromstore = useSelector((store) => store.adminDataFromStore);
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);

  const [isSentEmail, setisSentEmail] = useState(false);
  const [isVarifiedOTP, setisVarifiedOTP] = useState(false);

  const [UserType, setUserType] = useState("user");
  const [secret, setsecret] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  var [EmError, setEmError] = useState("");
  var [PassError, setPassError] = useState("");
  var [OtpSendError, setOtpSendError] = useState("");

  // =========================== form submit handler for USer ================================= //
  const formSubmitHandlerForUser = (e) => {
    e.preventDefault();

    if (!email) {
      setEmError("You Can't Skip email");
    }
    if (!password) {
      setPassError("You Can't Skip password");
    } else {
      if (
        Object.keys(userLoginDatafromstore.loginsuccess).length !== 0 ||
        Object.keys(errordatafromstore.error).length !== 0
      ) {
        dispatch(userLoginErrorAction({}));
        dispatch(userLoginSuccessAction({}));
      }

      dispatch(userLoginFuncFromUserAction({ email, password }, history));
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
      dispatch({
        type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
      });
      // console.log(userLoginDatafromstore);
    }
  };

  // ========== form submit handler starts from here ==========================================//
  // ========== this is for admnin email send for secret token ================================//
  const EmailSendSubmitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setEmError("* This Field Is Reqired");
    } else {
      // if (
      //   // Object.keys(admindatafromstore).length !== 0 ||
      //   Object.keys(errordatafromstore.error).length !== 0
      // ) {
      //   dispatch(adminAssignSecretTokenAction({}));
      // }
      dispatch(adminAssignSecretTokenFuncFromadminAction({ email }));

      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
    }
  };

  // ========== this is for admin secret token varify (where secret_token === otp) so mind it= //
  const OtpVarifySubmitHandler = (e) => {
    e.preventDefault();
    if (secret) {
      if (
        Object.keys(admindatafromstore.admin).length !== 0 ||
        Object.keys(errordatafromstore.error).length !== 0
      ) {
        dispatch(adminAssignSecretTokenVarifyAction({}));
      }
      dispatch(adminSecretTokenVarifyFuncFromAdminAction({ email, secret }));
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
    } else {
      setEmError("* This Field Is Reqired");
    }
  };

  // ========== this is for whole form submit with admin password ============================= //
  const AdminFormSubmitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmError("You Can't Skip email");
    }
    if (!password) {
      setPassError("You Can't Skip password");
    } else {
      if (
        Object.keys(admindatafromstore.admin).length !== 0 ||
        Object.keys(errordatafromstore.error).length !== 0
      ) {
        dispatch(adminLoginErrorAction({}));
      }

      dispatch(adminLoginFuncFromadminAction({ email, password }, history));
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
      dispatch({
        type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
      });
    }
  };

  // =========================== End of form submit handler ================================= //

  useEffect(() => {
    console.log("ADMINSTORE : =====> : ", admindatafromstore);
    if (admindatafromstore.adminloginsuccess.success) {
      setisSentEmail(true);
      setisVarifiedOTP(true);
      // console.log("inside ", isVarifiedOTP);
    } else {
      if (isVarifiedOTP === false) {
        if (admindatafromstore.adminloginsuccess.EMAILSENDsuccess) {
          setTimeout(() => {
            setisSentEmail(true);
          }, 5000);
        } else if (admindatafromstore.adminloginsuccess.OTPVARIFYsuccess) {
          setTimeout(() => {
            setisVarifiedOTP(true);
          }, 5000);
        }
      }
    }
  }, [admindatafromstore, isVarifiedOTP]);

  return (
    <>
      <div className='hold-transition login-page'>
        <div className='login-box'>
          <div className='login-logo'>
            {UserType === "user" ? (
              <>
                <b>Login</b>Page For USER
              </>
            ) : (
              <>
                <b>Login</b>Page For ADMIN
              </>
            )}
          </div>
          <div className='card'>
            <div className='card-body login-card-body'>
              <p className='login-box-msg'>*NOTE : All filds are mandatory</p>

              {/* // ===========================  start condition for user login form  ================================= // */}
              {UserType === "user" ? (
                <>
                  <form>
                    <div className='input-group mb-3'>
                      <input
                        onChange={(e) => {
                          setemail(e.target.value);
                          setEmError("");
                        }}
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />

                      <div className='input-group-append'>
                        <div className='input-group-text'>
                          <span className='fas fa-envelope'></span>
                        </div>
                      </div>

                      <span
                        style={{
                          border: "1px solid black",
                          height: "38px",
                        }}
                        className='btn btn-outline-info'
                        onClick={() => setUserType("admin")}>
                        admin
                      </span>
                    </div>

                    <h6 style={{ color: "red", textAlign: "left" }}>
                      {EmError}
                    </h6>

                    {/* // =========================== End Of INPut FIeld ================================= // */}

                    {/* // =========================== password FIeld ================================= // */}

                    <div className='input-group mb-3'>
                      <input
                        onChange={(e) => {
                          setpassword(e.target.value);
                          setPassError("");
                        }}
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                      <div className='input-group-append'>
                        <div className='input-group-text'>
                          <span className='fas fa-lock'></span>
                        </div>
                      </div>
                    </div>

                    <h6 style={{ color: "red", textAlign: "left" }}>
                      {PassError}
                    </h6>

                    <button
                      onClick={formSubmitHandlerForUser}
                      type='submit'
                      className='btn btn-block btn-outline-success btn-sm'>
                      Sign_In_as_USER
                    </button>
                  </form>
                </>
              ) : (
                <></>
              )}
              {/* // =========================== end condition for user login form ================================= // */}

              {/* // =========================== BUTTON CONDITION PART FOR SWITCH OF USER AND ADMIN  ================================= // */}

              {UserType === "admin" ? (
                <>
                  <form onSubmit={AdminFormSubmitHandler}>
                    {/* ============================ email sending, generating token, ===================  */}
                    <div className='input-group mb-3'>
                      <input
                        onChange={(e) => {
                          setemail(e.target.value);
                          setEmError("");
                        }}
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />

                      <div className='input-group-append'>
                        <div className='input-group-text'>
                          <button
                            onClick={EmailSendSubmitHandler}
                            className='fas fa-envelope btn btn-block btn-outline-success btn-sm'
                            type='submit'></button>
                        </div>
                      </div>

                      <span
                        style={{
                          border: "1px solid black",
                          height: "38px",
                        }}
                        className='btn btn-outline-info'
                        onClick={() => setUserType("user")}>
                        users
                      </span>
                    </div>

                    <h6 style={{ color: "red", textAlign: "left" }}>
                      {EmError}
                    </h6>
                    {/* ============================ End of  email sending, generating token, ===================  */}

                    {isSentEmail === true ? (
                      <>
                        {isVarifiedOTP === false ? (
                          <>
                            <div className='input-group mb-3'>
                              <input
                                onChange={(e) => {
                                  setsecret(e.target.value);
                                  setOtpSendError("");
                                }}
                                type='test'
                                className='form-control'
                                placeholder='Otp'
                              />
                              <div className='input-group-append'>
                                <div className='input-group-text'>
                                  <button
                                    onClick={OtpVarifySubmitHandler}
                                    className='fas fa-mars-double fa-sm btn btn-block btn-outline-success btn-sm'
                                    type='submit'></button>
                                </div>
                              </div>
                            </div>

                            <h6 style={{ color: "red", textAlign: "left" }}>
                              {OtpSendError}
                            </h6>
                          </>
                        ) : (
                          <>
                            {/* ================== End OTP Div ================ */}

                            {/* =========== Start Password Div =========== */}

                            <div className='input-group mb-3'>
                              <input
                                onChange={(e) => {
                                  setpassword(e.target.value);
                                  setPassError("");
                                }}
                                type='password'
                                className='form-control'
                                placeholder='Password'
                              />
                              <div className='input-group-append'>
                                <div className='input-group-text'>
                                  <span className='fas fa-lock'></span>
                                </div>
                              </div>
                            </div>

                            <h6 style={{ color: "red", textAlign: "left" }}>
                              {PassError}
                            </h6>

                            <button
                              type='submit'
                              className='btn btn-block btn-outline-success btn-sm'>
                              Sign_In_as_ADMIN
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </form>
                </>
              ) : (
                <></>
              )}

              <br />
              <p className='mb-1'>
                <Link to='/forgot'>I Have forgot my password</Link>
              </p>
              <p className='mb-0'>
                <Link to='/register' className='text-center'>
                  Don't have a account !
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
