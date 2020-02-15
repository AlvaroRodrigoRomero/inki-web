import React, { Component } from "react";
import LinkIcon from '../linkIcons';

class Home extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div className="img-foverlay img-color-overlay">
                <div className="container">
                    <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                        <div className="col-sm-6">
                            <div className="mh-header-info">
                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                    <span>Hello I'm</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">{data.name}</h2>
                                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">{data.jobTitle}</h4>
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <i className="fa fa-envelope"></i>
                                        <a href={"mailto:" + data.email}>{data.email}</a>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                                        <i className="fa fa-phone"></i><a href={"tel:" + data.phone}>{data.phone}</a>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                        <i className="fa fa-map-marker"></i><address>{data.location}</address>
                                    </li>
                                </ul>
                                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                    {data.contactIcons.map((icon, i) =>{
                                        return <LinkIcon key={i} icon={icon}/>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                <div className="img-border">
                                    <img src={data.image} alt="alvaro rodrigo romero profile" className="img-fluid" />
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