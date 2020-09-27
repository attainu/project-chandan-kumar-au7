import React from "react";
import "./Notifier.css";
import { useSelector } from "react-redux";

function Notifier() {
  const HaveToDisplyNotifier = useSelector(
    (store) => store.HaveToDisplyNotifier
  );

  const errordatafromstore = useSelector((store) => store.errorDatafromStore);
  const userLoginDatafromstore = useSelector(
    (store) => store.userDataFromStore
  );

  return (
    <>
      <div
        id='notify_message'
        className='alert-danger'
        style={{
          display:
            HaveToDisplyNotifier.HaveToDisplyNotifier === true
              ? "block"
              : "none",
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
        {Object.keys(userLoginDatafromstore.user).length === 0 ? (
          <></>
        ) : (
          <h6 style={{ color: "red" }}>
            {JSON.stringify(userLoginDatafromstore.user.success)}
          </h6>
        )}
      </div>
    </>
  );
}

export default Notifier;
