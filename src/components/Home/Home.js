import React, { Component } from "react";
import Hero from "./Hero";
import Flowers from "./Flowers";
import Modal from "../../sharedComponents/Modal";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Modal type="login">
          <p>test</p>
        </Modal>
        <Hero />
        <Flowers />
      </div>
    );
  }
}
