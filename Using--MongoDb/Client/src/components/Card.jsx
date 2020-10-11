import React from "react";

const Card = (props) => {
  return (
    <div
      className='card ml-5 my-3'
      style={{ width: "90%", display: "inline-block", padding: "3rem" }}>
      <div className='card-body'>
        <h3>ID : {props.id}</h3>

        <h3>NAME_Of_User : {props.name}</h3>
        <h3>Email_Of_User : {props.email}</h3>
      </div>
    </div>
  );
};

export default React.memo(Card);
