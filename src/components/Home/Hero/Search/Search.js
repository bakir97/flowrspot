import React, { Component } from "react";
import styles from "./Search.module.scss";
import searchIcon from "../../../../assets/images/pl-icon-search.svg";
export default class Search extends Component {
  state = {
    searchTerm: ""
  };
  onSearcChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  submitSearch = e => {
    const user = localStorage.getItem("user");
    e.preventDefault();
    this.props.searchFlowers(
      this.state.searchTerm,
      user && JSON.parse(user).auth_token
    );
  };
  render() {
    return (
      <form onSubmit={this.submitSearch} className={styles.container}>
        <input
          onChange={this.onSearcChange}
          className={styles.input}
          placeholder="Looking for something specific?"
        />
        <div className={styles.image_container}>
          <img
            src={searchIcon}
            className={styles.image}
            onClick={this.submitSearch}
            alt="search"
          />
        </div>
      </form>
    );
  }
}
