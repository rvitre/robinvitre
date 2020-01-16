import React, { Component } from "react";
import styled from 'styled-components';

const SectionWrapper = styled.div`
    height: ${props => props.height || 'auto'};
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url(${props => props.patternUrl});
        background-size: 40%;
        background-attachment: fixed;
        opacity: 40%;
    }

    .overlay {
        position: relative;
        padding: ${props => props.padding || '80px 0'};
        height: 100%;
        ${props => props.background || "background: #3e1c93"};
    }
`;

class Section extends Component {

    render() {
        return <SectionWrapper padding={this.props.padding} height={this.props.height} background={this.props.background} patternUrl={this.props.patternUrl}>
            <div className="overlay" >{this.props.children}</div>
        </SectionWrapper>;
    }
}

export default Section;