import React, { Component } from "react";
import styled from 'styled-components';

const TitleWrapper = styled.h2`
    color: #FFF;
    font-size: 50px;
    text-align: center;
    margin: 0;
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
`;

class Title extends Component {

    render() {
        return <TitleWrapper>{this.props.children}</TitleWrapper>;
    }
}

export default Title;