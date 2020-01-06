import React, { Component } from "react";
import styled from 'styled-components';

const TitleWrapper = styled.h2`
    color: #FFF;
    font-size: 40px;
    text-align: center;
    margin: 0;
    padding: 50px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Title extends Component {

    render() {
        return <TitleWrapper>{this.props.children}</TitleWrapper>;
    }
}

export default Title;