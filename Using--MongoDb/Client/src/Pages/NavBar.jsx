import React, { useState, useEffect } from "react";
import AsidebarCompo from "../components/Admin/AdminAsideBar";
import NavBarCompo from "../components/User/UserNavbar";
import RightAsideBar from "../components/User/UserAsideBar";

function NavBar() {
  const [isUser, setisUser] = useState("");

  useEffect(() => {
    setisUser("user");
  }, []);

  return (
    <>
      <div className='hold-transition sidebar-mini'>
        {isUser === "user" ? (
          <>
            <RightAsideBar />
            <NavBarCompo />
          </>
        ) : (
          <>
            <NavBarCompo />
            <AsidebarCompo />
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
