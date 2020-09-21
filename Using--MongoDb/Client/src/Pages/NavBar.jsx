import React from "react";
import "../Style/NavBar.css";
import Logo from "../favicon.ico";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className='hold-transition sidebar-mini'>
        {/* <!-- Navbar --> */}
        <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
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
          </ul>

          {/* <!-- SEARCH FORM --> */}
          <form className='form-inline ml-3'>
            <div className='input-group input-group-sm'>
              <input
                className='form-control form-control-navbar'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <div className='input-group-append'>
                <button className='btn btn-navbar' type='submit'>
                  <i className='fas fa-search' />
                </button>
              </div>
            </div>
          </form>

          {/* <!-- Right navbar links --> */}
          <ul className='navbar-nav ml-auto'>
            {/* <!-- Messages Dropdown Menu --> */}
            <li className='nav-item dropdown'>
              <Link className='nav-link' data-toggle='dropdown' to='!#'>
                <i className='far fa-comments' />
                <span className='badge badge-danger navbar-badge'>3</span>
              </Link>
              <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                <Link to='!#' className='dropdown-item'>
                  {/* <!-- Message Start --> */}

                  <div className='media'>
                    <img
                      src='./Images/user.jpg'
                      alt='User'
                      className='img-size-50 mr-3 img-circle'
                    />
                    <div className='media-body'>
                      <h3 className='dropdown-item-title'>
                        Brad Diesel
                        <span className='float-right text-sm text-danger'>
                          <i className='fas fa-star' />
                        </span>
                      </h3>
                      <p className='text-sm'>Call me whenever you can...</p>
                      <p className='text-sm text-muted'>
                        <i className='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item'>
                  {/* <!-- Message Start --> */}
                  <div className='media'>
                    <img
                      src='./Images/user.jpg'
                      alt='User'
                      className='img-size-50 mr-3 img-circle'
                    />
                    <div className='media-body'>
                      <h3 className='dropdown-item-title'>
                        John Pierce
                        <span className='float-right text-sm text-muted'>
                          <i className='fas fa-star' />
                        </span>
                      </h3>
                      <p className='text-sm'>I got your message bro</p>
                      <p className='text-sm text-muted'>
                        <i className='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item'>
                  {/* <!-- Message Start --> */}
                  <div className='media'>
                    <img
                      src='./Images/user.jpg'
                      alt='User Avatar'
                      className='img-size-50 img-circle mr-3'
                    />
                    <div className='media-body'>
                      <h3 className='dropdown-item-title'>
                        Nora Silvester
                        <span className='float-right text-sm text-warning'>
                          <i className='fas fa-star' />
                        </span>
                      </h3>
                      <p className='text-sm'>The subject goes here</p>
                      <p className='text-sm text-muted'>
                        <i className='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item dropdown-footer'>
                  See All Messages
                </Link>
              </div>
            </li>
            {/* <!-- Notifications Dropdown Menu --> */}
            <li className='nav-item dropdown'>
              <Link className='nav-link' data-toggle='dropdown' to='!#'>
                <i className='far fa-bell' />

                <span className='badge badge-warning navbar-badge'>15</span>
              </Link>
              <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                <span className='dropdown-item dropdown-header'>
                  15 Notifications
                </span>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item'>
                  <i className='fas fa-envelope mr-2'> 4 new messages </i>
                  <span className='float-right text-muted text-sm'>3 mins</span>
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item'>
                  <i className='fas fa-users mr-2'> 8 friend requests </i>
                  <span className='float-right text-muted text-sm'>
                    12 hours
                  </span>
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item'>
                  <i className='fas fa-file mr-2'> 3 new reports</i>
                  <span className='float-right text-muted text-sm'>2 days</span>
                </Link>
                <div className='dropdown-divider'></div>
                <Link to='!#' className='dropdown-item dropdown-footer'>
                  See All Notifications
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* --------------------------------------this is end of nav bar --------------------------------- */}

        {/* ---------------------------Main Sidebar Container -------------------------- */}

        <aside className='main-sidebar sidebar-dark-primary elevation-4'>
          {/* <!-- Brand Logo --> */}
          <Link to='/' className='brand-link'>
            <img
              src={Logo}
              alt='AdminLTE Logo'
              className='brand-image img-circle elevation-3'
              style={{ opacity: ".8" }}
            />

            <span className='brand-text font-weight-light'>Robin__project</span>
          </Link>

          {/* <!-- Sidebar --> */}
          <div className='sidebar'>
            {/* <!-- Sidebar user panel (optional) --> */}
            <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
              <div className='image'>
                <img
                  src='./Images/user.jpg'
                  className='img-circle elevation-2'
                  alt='UserImg'
                />
              </div>
              <div className='info'>
                <Link to='!#' className='d-block'>
                  chandan
                </Link>
              </div>
            </div>

            {/* <!-- Sidebar Menu --> */}
            <nav className='mt-2'>
              <ul
                className='nav nav-pills nav-sidebar flex-column'
                data-widget='treeview'
                role='menu'
                data-accordion='false'>
                {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                <li className='nav-item has-treeview'>
                  <Link to='!#' className='nav-link'>
                    <i className='nav-icon fas fa-tachometer-alt'></i>
                    <p>
                      Dashboard
                      <i className='right fas fa-angle-left'></i>
                    </p>
                  </Link>
                  <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                      <Link to='../index.html' className='nav-link'>
                        <i className='far fa-circle nav-icon'></i>
                        <p>example 1</p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='../index2.html' className='nav-link'>
                        <i className='far fa-circle nav-icon'></i>
                        <p>example 2</p>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='../index3.html' className='nav-link'>
                        <i className='far fa-circle nav-icon'></i>
                        <p>example 3</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}

export default NavBar;
