import React from "react";
import "../Style/NavBar.css";
import Logo from "../favicon.ico";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div class='hold-transition sidebar-mini'>
        {/* <!-- Navbar --> */}
        <nav class='main-header navbar navbar-expand navbar-white navbar-light'>
          {/* <!-- Left navbar links --> */}
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <Link
                class='nav-link'
                data-widget='pushmenu'
                to='#!'
                role='button'>
                <i class='fas fa-bars' />
              </Link>
            </li>
            <li class='nav-item d-none d-sm-inline-block'>
              <Link to='/' class='nav-link'>
                Home
              </Link>
            </li>
            <li class='nav-item d-none d-sm-inline-block'>
              <Link to='/login' class='nav-link'>
                Login
              </Link>
            </li>
            <li class='nav-item d-none d-sm-inline-block'>
              <Link to='/register' class='nav-link'>
                Register
              </Link>
            </li>
          </ul>

          {/* <!-- SEARCH FORM --> */}
          <form class='form-inline ml-3'>
            <div class='input-group input-group-sm'>
              <input
                class='form-control form-control-navbar'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <div class='input-group-append'>
                <button class='btn btn-navbar' type='submit'>
                  <i class='fas fa-search' />
                </button>
              </div>
            </div>
          </form>

          {/* <!-- Right navbar links --> */}
          <ul class='navbar-nav ml-auto'>
            {/* <!-- Messages Dropdown Menu --> */}
            <li class='nav-item dropdown'>
              <Link class='nav-link' data-toggle='dropdown' to='!#'>
                <i class='far fa-comments' />
                <span class='badge badge-danger navbar-badge'>3</span>
              </Link>
              <div class='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                <Link to='!#' class='dropdown-item'>
                  {/* <!-- Message Start --> */}
                  <div class='media'>
                    <img
                      src='dist/img/user1-128x128.jpg'
                      alt='User Avatar'
                      class='img-size-50 mr-3 img-circle'
                    />
                    <div class='media-body'>
                      <h3 class='dropdown-item-title'>
                        Brad Diesel
                        <span class='float-right text-sm text-danger'>
                          <i class='fas fa-star' />
                        </span>
                      </h3>
                      <p class='text-sm'>Call me whenever you can...</p>
                      <p class='text-sm text-muted'>
                        <i class='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item'>
                  {/* <!-- Message Start --> */}
                  <div class='media'>
                    <img
                      src='dist/img/user8-128x128.jpg'
                      alt='User Avatar'
                      class='img-size-50 img-circle mr-3'
                    />
                    <div class='media-body'>
                      <h3 class='dropdown-item-title'>
                        John Pierce
                        <span class='float-right text-sm text-muted'>
                          <i class='fas fa-star' />
                        </span>
                      </h3>
                      <p class='text-sm'>I got your message bro</p>
                      <p class='text-sm text-muted'>
                        <i class='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item'>
                  {/* <!-- Message Start --> */}
                  <div class='media'>
                    <img
                      src='dist/img/user3-128x128.jpg'
                      alt='User Avatar'
                      class='img-size-50 img-circle mr-3'
                    />
                    <div class='media-body'>
                      <h3 class='dropdown-item-title'>
                        Nora Silvester
                        <span class='float-right text-sm text-warning'>
                          <i class='fas fa-star' />
                        </span>
                      </h3>
                      <p class='text-sm'>The subject goes here</p>
                      <p class='text-sm text-muted'>
                        <i class='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item dropdown-footer'>
                  See All Messages
                </Link>
              </div>
            </li>
            {/* <!-- Notifications Dropdown Menu --> */}
            <li class='nav-item dropdown'>
              <Link class='nav-link' data-toggle='dropdown' to='!#'>
                <i class='far fa-bell' />
                <span class='badge badge-warning navbar-badge'>15</span>
              </Link>
              <div class='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                <span class='dropdown-item dropdown-header'>
                  15 Notifications
                </span>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item'>
                  <i class='fas fa-envelope mr-2'> 4 new messages </i>
                  <span class='float-right text-muted text-sm'>3 mins</span>
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item'>
                  <i class='fas fa-users mr-2'> 8 friend requests </i>
                  <span class='float-right text-muted text-sm'>12 hours</span>
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item'>
                  <i class='fas fa-file mr-2'> 3 new reports</i>
                  <span class='float-right text-muted text-sm'>2 days</span>
                </Link>
                <div class='dropdown-divider'></div>
                <Link to='!#' class='dropdown-item dropdown-footer'>
                  See All Notifications
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* --------------------------------------this is end of nav bar --------------------------------- */}

        {/* ---------------------------Main Sidebar Container -------------------------- */}

        <aside class='main-sidebar sidebar-dark-primary elevation-4'>
          {/* <!-- Brand Logo --> */}
          <Link to='/' class='brand-link'>
            <img
              src={Logo}
              alt='AdminLTE Logo'
              class='brand-image img-circle elevation-3'
              style={{ opacity: ".8" }}
            />

            <span class='brand-text font-weight-light'>Robin__project</span>
          </Link>

          {/* <!-- Sidebar --> */}
          <div class='sidebar'>
            {/* <!-- Sidebar user panel (optional) --> */}
            <div class='user-panel mt-3 pb-3 mb-3 d-flex'>
              <div class='image'>
                <img
                  src='./dist/img/user2-160x160.jpg'
                  class='img-circle elevation-2'
                  alt='UserImage'
                />
              </div>
              <div class='info'>
                <Link to='!#' class='d-block'>
                  chandan
                </Link>
              </div>
            </div>

            {/* <!-- Sidebar Menu --> */}
            <nav class='mt-2'>
              <ul
                class='nav nav-pills nav-sidebar flex-column'
                data-widget='treeview'
                role='menu'
                data-accordion='false'>
                {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
                <li class='nav-item has-treeview'>
                  <Link to='!#' class='nav-link'>
                    <i class='nav-icon fas fa-tachometer-alt'></i>
                    <p>
                      Dashboard
                      <i class='right fas fa-angle-left'></i>
                    </p>
                  </Link>
                  <ul class='nav nav-treeview'>
                    <li class='nav-item'>
                      <Link to='../index.html' class='nav-link'>
                        <i class='far fa-circle nav-icon'></i>
                        <p>example 1</p>
                      </Link>
                    </li>
                    <li class='nav-item'>
                      <Link to='../index2.html' class='nav-link'>
                        <i class='far fa-circle nav-icon'></i>
                        <p>example 2</p>
                      </Link>
                    </li>
                    <li class='nav-item'>
                      <Link to='../index3.html' class='nav-link'>
                        <i class='far fa-circle nav-icon'></i>
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
