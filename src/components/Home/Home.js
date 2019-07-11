import React, { Component } from "react";
import Hero from "./Hero";
export default class Home extends Component {
  state = {
    search: ""
  };
  handleSearch = search => {
    this.setState({ search });
  };
  render() {
    return (
      <div>
        <Hero handleSearch={this.handleSearch} />
      </div>
    );
  }
}
