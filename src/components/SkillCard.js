import React, { Component } from "react";
import styled from 'styled-components';
import { getSkillCategoryColor } from './../utils/skills';

const SkillCardStyled = styled.article`
    width: 100%;
    height: 30px;
    position: relative;
`;

const SkillGauge = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: -100vw;
    transition: left ${props => (props.time + 2) * 0.3 - (props.time / 5) }s;

    &.animate {
        left: 0;
    }
    .bar {
        width: ${props => props.size ? (props.size - 10) : '80'}vw;
        height: 1px;
        background: white;
    }

    .text {
        margin-left: 10px;
        color: white;
        font-weight: 300;
    }
`;

class SkillCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#b7032d',
        };
    }

    componentDidMount() {
        let category = this.props.skill.category;
        let color = getSkillCategoryColor(category);
        this.setState(() => {
            return {bgColor: color}
        });
    }

    render() {
        return <SkillCardStyled color={this.state.bgColor}>
            <SkillGauge size={this.props.skill.level} time={this.props.index} className={this.props.animate ? 'animate' : null}>
                <div className="bar"></div>
                <div className="text">{this.props.skill.name}</div>
            </SkillGauge>
        </SkillCardStyled>;
    }
}

export default SkillCard;