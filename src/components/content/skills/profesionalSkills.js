import React, { Component } from "react";

class ProfesionalSkills extends Component {
    render() {
        const data = this.props.Data;
        return (
            <div className="mh-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                <h3>Professional Skills</h3>
                <ul className="mh-professional-progress">
                    {data.map((skill, i) => {
                        return (
                            <li key={skill.id}>
                                <div className="mh-progress mh-progress-circle" data-progress={skill.value}></div>
                                <div className="pr-skill-name">{skill.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ProfesionalSkills