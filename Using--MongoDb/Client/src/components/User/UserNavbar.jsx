import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/userAction";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );

  const logoutHandler = () => {
    dispatch(userLogout());
    history.push("/");
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className=' main-header navbar navbar-expand navbar-white navbar-light'>
        {/* <!-- Left navbar links --> */}
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              data-widget='pushmenu'
              to='#!'
              role='button'>
              <i className='fas fa-bars' />
            </Link>
          </li>
<<<<<<< HEAD
          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/register' className='nav-link'>
              Register
            </Link>
          </li>

          <li className='nav-item d-none d-sm-inline-block'>
            <Link to='/Invest' className='nav-link'>
              Invest
            </Link>
          </li>

=======
>>>>>>> 30d875493aa151924528f2fc030f851253200f74
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className='navbar-nav ml-auto'>
          {userLoginDatafromstore.isAuthenticated === true ? (
            <Link to='/' className='nav-link' onClick={logoutHandler}>
              LogOut
            </Link>
          ) : (
            <>
              <Link to='/login' className='nav-link'>
                Login
              </Link>

              <Link to='/register' className='nav-link'>
                Register
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default React.memo(NavBar);
