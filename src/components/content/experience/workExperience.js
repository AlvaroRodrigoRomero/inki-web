import React, { Component } from "react";
import Responsibility from "./responsability";

export default class WorkExperience extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                <h4>{data.title}</h4>
                <div className="mh-eduyear">{data.dateRange}</div>
                <p>{data.description}</p>
                {Object.keys(data.responsabilities).length > 0 ?
                    <span> Responsibility :</span>
                    : null
                }
                {Object.keys(data.responsabilities).length > 0 ?
                    <ul className="work-responsibility">
                        {data.responsabilities.map((responsability, i) => {
                            return <Responsibility key={i} Data={responsability} />
                        })}
                    </ul>
                    : null
                }
            </div>
        )
    }
}