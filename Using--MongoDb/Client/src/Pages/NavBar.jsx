import React, { useState, useEffect } from "react";
import AdminAsideBar from "../components/Admin/AdminAsideBar";
import NavBarCompo from "../components/User/UserNavbar";
import UserAsideBar from "../components/User/UserAsideBar";

function NavBar() {
  const [loggedInBy, setloggedInBy] = useState("");

  useEffect(() => {
    for (let [key] of Object.entries(localStorage)) {
      // console.log(typeof key);
      // console.log(key);
      setloggedInBy(key);
    }
  }, []);

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
