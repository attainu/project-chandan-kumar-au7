import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLoginFuncFromUserAction } from "../redux/actions/userAction";
import { userLoginAction } from "../redux/actions/userAction";
import { userLoginErrorAction } from "../redux/actions/errorAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  var [EmError, setEmError] = useState("");
  var [PassError, setPassError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmError("You Can't Skip email");
    }
    if (!password) {
      setPassError("You Can't Skip password");
    } else {
      if (
        Object.keys(userLoginDatafromstore.user).length !== 0 ||
        Object.keys(errordatafromstore.loginErrors).length !== 0
      ) {
        dispatch(userLoginErrorAction({}));
        dispatch(userLoginAction({}));
      }
      dispatch(userLoginFuncFromUserAction({ email, password }, history));
      dispatch({
        type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
      });
      // console.log(userLoginDatafromstore);
    }
  };

  return (
    <>
      <div className='hold-transition login-page'>
        <div className='login-box'>
          <div className='login-logo'>
            <b>Login</b>Page
          </div>
          {/* <!-- /.login-logo --> */}
          <div className='card'>
            <div className='card-body login-card-body'>
              <p className='login-box-msg'>*NOTE : All filds are mandatory</p>

              <form onSubmit={formSubmitHandler}>
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

                <div className='col-sm-8 mx-auto'>
                  <button
                    type='submit'
                    className='btn btn-block btn-outline-success btn-sm'>
                    Sign In
                  </button>
                </div>
                {/* <!-- /.col --> */}
              </form>

              <div className='social-auth-links text-center mb-3'>
                <p>- OR -</p>
                <Link to='#!' className='btn btn-block btn-primary'>
                  <i className='fab fa-facebook mr-2' /> Sign in using Facebook
                </Link>
                <Link to='#!' className='btn btn-block btn-danger'>
                  <i className='fab fa-google-plus mr-2' /> Sign in using
                  Google+
                </Link>
              </div>
              {/* <!-- /.social-auth-links --> */}

              <p className='mb-1'>
                <Link to='/forgot'>I forgot my password</Link>
              </p>
              <p className='mb-0'>
                <Link to='/register' className='text-center'>
                  Don't have a account !
                </Link>
              </p>
            </div>
            {/* <!-- /.login-card-body --> */}
          </div>
        </div>
        {/* <!-- /.login-box --> */}
      </div>
    </>
  );
};

export default Login;
