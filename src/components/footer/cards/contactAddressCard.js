import React, { Component } from 'react'

class AddressCard extends Component {
    render() {
        return (
            <div class="col-sm-12 xs-no-padding">
                <div class="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp" 
                data-wow-duration="0.8s" 
                data-wow-delay="0.2s">
                    <div class="each-icon">
                        <i class="fa fa-location-arrow"></i>
                    </div>
                    <div class="each-info media-body">
                        <h4>Address</h4>
                        <address>
                            5th Avenue, 34th floor, <br />
                            New york
                        </address>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddressCard