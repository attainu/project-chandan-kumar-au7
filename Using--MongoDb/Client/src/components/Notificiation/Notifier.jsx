import React from "react";
import "./Notifier.css";

function Notifier() {
  return (
    <>
      <div
        id='notify_message'
        className='alert-danger'
        style={{
          display: "block",
          overflow: "hidden",
          height: "0.39511px",
          paddingTop: "0.079022px",
          marginTop: " 0px",
          paddingBottom: "0px",
          marginBottom: "0px",
        }}>
        A user with that email does not exist.
      </div>
    </>
  );
}

export default Notifier;
