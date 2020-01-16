import React, { Component } from "react";
import styled from 'styled-components';

const SectionWrapper = styled.div`
    background-image: url(${props => props.patternUrl});
    background-size: 40%;
    height: ${props => props.height || 'auto'};
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    .overlay {
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