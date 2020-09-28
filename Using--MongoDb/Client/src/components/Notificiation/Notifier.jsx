import React, { useEffect } from "react";
import "./Notifier.css";
import { useSelector } from "react-redux";

function Notifier() {
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);
  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );

  useEffect(() => {
    // console.log("errordatafromstore =====>>>>  ", userLoginDatafromstore);
  });

  return (
    <>
      {Object.keys(errordatafromstore.loginErrors).length > 0 ||
      Object.keys(userLoginDatafromstore.loginsuccess).length > 0 ? (
        <div
          id='notify_message'
          className='alert-danger'
          style={{
            display: "block",
            overflow: "hidden",
            height: "50px",
            paddingTop: "10px",
            marginTop: " 0px",
          }}>
          {Object.keys(errordatafromstore.loginErrors).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "red" }}>
              {JSON.stringify(errordatafromstore.loginErrors.error)}
            </h6>
          )}
          {Object.keys(userLoginDatafromstore.loginsuccess).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "green" }}>
              {JSON.stringify(userLoginDatafromstore.loginsuccess.success)}
            </h6>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Notifier;
