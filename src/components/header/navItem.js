import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return( 
          <li className={`nav-item ${this.props.active}`}>
              <a className="nav-link" href={'#mh-' + this.props.href}>{this.props.name}</a>
          </li>
        );
      }
  }

export default NavItem