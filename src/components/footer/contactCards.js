import React, { Component } from 'react'
import PhoneCard from './cards/contactPhoneCard'
import EmailCard from './cards/contactEmailCard'
import AddressCard from './cards/contactAddressCard'

class ContactCards extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div className="col-sm-12 col-md-6 mh-footer-address">
                <EmailCard Email={data.email} />
                <PhoneCard Phone={data.phone}/>
                <AddressCard Address={data.location}/>
            </div>
        );
    }
}
export default ContactCards