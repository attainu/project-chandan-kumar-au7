import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/userAction";
import { adminLogout, removeLoggedInBy } from "../../redux/actions/adminAction";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );
  const adminLoginDatafromstore = useSelector(
    (store) => store.adminDataFromStore
  );

  const UserlogoutHandler = () => {
    dispatch(userLogout());
    dispatch(adminLogout());
    dispatch(removeLoggedInBy());

    history.push("/");
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className='fixed-top main-header navbar navbar-expand navbar-white navbar-light'>
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
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className='navbar-nav ml-auto'>
          {userLoginDatafromstore.isAuthenticated === true ||
          adminLoginDatafromstore.isAuthenticated === true ? (
            <Link to='/' className='nav-link' onClick={UserlogoutHandler}>
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

export default NavBar;
