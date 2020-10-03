import React, { useEffect } from "react";
import "./Notifier.css";
import { useSelector } from "react-redux";

// import { userRegisterErrorAction } from "../../redux/actions/errorAction";

function Notifier() {
  // const dispatch = useDispatch();
  const errordatafromstore = useSelector((store) => store.errorDatafromStore);
  const userDataFromStore = useSelector((store) => store.userDataFromStore);
  const adminDataFromStore = useSelector((store) => store.adminDataFromStore);

  useEffect(() => {
    console.log(" * ErrorDataFromNotifier =====>>>>  ", errordatafromstore);
    console.log(" * AdminDataFromNotifier =====>>>>  ", adminDataFromStore);
    console.log(" * UserDataFromNotifier =====>>>>  ", userDataFromStore);

    // if (
    //   Object.keys(errordatafromstore).length > 0 ||
    //   Object.keys(userDataFromStore).length > 0 ||
    //   Object.keys(adminDataFromStore).length > 0
    // ) {
    //   setTimeout(() => {
    //     dispatch(userRegisterErrorAction({}));
    //   }, 6000);
    // }
  });

  return (
    <>
      {Object.keys(errordatafromstore.error).length > 0 ||
      Object.keys(userDataFromStore.loginsuccess).length > 0 ||
      Object.keys(userDataFromStore.registersuccess).length > 0 ||
      Object.keys(adminDataFromStore.adminloginsuccess).length > 0 ? (
        <div
          id='notify_message'
          style={{
            display: "block",
            overflow: "hidden",
            height: "50px",
            paddingTop: "10px",
            marginTop: " 0px",
            background: "#fffa65",
          }}>
          {/* ====================== error for all components ================== */}

          {Object.keys(errordatafromstore.error).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "red" }}>
              {JSON.stringify(errordatafromstore.error)}
            </h6>
          )}

          {/* ====================== user related ================== */}

          {Object.keys(userDataFromStore.loginsuccess).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "green" }}>
              {JSON.stringify(userDataFromStore.loginsuccess.success)}
            </h6>
          )}
          {Object.keys(userDataFromStore.registersuccess).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "green" }}>
              {JSON.stringify(userDataFromStore.registersuccess.success)}
            </h6>
          )}

          {/* ====================== admin related ================== */}

          {Object.keys(adminDataFromStore.adminloginsuccess).length === 0 ? (
            <></>
          ) : (
            <h6 style={{ color: "green" }}>
              {JSON.stringify(adminDataFromStore.adminloginsuccess.success)}
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
