import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import '../css/BurgerMenu.css';

class Nav extends Component {
  render() {
    return (
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <a onClick={ this.props.showSettings } className="menu-item--small" href="">Contact</a>
          <a className="menu-item--small" href="https://github.com/beard86" target="_BLANK" rel="noopener noreferrer">Github</a>
          <a onClick={ this.props.showSettings } className="menu-item--small" href="">CV</a>
          <a className="menu-item--small" href="">Data visualisations</a>
        </Menu>
    )
  }
}

export default Nav;
