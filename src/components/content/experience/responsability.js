import React, { Component } from "react";

export default class Responsibility extends Component {
    render() {
        const data = this.props.Data
        return (
            <li><i className="fa fa-circle"></i>{data}</li>
        )
    }
}