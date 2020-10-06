import React, { useState, useEffect } from "react";
import AdminAsideBar from "../components/Admin/AdminAsideBar";
import NavBarCompo from "../components/User/UserNavbar";
import UserAsideBar from "../components/User/UserAsideBar";
import { useSelector } from "react-redux";

function NavBar() {
  const loggedInByFromStore = useSelector((store) => store.LoggedInByFromStore);
  // console.log(" from NavBar.jsx ", loggedInByFromStore);
  const [loggedInBy, setloggedInBy] = useState("");

  useEffect(() => {
    setloggedInBy(loggedInByFromStore);
  }, [setloggedInBy, loggedInByFromStore]);

  return (
    <>
      <div className='hold-transition sidebar-mini'>
        {loggedInBy === "adminJwtToken" ? (
          <>
            <NavBarCompo />
            <AdminAsideBar />
          </>
        ) : (
          <>
            <NavBarCompo />
            <UserAsideBar />
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
