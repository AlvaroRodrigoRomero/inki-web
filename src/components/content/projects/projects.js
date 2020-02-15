import React, { Component } from "react";
import ProjectItem from './projectItem'

export default class Projects extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="img-color-overlay">
                <div className="container">
                    <div className="row section-separator">
                        <div className="section-title col-sm-12">
                            <h3>Featured Projects</h3>
                        </div>
                        <div className="col-sm-12">
                            <div className="mh-single-project-slide-by-side row">
                                {data.map((project, i) => {
                                    return <ProjectItem key={i} Data={project}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}