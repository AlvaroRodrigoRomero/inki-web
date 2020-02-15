import React, { Component } from "react";
import WorkExperience from './workExperience'
import Education from './education'

export default class Experience extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="img-color-overlay">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education">
                                <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                                <div className="mh-education-deatils">
                                    {data.education.map((education, i) => {
                                        return <Education key={i} Data={education} />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-work">
                                <h3>Work Experience</h3>
                                <div className="mh-experience-deatils">
                                    {data.workExperience.map((education, i) => {
                                        return <WorkExperience key={i} Data={education} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}