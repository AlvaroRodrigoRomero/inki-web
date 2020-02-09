import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <section className={`mh-${this.props.class}`} id={'mh-' + this.props.name}>
                Name of the section : {this.props.name}
            </section>
        );
    }
}

export default Section