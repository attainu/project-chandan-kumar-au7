import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class='hold-transition login-page'>
        <div class='login-box'>
          <div class='login-logo'>
            <b>Login</b>Page
          </div>
          {/* <!-- /.login-logo --> */}
          <div class='card'>
            <div class='card-body login-card-body'>
              <p class='login-box-msg'>Sign in to start your session</p>

              <form action='../../index3.html' method='post'>
                <div class='input-group mb-3'>
                  <input
                    type='email'
                    class='form-control'
                    placeholder='Email'
                  />
                  <div class='input-group-append'>
                    <div class='input-group-text'>
                      <span class='fas fa-envelope'></span>
                    </div>
                  </div>
                </div>
                <div class='input-group mb-3'>
                  <input
                    type='password'
                    class='form-control'
                    placeholder='Password'
                  />
                  <div class='input-group-append'>
                    <div class='input-group-text'>
                      <span class='fas fa-lock'></span>
                    </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-8'>
                    <div class='icheck-primary'>
                      <input type='checkbox' id='remember' />
                      <label for='remember'>Remember Me</label>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div class='col-4'>
                    <button type='submit' class='btn btn-primary btn-block'>
                      Sign In
                    </button>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
              </form>

              <div class='social-auth-links text-center mb-3'>
                <p>- OR -</p>
                <Link to='#!' class='btn btn-block btn-primary'>
                  <i class='fab fa-facebook mr-2' /> Sign in using Facebook
                </Link>
                <Link to='#!' class='btn btn-block btn-danger'>
                  <i class='fab fa-google-plus mr-2' /> Sign in using Google+
                </Link>
              </div>
              {/* <!-- /.social-auth-links --> */}

              <p class='mb-1'>
                <Link to='forgot-password.html'>I forgot my password</Link>
              </p>
              <p class='mb-0'>
                <Link to='register.html' class='text-center'>
                  Register a new membership
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
