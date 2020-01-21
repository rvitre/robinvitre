import React, { Component } from "react";
import styled from 'styled-components';

import Theme from './../constants/Theme';

const TitleWrapper = styled.h2`
    color: ${Theme.fakeWhite};
    font-size: 80px;
    text-align: center;
    margin: 0;
    margin-bottom: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 100;
    padding-left: ${Theme.gutter};
    text-transform: capitalize;

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 34px;
        padding: 0;
        justify-content: center;
    }
`;

class Title extends Component {

    render() {
        return <TitleWrapper>{this.props.children}</TitleWrapper>;
    }
}

export default Title;