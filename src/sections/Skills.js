import React, { Component } from "react";
import styled from 'styled-components';

import {SkillsList} from '../assets/SkillsList';
import Theme from './../assets/Theme';
import { ReactComponent as FrontendIcon} from './../assets/img/frontend.svg';

import { inView } from './../utils/inView';

import Section from './../components/Section';
import SkillCard from './../components/SkillCard';
import Title from './../components/Title';

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    position: relative;

    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        height: auto;
    }
`;

const SkillTitle = styled.h3`
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    color: white;
    font-weight: 300;
    font-size: 38px;
    margin-top: 60px;
    margin-bottom: 30px;
`;

const BackgroundSkillIcon = styled.div`
    position: absolute;
    right: 5vw;
    top: -5vh;

    svg {
        width: 300px;
        polygon {
            stroke-width: 1%;
        }
    }
`;
class Skills extends Component {

    constructor(props) {
        super(props);
        this.SkillsContainerRef = React.createRef();

        this.state = {
            animate: false
        };

        this.animateSkillsContainer = this.animateSkillsContainer.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.animateSkillsContainer);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateSkillsContainer);
    }
    
    animateSkillsContainer(event) {
        let SkillsContainerElement = this.SkillsContainerRef.current;

        if (inView(SkillsContainerElement)) {
            this.setState(() => {
                return {animate: true}
            });
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render() {
        return <Section color={Theme.purpleDark2}>
            <Title>Compétences</Title>
            <SkillTitle>Frontend</SkillTitle>
            <SkillsContainer ref={this.SkillsContainerRef}>
                <BackgroundSkillIcon> 
                    <FrontendIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'front' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            <SkillTitle>Backend</SkillTitle>
            <SkillsContainer>
                <BackgroundSkillIcon> 
                    <FrontendIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'back' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            <SkillTitle>Workflow & Tools</SkillTitle>
            <SkillsContainer>
                <BackgroundSkillIcon> 
                    <FrontendIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'tools' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
        </Section>;
    }
}

export default Skills;