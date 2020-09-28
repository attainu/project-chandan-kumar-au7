import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userRegisterFuncFromUserAction } from "../redux/actions/userAction";
import { userRegisterAction } from "../redux/actions/userAction";
import { userRegisterErrorAction } from "../redux/actions/errorAction";

const Register = () => {
  const dispatch = useDispatch();
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);
  const userdatafromstore = useSelector((store) => store.userDataFromStore);

  const history = useHistory();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  var [UsError, setUsError] = useState("");
  var [EmError, setEmError] = useState("");
  var [PassError, setPassError] = useState("");
  var [ConPassError, setConPassError] = useState("");
  // var [SuccessFromDb, setSuccessFromDb] = useState({});
  // var [ErrorFromDb, setErrorFromDb] = useState({});

  const formSubmitHandler = (e) => {
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

      if (
        Object.keys(userdatafromstore.user).length !== 0 ||
        Object.keys(errordatafromstore.registerErrors).length !== 0
      ) {
        dispatch(userRegisterErrorAction({}));
        dispatch(userRegisterAction({}));
      }

      dispatch(
        userRegisterFuncFromUserAction(
          { username, email, password, confirmPassword },
          history
        )
      );
      dispatch({
        type: "HAVE_TO_LOAD_SPINNER",
      });
    }
  };

  useEffect(() => {
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
  }, [errordatafromstore, userdatafromstore]);

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

              <form onSubmit={formSubmitHandler}>
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
                </div>
                <h6 style={{ color: "red", textAlign: "left" }}>{UsError}</h6>
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
                <h6 style={{ color: "red", textAlign: "left" }}>{EmError}</h6>
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
                <h6 style={{ color: "red", textAlign: "left" }}>
                  {ConPassError}
                </h6>
                <div className='row'>
                  <div className='col-8'>
                    <label htmlFor='agreeTerms'>
                      * you will be agreed to our <Link to='#!'>terms .</Link>
                    </label>
                  </div>

                  <div className='col-4'>
                    <button type='submit' className='btn btn-primary btn-block'>
                      Register
                    </button>
                  </div>
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
