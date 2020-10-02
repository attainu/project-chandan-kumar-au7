import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ====================== Redux Imports And related things  =====================================================================//

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userRegisterFuncFromUserAction } from "../redux/actions/userAction";
import { adminRegisterFuncFromadminAction } from "../redux/actions/adminAction";

import { userRegisterAction } from "../redux/actions/userAction";
import { adminRegisterAction } from "../redux/actions/adminAction";
import { userRegisterErrorAction } from "../redux/actions/errorAction";

// ====================== Redux Imports And related things =====================================================================//

// ====================== Starts Of Register Function =====================================================================//

const Register = () => {
  const dispatch = useDispatch();
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);
  const userdatafromstore = useSelector((store) => store.userDataFromStore);
  const admindatafromstore = useSelector((store) => store.adminDataFromStore);

  const history = useHistory();

  // ====================== local states and related thhings  =====================================================================//

  const [UserType, setUserType] = useState("user");

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [secret, setsecret] = useState("");

  var [UsError, setUsError] = useState("");
  var [EmError, setEmError] = useState("");
  var [PassError, setPassError] = useState("");
  var [ConPassError, setConPassError] = useState("");
  var [SecretTokenError, setSecretTokenError] = useState("");

  // ====================== END OF local states and related thhings =====================================================================//

  // ====================== The form submit handler for USer =====================================================================//

  const formSubmitHandlerForUser = (e) => {
    e.preventDefault();
    // console.log(RegisteredData);

    // console.log("error from error root store ", errorRoot);
    // console.log(typeof errorRoot);

    if (username.length < 6) {
      setUsError("username must have more than 6 char.");
    }
    if (!email) {
      setEmError("You Can't Skip email");
    }
    if (!password) {
      setPassError("You Can't Skip password");
    } else if (password !== confirmPassword) {
      setConPassError("ConfirmPassword must be same as password ");
    } else {
      // console.log("line 44 ErrorFromDb ", ErrorFromDb);

      // ============ this is for comparing two object ====================================//

      if (
        Object.keys(userdatafromstore.user).length !== 0 ||
        Object.keys(errordatafromstore.registerErrors).length !== 0
      ) {
        dispatch(userRegisterErrorAction({}));
        dispatch(userRegisterAction({}));
      }

      // ============ End of this is for comparing two object =========//

      // ====== this is for serving local data inside redux store  =======//

      dispatch(
        userRegisterFuncFromUserAction(
          { username, email, password, confirmPassword },
          history
        )
      );
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
      // ====== End of this is for serving local data inside redux store  =======//
    }
  };

  // ====================== The form submit handler for ADmin =====================================================================//

  const formSubmitHandlerForAdmin = (e) => {
    e.preventDefault();
    // console.log(RegisteredData);

    // console.log("error from error root store ", errorRoot);
    // console.log(typeof errorRoot);

    if (username.length < 6) {
      setUsError("username must have more than 6 char.");
    }
    if (!email) {
      setEmError("You Can't Skip email");
    }
    if (!password) {
      setPassError("You Can't Skip password");
    }
    if (!secret) {
      setsecret("You Can't Skip SecretToken Field");
    } else if (password !== confirmPassword) {
      setConPassError("ConfirmPassword must be same as password ");
    } else {
      // console.log("line 44 ErrorFromDb ", ErrorFromDb);

      // ============ this is for comparing two object ====================================//

      if (
        Object.keys(admindatafromstore.admin).length !== 0 ||
        Object.keys(errordatafromstore.registerErrors).length !== 0
      ) {
        dispatch(userRegisterErrorAction({}));
        dispatch(adminRegisterAction({}));
      }

      dispatch(
        adminRegisterFuncFromadminAction(
          { username, secret, email, password, confirmPassword },
          history
        )
      );
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
    }
  };

  useEffect(
    () => {
      // const sefd = Object.keys(userdatafromstore.user).length > 0;
      // console.log(!sefd);
      // if (sefd) {
      //   setSuccessFromDb(userdatafromstore.user);
      // setErrorFromDb({});
      // console.log("line 60 ErrorFromDb ", ErrorFromDb);
      // console.log("line 61 SuccessFromDb ", SuccessFromDb);
      // } else if (sefd) {
      //   setErrorFromDb(errordatafromstore.registerErrors);
      // console.log("line 65 ErrorFromDb ", ErrorFromDb);
      // console.log("line 66 SuccessFromDb ", SuccessFromDb);
      // }
    },
    [
      // errordatafromstore, userdatafromstore
    ]
  );

  return (
    <>
      <div className='register-page' style={{ minHeight: "700px" }}>
        <div className='register-box'>
          <div className='register-logo'>
            <b>Register</b> Here
          </div>

          <div className='card'>
            <div className='card-body register-card-body'>
              <p className='login-box-msg'>*NOTE : All filds are mandatory</p>
              {/* ============ form  =-================== */}
              <form>
                {/* ============ username  =-================== */}

                <div className='input-group mb-3'>
                  <input
                    onChange={(e) => {
                      setusername(e.target.value);
                      setUsError("");
                    }}
                    type='text'
                    className='form-control'
                    placeholder='User Name'
                  />

                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-user'></span>
                    </div>
                  </div>

                  {/* ============ toggler for switching between user and admin  =-================== */}

                  <div>
                    <select
                      className='custom-select'
                      id='inputGroupSelect03'
                      aria-label='Example select with button addon'
                      onChange={(e) => setUserType(e.target.value)}>
                      <option value='user'>USER</option>

                      <option value='admin'>ADMIN</option>
                    </select>
                  </div>
                </div>
                {/* ============ username  =-================== */}

                {/* ============ username errors or validation msg  =-================== */}

                <h6 style={{ color: "red", textAlign: "left" }}>{UsError}</h6>

                {/* ============ email =-================== */}

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
                </div>
                {/* ============ email errors or validation msg  =-================== */}

                <h6 style={{ color: "red", textAlign: "left" }}>{EmError}</h6>

                {/* ========== Secret Token Provide By Admin ======================================================================== */}

                {UserType === "admin" ? (
                  <div className='input-group mb-3'>
                    <input
                      onChange={(e) => {
                        setsecret(e.target.value);
                        setSecretTokenError("");
                      }}
                      type='text'
                      className='form-control'
                      placeholder='Secret Token Provide By Admin'
                    />
                    <div className='input-group-append'>
                      <div className='input-group-text'>
                        <span className='fas fa-lock'></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <h6 style={{ color: "red", textAlign: "left" }}>
                  {SecretTokenError}
                </h6>

                {/* ========== END OF Secret Token Provide By Admin ======================================================================== */}

                {/* ============ password   =-================== */}

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
                <h6 style={{ color: "red", textAlign: "left" }}>{PassError}</h6>
                <div className='input-group mb-3'>
                  {/* ============ erors   =-================== */}

                  <input
                    onChange={(e) => {
                      setconfirmPassword(e.target.value);
                      setConPassError("");
                    }}
                    type='password'
                    className='form-control'
                    placeholder='Retype password'
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-lock'></span>
                    </div>
                  </div>
                </div>
                {/* ============ errors   =-================== */}

                <h6 style={{ color: "red", textAlign: "left" }}>
                  {ConPassError}
                </h6>

                <div className='row'>
                  <div className='col-8'>
                    <label htmlFor='agreeTerms'>
                      * you will be agreed to our <Link to='#!'>terms .</Link>
                    </label>
                  </div>

                  {/* ============ buttons for user and admin   =-================== */}

                  <div className='col-4'>
                    {UserType === "admin" ? (
                      <button
                        onClick={formSubmitHandlerForAdmin}
                        type='submit'
                        className='btn btn-primary btn-block'>
                        Regi_as_A
                      </button>
                    ) : (
                      <button
                        onClick={formSubmitHandlerForUser}
                        type='submit'
                        className='btn btn-primary btn-block'>
                        Regi_as_U
                      </button>
                    )}
                  </div>
                  {/* ============ end of  buttons for user and admin   =-================== */}

                  {/* <!-- /.col --> */}
                </div>
              </form>

              <div className='social-auth-links text-center'>
                {Object.keys(errordatafromstore.registerErrors).length === 0 ? (
                  <></>
                ) : (
                  <h6 style={{ color: "red" }}>
                    {JSON.stringify(errordatafromstore.registerErrors.error)}
                  </h6>
                )}
                {Object.keys(userdatafromstore.user).length === 0 ? (
                  <></>
                ) : (
                  <h6 style={{ color: "red" }}>
                    {JSON.stringify(userdatafromstore.user.success)}
                  </h6>
                )}
                {/* <p>- OR -</p>
                <Link to='!#' className='btn btn-block btn-primary'>
                  <i className='fab fa-facebook mr-2'></i>
                  Sign up using Facebook
                </Link>
                <Link to='!#' className='btn btn-block btn-danger'>
                  <i className='fab fa-google-plus mr-2'></i>
                  Sign up using Google+
                </Link> */}
              </div>

              <Link to='/login' className='text-center'>
                I already have a membership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
