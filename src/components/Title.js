import React, { Component } from "react";
import styled from 'styled-components';

import Theme from './../assets/Theme';

const TitleWrapper = styled.h2`
    color: #FFF;
    font-size: 50px;
    text-align: center;
    margin: 0;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 100;
    padding-left: ${Theme.gutter};

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