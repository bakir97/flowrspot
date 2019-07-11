import React from "react";
//Components
import Home from "../components/Home";
import Header from "../components/Header";
import CreateAccountModal from "../sharedComponents/CreateAccount";
//
import { Route, Switch } from "react-router-dom";
const routes = () => {
  return (
    <>
      <CreateAccountModal />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default routes;
