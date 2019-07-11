import React, { Component } from "react";
import styles from "./Hero.module.scss";
import Search from "./Search";
import HeroText from "./HeroText";
export default class Hero extends Component {
  handleSearch = search => {
    this.props.handleSearch(search);
  };
  render() {
    return (
      <div className={styles.container}>
        <HeroText />
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}
