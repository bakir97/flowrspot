import React from "react";
//Components
import Home from "../components/Home";
import Header from "../components/Header";
import SignIn from "../sharedComponents/SignIn";
//
import { Route, Switch } from "react-router-dom";
const routes = () => {
  return (
    <>
      <SignIn />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default routes;
