import React, { Component } from "react";
import styled from 'styled-components';
import * as _ from 'underscore';

import {SkillsList} from '../assets/SkillsList';
import Theme from './../assets/Theme';
import { ReactComponent as FrontendIcon} from './../assets/img/frontend.svg';
import { ReactComponent as BackendIcon} from './../assets/img/backend.svg';
import { ReactComponent as ToolsIcon} from './../assets/img/tools.svg';

import { inView } from './../utils/inView';

import Section from './../components/Section';
import SkillCard from './../components/SkillCard';
import Title from './../components/Title';

const SkillsSvgData = { 'front': { 'stroke-length': 735}, 'back': { 'stroke-length': 584 }, 'tools': { 'stroke-length': 587 }};

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    position: relative;

    margin-top: 230px;

    &.back {
        margin-top: 570px;
    }

    &.tools {
        margin-bottom: 250px;
        margin-top: 580px;
    }

    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        height: auto;
    }
`;

const SkillTitle = styled.h3`
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    color: white;
    font-weight: 300;
    font-size: 38px;

    &.front {
        top: 88px;
        left: -82px;
    }

    &.back {
        top: 169px;
        left: 156px;
    }

    &.tools {
        top: 104px;
        left: 235px;
    }
`;

const BackgroundSkillIcon = styled.div`
    position: absolute;
    right: 5vw;
    top: -192px;

    &.front {
        top: -208px;

        svg {
            rect {
                stroke-dasharray: ${SkillsSvgData.front["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.front["stroke-length"]};
            }
        }
    }

    &.back {
        top: -273px;

        svg {
            polygon {
                stroke-dasharray: ${SkillsSvgData.back["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.back["stroke-length"]};
            }
        }
    }

    &.tools {
        top: -247px;
        svg {
            polygon {
                stroke-dasharray: ${SkillsSvgData.tools["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.tools["stroke-length"]};
            }
        }
    }

    svg {
        width: 650px;
        polygon, rect {
            stroke-width: 1;
            transition: stroke-dashoffset 1.5s ease-in-out;
        }
    }

    &.animate {
        svg {
            * {
                stroke-dashoffset: 0 !important;
            }
        }
    }
    
`;
class Skills extends Component {

    constructor(props) {
        super(props);
        this.FrontSkillsContainerRef = React.createRef();
        this.BackSkillsContainerRef = React.createRef();
        this.ToolsSkillsContainerRef = React.createRef();

        this.state = {
            animate_front: false,
            animate_back: false,
            animate_tools: false
        };

        this.animateSkillsContainer = this.animateSkillsContainer.bind(this);

        // debounce scroll event listener
        this.animateSkillsContainerThrottled = _.throttle(this.animateSkillsContainer, 50);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.animateSkillsContainerThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateSkillsContainerThrottled);
    }
    
    animateSkillsContainer(event) {
        let FrontSkillsContainerElement = this.FrontSkillsContainerRef.current;
        let BackSkillsContainerElement = this.BackSkillsContainerRef.current;
        let ToolsSkillsContainerElement = this.ToolsSkillsContainerRef.current;

        if (inView(FrontSkillsContainerElement) && !this.state.animate_front) {
            this.setState(() => {
                return {animate_front: true}
            });
        }
        if (inView(BackSkillsContainerElement)  && !this.state.animate_back) {
            this.setState(() => {
                return {animate_back: true}
            });
        }
        if (inView(ToolsSkillsContainerElement)  && !this.state.animate_tools) {
            this.setState(() => {
                return {animate_tools: true}
            });
        }

        // if animations are all done, remove listener
        if (this.state.animate_front && this.state.animate_back && this.state.animate_tools) {
            window.removeEventListener('scroll', this.animateSkillsContainerThrottled);
        }
    }

    render() {
        return <Section color={Theme.purpleDark2}>
            <Title>Compétences</Title>
            
            <SkillsContainer className="front" ref={this.FrontSkillsContainerRef}>
                <BackgroundSkillIcon className={(this.state.animate_front ? "animate" : null) + " front"}>
                    <SkillTitle className="front">Frontend</SkillTitle> 
                    <FrontendIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'front' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_front}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer className="back" ref={this.BackSkillsContainerRef}>
                <BackgroundSkillIcon className={(this.state.animate_back ? "animate" : null) + " back"}> 
                    <SkillTitle className="back">Backend</SkillTitle>
                    <BackendIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'back' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_back}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer  className="tools" ref={this.ToolsSkillsContainerRef}>
                <BackgroundSkillIcon className={(this.state.animate_tools ? "animate" : null) + " tools"}> 
                    <SkillTitle className="tools">Workflow & Tools</SkillTitle>
                    <ToolsIcon/>
                </BackgroundSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'tools' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_tools}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
        </Section>;
    }
}

export default Skills;