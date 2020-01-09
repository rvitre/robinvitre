import React, { Component } from "react";
import styled from 'styled-components';

import {SkillsList} from '../assets/SkillsList';
import SkillCategoriesColor from '../assets/SkillCategories';
import Theme from './../assets/Theme';

import Section from './../components/Section';
import SkillCard from './../components/SkillCard';
import Title from './../components/Title';

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;


    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        height: auto;
    }
`;

const SkillsLegendContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;


    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        height: auto;
    }
`;

const SkillLegend = styled.div`
    padding: 3px;
    background: ${props => props.color};
    width: 150px;
    height: 20px;
    margin: 10px;
`;

class Skills extends Component {
    render() {
        return <Section color={Theme.purpleDark2}>
            <Title>Compétences</Title>
            <SkillsLegendContainer className="container">
                {SkillCategoriesColor.map((skill, i) => (
                    <SkillLegend key={i} color={skill.color}>{skill.name}</SkillLegend>  
                ))}
            </SkillsLegendContainer>
            <SkillsContainer className="container">
                {SkillsList.map((skill, i) => (
                    <SkillCard key={i} category={skill.category}>{skill.name}</SkillCard>  
                ))}
            </SkillsContainer>
        </Section>;
    }
}

export default Skills;