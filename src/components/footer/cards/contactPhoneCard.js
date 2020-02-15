import React, { Component } from 'react'

class PhoneCard extends Component {
    render() {
        return (
            <div className="col-sm-12 xs-no-padding">
                <div className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp" 
                data-wow-duration="0.8s" 
                data-wow-delay="0.6s">
                    <div className="each-icon">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className="each-info media-body">
                        <h4>Phone</h4>
                        <a href={"tel:" + this.props.Phone}>{this.props.Phone}</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default PhoneCard