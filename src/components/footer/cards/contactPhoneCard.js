import React, { Component } from 'react'

class PhoneCard extends Component {
    render() {
        return (
            <div class="col-sm-12 xs-no-padding">
                <div class="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp" 
                data-wow-duration="0.8s" 
                data-wow-delay="0.6s">
                    <div class="each-icon">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="each-info media-body">
                        <h4>Phone</h4>
                        <a href="tel:(880)-8976-987">(880)-8976-987</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default PhoneCard