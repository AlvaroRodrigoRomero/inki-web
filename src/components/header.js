// import React from 'react'
import React, { Component } from 'react';
import NavItem from './header/navItem'
import ImageButton from '../components/buttons/imageButton'

class Header extends Component {
  render() {
    const dataNavItems = [
      { 'id': 1, 'active': 'active', 'name': 'Home', 'href': 'home' },
      { 'id': 2, 'active': '', 'name': 'About', 'href': 'about' },
      { 'id': 3, 'active': '', 'name': 'Skills', 'href': 'skills' },
      { 'id': 4, 'active': '', 'name': 'Experience', 'href': 'experience' },
      { 'id': 5, 'active': '', 'name': 'Portfolio', 'href': 'portfolio' },
      { 'id': 6, 'active': '', 'name': 'Pricing', 'href': 'pricing' },
      { 'id': 7, 'active': '', 'name': 'Blog', 'href': 'blog' },
      { 'id': 8, 'active': '', 'name': 'Contact', 'href': 'contact' }
    ];

    return (
      <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg mh-nav nav-btn">
              <ImageButton
                aClass="navbar-brand"
                imgClass="img-fluid"
                imgAlt="image header"
                imageSrc="assets/images/fedalon_logo.png"
              />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-0 ml-auto">
                  {dataNavItems.map((navItem, i) => {
                    return <NavItem key={navItem.id}
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