import React from "react";

import "../Style/NavBar.css";
import Logo from "../favicon.ico";

import { Link } from "react-router-dom";

function NavBar() {
  const M = window.M;
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });

  return (
    <>
      <nav>
        <div style={{ background: "#EE6E73" }} className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            <img className='mainimg' src={Logo} alt='logo' />
          </Link>
          <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </Link>

          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'> Login </Link>
            </li>
            <li>
              <Link to='/register'> Signup </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* this block of code is for sidebar */}
      <ul className='sidenav' id='mobile-demo'>
        <Link
          className='sidenav-close'
          style={{ margin: 0, padding: 0, color: "red" }}
          to='/'>
          <h3>
            <img className='navimgaslogo' src={Logo} alt='logo' />
          </h3>
        </Link>

        <li>
          <Link className='sidenav-close' to='/'>
            Login
          </Link>
        </li>
        <li>
          <Link className='sidenav-close' to='/register'>
            Register
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
