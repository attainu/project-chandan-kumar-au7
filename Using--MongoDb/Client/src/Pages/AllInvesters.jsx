import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";

import { getAllUsers } from "../redux/actions/userAction";

export const AllInvesters = () => {
  const dispatch = useDispatch();

  const userDataFromStore = useSelector((store) => store.userDataFromStore);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className='main-header content '>
      <div className='container-fluid'>
        <h1> All Users Page </h1>

        <div>
          {userDataFromStore.allUsers.map((allusers) => {
            console.log(allusers);
            return (
              <Card
                email={allusers.email}
                key={allusers._id}
                name={allusers.username}
                id={allusers._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
