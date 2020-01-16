import React, { Component } from "react";
import styled from 'styled-components';

const TitleWrapper = styled.h3`
    color: #d2d2ff;
    font-size: 45px;
    margin: 0;
    font-weight: 200;
    text-transform: uppercase;
    position: relative;
`;

class SubTitle extends Component {

    render() {
        return <TitleWrapper>{this.props.children}</TitleWrapper>;
    }
}

export default SubTitle;