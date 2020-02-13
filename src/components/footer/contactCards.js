import React, { Component } from 'react'
import PhoneCard from './cards/contactPhoneCard'
import EmailCard from './cards/contactEmailCard'
import AddressCard from './cards/contactAddressCard'

class ContactCards extends Component {
    render() {
        return (
            <div class="col-sm-12 col-md-6 mh-footer-address">
                <EmailCard />
                <PhoneCard />
                <AddressCard />
            </div>
        );
    }
}
export default ContactCards