import React, { Component } from "react";
//Components
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
import LoggedIn from "./LoggedIn";
import MobileNav from "./MobileNav";
//
import styles from "./Header.module.scss";

export default class Header extends Component {
  state = { width: 0, showMenu: false };
  loggedUser = () => {
    const { user, openModal } = this.props;
    const { showMenu } = this.state;
    if (user) {
      return (
        <LoggedIn
          user={user}
          openModal={openModal}
          toggleMenu={this.toggleMenu}
          showMenu={showMenu}
        />
      );
    }
    return (
      <>
        <LoginButton
          showMenu={showMenu}
          openModal={openModal}
          toggleMenu={showMenu && this.toggleMenu}
        />
        <CreateAccountButton
          showMenu={showMenu}
          openModal={openModal}
          toggleMenu={showMenu && this.toggleMenu}
        />
      </>
    );
  };
  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };
  componentWillMount() {
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    });
  }
  resizeFunction = () => {
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    });
  };
  render() {
    window.onresize = this.resizeFunction;
    const { width, showMenu } = this.state;

    const isMobile = width <= 900 ? true : false;
    return (
      <>
        <div className={styles.container}>
          <Logo />

          {isMobile ? (
            <MobileNav toggleMenu={this.toggleMenu} />
          ) : (
            <>
              <NavLinks closeModal={this.props.closeModal} />
              {this.loggedUser()}
            </>
          )}
        </div>
        {showMenu && (
          <div className={styles.mobile_container}>
            <NavLinks
              showMenu={showMenu}
              closeModal={this.props.closeModal}
              toggleMenu={this.toggleMenu}
            />
            {this.loggedUser()}
          </div>
        )}
      </>
    );
  }
}
