import React, { Component } from "react";
//Components
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
//
import styles from "./Header.module.scss";
import loggedUser from "./helperFunctions/loggedUser";
import { clientWidth } from "./helperFunctions/utils";
export default class Header extends Component {
  state = {
    width: clientWidth(),
    showMenu: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };
  componentWillMount() {
    window.onresize = this.resizeFunction;
  }
  resizeFunction = () => {
    this.setState({
      width: clientWidth()
    });
  };
  render() {
    const { width, showMenu } = this.state;
    const { user, openModal } = this.props;

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
              {loggedUser(user, openModal, showMenu, this.toggleMenu)}
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
            {loggedUser(user, openModal, showMenu, this.toggleMenu)}
          </div>
        )}
      </>
    );
  }
}
