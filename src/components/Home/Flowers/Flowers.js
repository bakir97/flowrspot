import React, { Component } from "react";
import FlowersList from "./FlowersList";
// import styles from "./Flowers.module.scss";
import Loader from "../../../sharedComponents/Loader";
export default class Flowers extends Component {
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.props.getFlowers(user && JSON.parse(user).auth_token);
  }
  render() {
    const {
      flowers,
      isLoading,
      user,
      addFavFlower,
      removeFavFlower
    } = this.props;
    return isLoading ? (
      <Loader />
    ) : (
      <FlowersList
        flowers={flowers}
        user={user}
        addFavFlower={addFavFlower}
        removeFavFlower={removeFavFlower}
      />
    );
  }
}
