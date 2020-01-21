import React, { Component } from "react";
import styled from 'styled-components';
import Theme from './../constants/Theme';


const TitleWrapper = styled.h3`
    color: ${Theme.fakeWhite};
    font-size: 45px;
    margin: 0;
    font-weight: 200;
    text-transform: uppercase;
    position: relative;

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 26px;
    }
`;

class SubTitle extends Component {

    render() {
        return <TitleWrapper>{this.props.children}</TitleWrapper>;
    }
}

export default SubTitle;