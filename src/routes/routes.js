import React from "react";
//Components
import Home from "../components/Home";
import Header from "../components/Header";
import UserModal from "../sharedComponents/UserModal";
//
import { Route, Switch } from "react-router-dom";
const routes = () => {
  return (
    <>
      <UserModal />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default routes;
