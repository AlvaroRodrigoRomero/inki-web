// import React from 'react'
import React, { Component } from 'react';
import NavItem from './header/navItem'

class Header extends Component {
  render() {
    const dataNavItems = [
      { 'active': 'active', 'name': 'Home', 'href': 'home'},
      { 'active': '', 'name': 'About', 'href': 'about'},
      { 'active': '', 'name': 'Skills', 'href': 'skills'},
      { 'active': '', 'name': 'Experience', 'href': 'experience'},
      { 'active': '', 'name': 'Portfolio', 'href': 'portfolio'},
      { 'active': '', 'name': 'Pricing', 'href': 'pricing'},
      { 'active': '', 'name': 'Blog', 'href': 'blog'},
      { 'active': '', 'name': 'Contact', 'href': 'contact'}
    ];

      return( 
      <header class="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg mh-nav nav-btn">
                    <a class="navbar-brand" href="#">
                        <img src="assets/images/fedalon_logo.png" alt="" class="img-fluid"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-0 ml-auto">
                            {dataNavItems.map((navItem, i) => {
                              return <NavItem 
                              active={navItem.active} 
                              name={navItem.name}
                              href={navItem.href}
                              />
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        );
    }
}

export default Header