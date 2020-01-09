import React, { Component } from "react";
import styled from 'styled-components';

const SectionWrapper = styled.div`
    background: ${props => props.color || "#3e1c93"};
    height: ${props => props.height || 'auto'};
    overflow-x: hidden;
    position: relative;
    padding: ${props => props.padding || '80px 0'};
    box-sizing: border-box;
`;

class Section extends Component {

    render() {
        return <SectionWrapper padding={this.props.padding} height={this.props.height} color={this.props.color}>{this.props.children}</SectionWrapper>;
    }
}

export default Section;