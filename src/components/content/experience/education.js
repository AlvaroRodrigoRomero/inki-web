import React, { Component } from "react";

export default class Education extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <h4>{data.title} </h4>
                <div className="mh-eduyear">{data.dateRange}</div>
                <p>{data.description}</p>
            </div>
        )
    }
}