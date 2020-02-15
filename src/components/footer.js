import React, { Component } from 'react'
import ContactCards from './footer/contactCards'
import ContactForm from './footer/contactForm'
import LinkIcon from '../components/linkIcons'

class Footer extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div>
                <footer className="mh-footer mh-footer-3" id="mh-contact">
                    <div className="container-fluid">
                        <div className="row section-separator">
                            <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                <h3>Contact Me</h3>
                            </div>
                            <div className="map-image image-bg col-sm-12">
                                <div className="container mt-30">
                                    <div className="row">
                                        <ContactCards Data={data}/>
                                        <ContactForm />
                                        <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="text-left text-xs-center">
                                                        <p>All right reserved Álvaro Rodrigo Romero @ 2020</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <ul className="social-icon">
                                                        {data.contactIcons.map((icon, i) => {
                                                            return <LinkIcon key={i} icon={icon} />
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer