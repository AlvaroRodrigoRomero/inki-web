import React, { Component } from 'react'

class AddressCard extends Component {
    render() {
        return (
            <div className="col-sm-12 xs-no-padding">
                <div className="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp" 
                data-wow-duration="0.8s" 
                data-wow-delay="0.2s">
                    <div className="each-icon">
                        <i className="fa fa-location-arrow"></i>
                    </div>
                    <div className="each-info media-body">
                        <h4>Address</h4>
                        <address>
                            {this.props.Address}
                        </address>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddressCard