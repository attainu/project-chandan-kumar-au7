import React from "react";
import axios from "axios";

function IndexFetch() {
  const FetchIndex = async () => {
    console.log("demo.jsx called and button clicked ");
    await axios({
      method: "Get",
      url: "http://localhost:5000/",
    }).then((data) => {
      if (data.status === 401) {
        console.log("data from demo.jsx Fetch Index : ", data.msg);
      } else {
        console.log("data from demo.jsx Fetch Index : ", data);
      }
    });
  };

  return (
    <>
      <button onClick={FetchIndex}>Fetch</button>
    </>
  );
}

export default IndexFetch;
