import React, { Component } from 'react';
import Home from './content/home';
import About from './content/about'
import Skills from './content/skills/skills'
import FeaturedProjects from './content/projects/projects'
import Experience from './content/experience/experience'

class Content extends Component {
    render() {
        const data = this.props.Data
        return (
            <div>
                <section className="mh-home image-bg home-2-img" id="mh-home">
                    <Home Data={data.Home} />
                </section>
                <section className="mh-about" id="mh-about">
                    <About Data={data.About} />
                </section>
                <section className="mh-experince image-bg featured-img-one" id="mh-experience">
                    <Experience Data={data.Experience} />
                </section>
                <section className="mh-skills" id="mh-skills">
                    <Skills Data={data.Skills} />
                </section>
                <section className="mh-featured-project image-bg featured-img-one">
                    <FeaturedProjects Data={data.FeaturedProjects} />
                </section>
            </div>
        );
    }
}

export default Content
