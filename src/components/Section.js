import React, { Component } from "react";
import styled from 'styled-components';

const SectionWrapper = styled.div`
    background: ${props => props.color || "#3e1c93"};
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`;

class Section extends Component {

    render() {
        return <SectionWrapper color={this.props.color}>{this.props.children}</SectionWrapper>;
    }
}

export default Section;