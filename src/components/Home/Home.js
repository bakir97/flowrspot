import React, { Component } from "react";
import Hero from "./Hero";
import Flowers from "./Flowers";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Flowers />
      </div>
    );
  }
}
