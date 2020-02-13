import React from 'react'
import ContactCards from './footer/contactCards'
import ContactForm from './footer/contactForm'

function Footer() {
    return (
        <div>
            <footer class="mh-footer mh-footer-3" id="mh-contact">
                <div class="container-fluid">
                    <div class="row section-separator">
                        <div class="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <h3>Contact Me</h3>
                        </div>
                        <div class="map-image image-bg col-sm-12">
                            <div class="container mt-30">
                                <div class="row">
                                    <ContactCards />
                                    <ContactForm />
                                    <div class="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="text-left text-xs-center">
                                                    <p>All right reserved Álvaro Rodrigo Romero @ 2020</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <ul class="social-icon">
                                                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fa fa-github"></i></a></li>
                                                    <li><a href=""><i class="fa fa-dribbble"></i></a></li>
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

export default Footer