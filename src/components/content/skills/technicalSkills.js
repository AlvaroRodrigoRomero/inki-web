import React, { Component } from "react";

class TechnicalSkills extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div className="mh-skills-inner">
                <div className="mh-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                    <h3>Technical Skills</h3>
                    <div className="each-skills">
                        {data.map((skill, i) => {
                            return (
                                <div className="candidatos" key={skill.id}>
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">{skill.name}</div>
                                            <div className="percentagem-num">{skill.value}%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{"width" : skill.value + "%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnicalSkills