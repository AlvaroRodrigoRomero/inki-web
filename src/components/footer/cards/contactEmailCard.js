import React, { Component } from 'react'

class EmailCard extends Component {
    render() {
        return (
            <div class="col-sm-12 xs-no-padding">
                <div class="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp" 
                data-wow-duration="0.8s" 
                data-wow-delay="0.4s">
                    <div class="each-icon">
                        <i class="fa fa-envelope-o"></i>
                    </div>
                    <div class="each-info media-body">
                        <h4>Email</h4>
                        <a href="mailto:yourmail@email.com">yourmail@email.com</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmailCard