import React, { Component } from 'react';
import './CustomLink.css';

class CustomLink extends Component {
    constructor(props) {
        super(props);
        this.href = href;
        this.text = text;
        this.state = {isLinkOn: true};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        // if(this.href = "") {
        //     e.preventDefault();
        // }
    }

    render() {
        return (
            <a href={this.state.isLinkOn ? this.href : ""} target="_blank" onClick={this.handleClick}>{this.text}</a>
        );
    }
}
