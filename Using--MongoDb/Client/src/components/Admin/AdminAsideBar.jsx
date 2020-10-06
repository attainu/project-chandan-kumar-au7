import React from "react";
import Logo from "../../favicon.ico";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Asidebar() {
  const adminDataFromStore = useSelector((store) => store.adminDataFromStore);

  return (
    <>
      {/* ---------------------------Starts of Main Sidebar Container -------------------------- */}

      <aside
        className='main-sidebar sidebar-dark-primary elevation-4'
        style={{
          position: "fixed",
          color: "#2ecc71",
          textAlign: "left",
        }}>
        {/* <!-- Brand Logo --> */}
        <Link to='/' style={{ color: "hotpink" }} className='brand-link'>
          <img
            src={Logo}
            alt='Logo'
            style={{ opacity: ".8", height: "100px" }}
          />

          <span className='brand-text font-weight-light'>ADMIN PANNEL</span>
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
              Welcome : {adminDataFromStore.adminnameforasidebar}
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}

          <nav className='mt-2'>
            <Link className='brand-link coustomlink' to='/allusers'>
              All_Users
            </Link>

            <Link className='brand-link coustomlink' to='/allinvesters'>
              All_investors
            </Link>

            <ul
              className='nav nav-pills nav-sidebar flex-column'
              data-widget='treeview'
              role='menu'
              data-accordion='false'>
              {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
              <li className='nav-item has-treeview'>
                <Link to='!#' className='nav-link'>
                  <p>
                    Admin_Cont ...
                    <i className='right fas fa-angle-left'></i>
                  </p>
                </Link>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <Link className=' coustomlink' to='/allinvesters'>
                      <i className='far fa-circle nav-icon'></i>
                      All_Admins
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className=' coustomlink' to='/allinvesters'>
                      <i className='far fa-circle nav-icon'></i>
                      All_Admins_pendings
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

export default Asidebar;
