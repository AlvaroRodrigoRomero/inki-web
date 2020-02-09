import React, { Component } from 'react';
import Section from './section';

class Content extends Component {
    render() {
        const sectionList = [
            { 'id': 1, 'name': 'home' },
            { 'id': 2, 'name': 'about' },
            { 'id': 3, 'name': 'skills' },
            { 'id': 4, 'name': 'experience' },
            { 'id': 5, 'name': 'portfolio' },
            { 'id': 6, 'name': 'pricing' },
            { 'id': 7, 'name': 'blog' },
            { 'id': 8, 'name': 'contact' }
        ];
        return (
            sectionList.map((section, i) => {
                return (
                    <Section
                        name={section.name}
                        class={section.name}
                    />
                )
            }
        ));
    }
}

export default Content
