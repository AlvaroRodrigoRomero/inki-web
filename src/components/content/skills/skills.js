import React, { Component } from "react";
import TechnicalSkills from './technicalSkills'
import ProfesionalSkills from './profesionalSkills'

class Skills extends Component {
    render() {
        const data = this.props.Data
        return (
            <div className="home-v-img">
                <div className="container">
                    <div className="row section-separator">
                        <div className="section-title text-center col-sm-12">
                            <h2>Skills</h2>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <TechnicalSkills Data={data.technical} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <ProfesionalSkills Data={data.profesional} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills