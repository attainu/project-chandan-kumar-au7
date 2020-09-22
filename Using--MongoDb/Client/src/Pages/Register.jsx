import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userRegisterfuncfromUserAction } from "../redux/actions/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [RegisteredData, setRegisteredData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerm: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(RegisteredData);
    dispatch(userRegisterfuncfromUserAction(RegisteredData, history));
  };

  return (
    <>
      <div className='register-page' style={{ minHeight: "586.391px" }}>
        <div className='register-box'>
          <div className='register-logo'>
            <b>Register</b>Here
          </div>

          <div className='card'>
            <div className='card-body register-card-body'>
              <p className='login-box-msg'>Register a new membership</p>

              <form onSubmit={formSubmitHandler}>
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) =>
                      setRegisteredData({
                        ...RegisteredData,
                        username: e.target.value,
                      })
                    }
                    type='text'
                    className='form-control'
                    placeholder='Full name'
                  />
                  <div className='input-group-append'>
                    <div className='input-group-text'>
                      <span className='fas fa-user'></span>
                    </div>
                  </div>
                </div>
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) =>
                      setRegisteredData({
                        ...RegisteredData,
                        email: e.target.value,
                      })
                    }
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
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) =>
                      setRegisteredData({
                        ...RegisteredData,
                        password: e.target.value,
                      })
                    }
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
                <div className='input-group mb-3'>
                  <input
                    onChange={(e) =>
                      setRegisteredData({
                        ...RegisteredData,
                        confirmPassword: e.target.value,
                      })
                    }
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
                <div className='row'>
                  <div className='col-8'>
                    <div className='icheck-primary'>
                      <input
                        onChange={(e) =>
                          setRegisteredData({
                            ...RegisteredData,
                            agreeTerm: e.target.value,
                          })
                        }
                        type='checkbox'
                        id='agreeTerms'
                        name='terms'
                        value='agree'
                      />
                      <label htmlFor='agreeTerms'>
                        I agree to the <Link to='#!'>terms</Link>
                      </label>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className='col-4'>
                    <button type='submit' className='btn btn-primary btn-block'>
                      Register
                    </button>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
              </form>

              <div className='social-auth-links text-center'>
                <p>- OR -</p>
                <Link to='!#' className='btn btn-block btn-primary'>
                  <i className='fab fa-facebook mr-2'></i>
                  Sign up using Facebook
                </Link>
                <Link to='!#' className='btn btn-block btn-danger'>
                  <i className='fab fa-google-plus mr-2'></i>
                  Sign up using Google+
                </Link>
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
