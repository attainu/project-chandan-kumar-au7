import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forgot from "./Pages/Forgot";
import NavBar from "./Pages/NavBar";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";
import Invest from "./Pages/Invest"
import Notifier from "./components/Notificiation/Notifier";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Notifier />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/Invest' component={Invest} />
          <Route to='/error' component={Error} />

          <Redirect to='/error' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
