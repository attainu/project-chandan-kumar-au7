import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import jwt_decode from "jwt-decode";
import setAuthToken from "./redux/helper/setAuthToken";

import {
  setUserLoggedIn,
  setUserNameInsideAsidebar,
  userLogout,
} from "./redux/actions/userAction";

import {
  setadminLoggedIn,
  adminLogout,
  setAdminNameInsideAsidebar,
  loggedInBy,
  removeLoggedInBy,
} from "./redux/actions/adminAction";

import store from "./redux/store";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forgot from "./Pages/Forgot";
import NavBar from "./Pages/NavBar";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";
import Invest from "./Pages/Invest";

import Calculator from "./components/Calculator/EmiCalculator";

import Notifier from "./components/Notificiation/Notifier";
import { css } from "@emotion/core";

import Getloan from "./components/User/Getloan/Getloan";
import demofile from "./components/User/demo";

// =============== Spinner ============ //
// Can be a string as well. Need to ensure each key-value pair ends with ;
import { CircleLoader } from "react-spinners";
import "./App.css";

const override = css`
  display: block;
  margin: 400px auto;
  border-color: red;
`;

// =============== End Spinner ============ //

function App() {
  const HaveToLoad = useSelector((store) => store.haveToLoadDataFromStore);

  useEffect(() => {
    if (window.localStorage.userJwtToken) {
      setAuthToken(localStorage.userJwtToken);
      const decoded = jwt_decode(localStorage.userJwtToken);

      store.dispatch(setUserLoggedIn(decoded));
      store.dispatch(setUserNameInsideAsidebar(decoded.username));

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(userLogout());
        window.location.href = "/";
      }
    } else if (window.localStorage.adminJwtToken) {
      // console.log("admin jwt finder called inside app.js");
      setAuthToken(localStorage.adminJwtToken);
      const decoded = jwt_decode(localStorage.adminJwtToken);

      // console.log(" ADMIN Decoded from applicationCache.js ", decoded);
      store.dispatch(setadminLoggedIn(decoded));
      store.dispatch(loggedInBy());

      store.dispatch(setAdminNameInsideAsidebar(decoded.username));

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(adminLogout());
        store.dispatch(removeLoggedInBy());
        window.location.href = "/";
      }
    }
  });
  return (
    <div className='App' style={{ marginTop: "5rem" }}>
      <BrowserRouter>
        <NavBar />
        <Notifier />
        {HaveToLoad === "true" ? (
          <div className='Spinner-loder'>
            <CircleLoader css={override} color='#2EFF13' size={100} loading />
          </div>
        ) : (
          <></>
        )}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/calcemi' component={Calculator} />
          <Route exact path='/Invest' component={Invest} />
          <Route exact path='/getloan' component={Getloan} />
          <Route exact path='/demo' component={demofile} />
          <Route to='/error' component={Error} />

          <Redirect to='/error' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
