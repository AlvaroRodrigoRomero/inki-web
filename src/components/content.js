import React, { Component } from 'react';
import Home from './content/home';

class Content extends Component {
    render() {
        return (
            <section class="mh-home image-bg home-2-img" id="mh-home">
                <Home Data={this.props.Data.Home} />
            </section>
        );
    }
}

export default Content
