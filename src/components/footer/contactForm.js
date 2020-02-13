import React, { Component } from 'react'

class ContactForm extends Component {
    render() {
        return (
            <div class="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <form id="contactForm" class="single-form quate-form wow fadeInUp" data-toggle="validator">
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="row">
                        <div class="col-sm-12">
                            <input name="name" class="contact-name form-control"
                                id="name" type="text" placeholder="First Name" required />
                        </div>
                        <div class="col-sm-12">
                            <input name="name" class="contact-email form-control"
                                id="L_name" type="text" placeholder="Last Name" required />
                        </div>
                        <div class="col-sm-12">
                            <input name="name" class="contact-subject form-control"
                                id="email" type="email" placeholder="Your Email" required />
                        </div>
                        <div class="col-sm-12">
                            <textarea class="contact-message" id="message" rows="6"
                                placeholder="Your Message" required></textarea>
                        </div>
                        <div class="btn-form col-sm-12">
                            <button type="submit" class="btn btn-fill btn-block"
                                id="form-submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm