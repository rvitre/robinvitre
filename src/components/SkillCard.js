import React, { PureComponent } from "react";
import styled, {keyframes} from 'styled-components';


const translate = keyframes`
    0%   { transform:     translateX(0px); }
    50%  { transform: translateX(-7px); }
`;

const SkillCardStyled = styled.article`
    width: 100%;
    height: 30px;
    position: relative;
`;

const SkillGauge = styled.div.attrs(props => ({
    style: {
        transition: ((props.time + 2) * 0.3 - (props.time / 5)) + 's',
        animationDelay: (props.delay) + 's',
    },
    }))`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: -100vw;
    will-change: left;

    transform: translateX(0px);
    animation: ${translate} 6s infinite;
    animation-timing-function: ease-in-out;

    &.animate {
        left: 0;
    }
    .bar {
        width: ${props => props.size ? (props.size - 10) : '80'}vw;
        height: 2px;
        background: white;
    }

    .text {
        margin-left: 10px;
        color: white;
        font-weight: 400;
    }

     /* MOBILE */
    @media (max-width: 764px) {
        .bar {
            width: ${props => props.size ? (props.size * 0.65) : '80'}vw;
        }
    }
`;


class SkillCard extends PureComponent {
    
    render() {
        return <SkillCardStyled>
            <SkillGauge delay={Math.random()} size={this.props.skill.level} time={this.props.index} className={this.props.animate ? 'animate' : null}>
                <div className="bar"></div>
                <div className="text">{this.props.skill.name}</div>
            </SkillGauge>
        </SkillCardStyled>;
    }
}

export default SkillCard;