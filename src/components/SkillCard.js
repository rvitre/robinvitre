import React, { Component } from "react";
import styled from 'styled-components';
import { getSkillCategoryColor } from './../utils/skills';

const SkillCardStyled = styled.article`
    padding: 3px;
    background: ${props => props.color ? props.color : '#fff'};
    width: 100px;
    height: 100px;
    margin: 10px;
`;

class SkillCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {bgColor: '#b7032d'};
    }

    componentDidMount() {
        let category = this.props.category;
        let color = getSkillCategoryColor(category);
        this.setState(() => {
            return {bgColor: color}
        });
    }

    render() {
        return <SkillCardStyled color={this.state.bgColor}>{this.props.children}</SkillCardStyled>;
    }
}

export default SkillCard;