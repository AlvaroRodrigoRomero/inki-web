import React, { Component } from "react";
import LinkIcon from '../linkIcons';

class Home extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div class="img-foverlay img-color-overlay">
                <div class="container">
                    <div class="row section-separator xs-column-reverse vertical-middle-content home-padding">
                        <div class="col-sm-6">
                            <div class="mh-header-info">
                                <div class="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                    <span>Hello I'm</span>
                                </div>
                                <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">{data.name}</h2>
                                <h4 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">{data.jobTitle}</h4>
                                <ul>
                                    <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <i class="fa fa-envelope"></i>
                                        <a href={"mailto:" + data.email}>{data.email}</a>
                                    </li>
                                    <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                                        <i class="fa fa-phone"></i><a href={"tel:" + data.phone}>{data.phone}</a>
                                    </li>
                                    <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                        <i class="fa fa-map-marker"></i><address>{data.location}</address>
                                    </li>
                                </ul>
                                <ul class="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                    {data.contactIcons.map((icon, i) =>{
                                        return <LinkIcon key={i} icon={icon}/>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                <div class="img-border">
                                    <img src={data.image} alt="profile image" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home