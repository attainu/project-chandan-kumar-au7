import React from "react";
import Logo from "../../favicon.ico";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function RightAsideBar() {
  const userDataFromStore = useSelector((store) => store.userDataFromStore);

  return (
    <>
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        {/* <!-- Brand Logo --> */}
        <Link to='/' className='brand-link'>
          <img
            src={Logo}
            alt='AdminLTE Logo'
            style={{ opacity: ".8", height: "100px" }}
          />

          <span className='brand-text font-weight-light'>USER PANEL</span>
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
              {Object.keys(userDataFromStore) ? (
                <Link to='#!' className='d-block'>
                  Welcome : {JSON.stringify(userDataFromStore.user.username)}
                </Link>
              ) : (
                <></>
              )}
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
    </>
  );
}

export default RightAsideBar;
