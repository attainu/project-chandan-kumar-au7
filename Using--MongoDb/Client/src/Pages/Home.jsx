import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const store = useSelector((store) => store.userRegisterDataFromStore);
  useEffect(() => {
    console.log("store ", store);
  }, [store]);
  return (
    <>
      <div className='hold-transition login-page'>
        <h1>This is Home Page</h1>
        <p>Welcomw From Depth Of My Heart</p>

        <h1>EMAIL : {store.user.email} </h1>
        <h1>FULLNAME : {store.user.fullName} </h1>
        <h1>PASSWORD : {store.user.password} </h1>
        <h1>RETYPEPASSWORD : {store.user.retypePassword} </h1>
        <h1>AGREETERM : {store.user.agreeTerm} </h1>
      </div>
    </>
  );
}

export default Home;
