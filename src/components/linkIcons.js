import React, { Component } from 'react'

class LinkIcon extends Component {
    render() {
        const icon = this.props.icon;
        return (
            <li>
                <a href={icon.href} target="_blank" rel="noopener noreferrer"><i className={"fa fa-" + icon.name}></i></a>
            </li>
        );
    }
}

export default LinkIcon