import React, { Component } from "react";
import FlowersList from "./FlowersList";
import styles from "./Flowers.module.scss";
import Loader from "../../../sharedComponents/Loader";
export default class Flowers extends Component {
  componentDidMount() {
    this.props.getFlowers();
  }
  render() {
    const { flowers, isLoading } = this.props;
    return isLoading ? <Loader /> : <FlowersList flowers={flowers} />;
  }
}
