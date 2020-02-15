import React, { Component } from "react";

export default class ProjectItem extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="col-sm-12 mh-featured-item">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="mh-featured-project-img shadow-2 wow fadeInUp"
                            data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <img src={data.image} alt={data.title} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="mh-featured-project-content">
                            <h4 className="project-category wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.4s">{data.title}</h4>
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.5s">{data.name}</h2>
                            <span className="wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.6s">{data.category}</span>
                            <p className="wow fadeInUp" data-wow-duration="0.8s"
                                data-wow-delay="0.7s">{data.description}</p>
                            <a href={data.url} target="_blank"
                                rel="noopener noreferrer" className="btn btn-fill wow fadeInUp"
                                data-wow-duration="0.8s" data-wow-delay="0.7s">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}