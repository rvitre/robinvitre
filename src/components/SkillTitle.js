import React, { PureComponent } from "react";
import styled from 'styled-components';
import SubTitle from './SubTitle';

const SkillTitleWrapper = styled.div`
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    font-size: 38px;
    left: -100vw;
    will-change: left;
    transition: left 0.7s ease-in-out;

    &.front {
        top: 88px;
    }

    &.back {
        top: 169px;
    }

    &.tools {
        top: 104px;
    }

    &.animate {
        &.front {
            left: -86px;
        }

        &.back {
            left: 139px;
        }

        &.tools {
            left: 188px;
        }
    }

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 23px;

        &.animate {
            &.front {
                left: 250px;
            }

            &.back {
                left: 282px;
            }

            &.tools {
                left: 257px;
                top: 68px;
            }
        }
    }
`;

class SkillTitle extends PureComponent {
    render() {
        return <SkillTitleWrapper {...this.props}><SubTitle>{this.props.children}</SubTitle></SkillTitleWrapper>;
    }
}

export default SkillTitle;