import React, { Component } from 'react'

class EmailCard extends Component {
    render() {
        return (
            <div className="col-sm-12 xs-no-padding">
                <div className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s">
                    <div className="each-icon">
                        <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="each-info media-body">
                        <h4>Email</h4>
                        <a href="mailto:yourmail@email.com">{this.props.Email}</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmailCard