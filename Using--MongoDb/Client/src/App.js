import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Pages/NavBar";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route to='/error' component={Error} />

          <Redirect to='/error' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
