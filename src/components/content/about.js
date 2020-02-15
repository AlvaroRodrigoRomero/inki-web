import React, { Component } from 'react'

class About extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src={data.image} alt="about me" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-inner">
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.1s">{data.title}</h2>
                            <p className="wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.2s">{data.description}</p>
                            <div className="mh-about-tag wow fadeInUp"
                                data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul>
                                    {data.languages.map((language, i) => {
                                        return <li key={i}><span>{language}</span></li>
                                    })}
                                </ul>
                            </div>
                            <a href={data.resumeURL} className="btn btn-fill wow fadeInUp"
                                data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i className="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default About