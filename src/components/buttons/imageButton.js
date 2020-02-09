import React, { Component } from 'react';

class ImageButton extends Component {
    render() {
        return( 
            <a className={this.props.aClass} href="#">
                <img src={this.props.imageSrc} alt={this.props.imgAlt} className={this.props.imgClass} />
            </a>
        );
      }
  }

export default ImageButton