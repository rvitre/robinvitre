import React, { Component } from "react";
import styled from 'styled-components';
import * as _ from 'underscore';
import { withTranslation } from 'react-i18next';
import {SkillsList} from '../assets/SkillsList';
import { patterns, gradients } from './../assets/constants';
import { ReactComponent as FrontendIcon} from './../assets/img/frontend.svg';
import { ReactComponent as BackendIcon} from './../assets/img/backend.svg';
import { ReactComponent as ToolsIcon} from './../assets/img/tools.svg';
import { inView } from './../utils/inView';
import {scrollToRef} from './../utils/scroll';
import Section from './../components/Section';
import SkillCard from './../components/SkillCard';
import Title from './../components/Title';
import SecondaryBGSkillIcon from './../components/SecondaryBGSkillIcon';
import BGSkillIcon from './../components/BGSkillIcon';
import SkillTitle from './../components/SkillTitle';

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
        margin-top: 630px;
    }

    &.tools {
        margin-bottom: 250px;
        margin-top: 580px;
    }

    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        margin-top: 230px;

        &.back {
            margin-top: 480px;
        }

        &.tools {
            margin-bottom: 150px;
            margin-top: 520px;
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
        else if(!inView(FrontSkillsContainerElement) && this.state.animate_front){
            this.setState(() => {
                return {animate_front: false}
            });
        }
        if (inView(BackSkillsContainerElement)  && !this.state.animate_back) {
            this.setState(() => {
                return {animate_back: true}
            });
        }
        else if(!inView(BackSkillsContainerElement) && this.state.animate_back){
            this.setState(() => {
                return {animate_back: false}
            });
        }
        if (inView(ToolsSkillsContainerElement)  && !this.state.animate_tools) {
            this.setState(() => {
                return {animate_tools: true}
            });
        }
        else if(!inView(ToolsSkillsContainerElement) && this.state.animate_tools){
            this.setState(() => {
                return {animate_tools: false}
            });
        }
    }

    render() {
        const { t } = this.props;

        return <Section background={gradients.skills} patternUrl={patterns.diam.url}>
            <Title>{t('skills')}</Title>
            
            <SkillsContainer className="front" ref={this.FrontSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front"}>
                    <SkillTitle className={(this.state.animate_front ? "animate" : '') + " front"}>Frontend</SkillTitle> 
                    <FrontendIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front-back"} onClick={() => scrollToRef(this.BackSkillsContainerRef)}>
                        <div className="sec-title">Backend</div>
                        <BackendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front-tools"} onClick={() => scrollToRef(this.ToolsSkillsContainerRef)}>
                        <div className="sec-title">Workflow & Tools</div>
                        <ToolsIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'front' ? <SkillCard key={i} index={i} level={skill.level} name={skill.name} animate={this.state.animate_front} fullwidth={true}></SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer className="back" ref={this.BackSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back"}> 
                    <SkillTitle className={(this.state.animate_back ? "animate" : '') + " back"}>Backend</SkillTitle>
                    <BackendIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back-front"} onClick={() => scrollToRef(this.FrontSkillsContainerRef)}>
                        <div className="sec-title">Frontend</div>
                        <FrontendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back-tools"} onClick={() => scrollToRef(this.ToolsSkillsContainerRef)}>
                        <div className="sec-title">Workflow & Tools</div>
                        <ToolsIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'back' ? <SkillCard key={i} index={i} level={skill.level} name={skill.name} animate={this.state.animate_back} fullwidth={true}></SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer  className="tools" ref={this.ToolsSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools"}> 
                    <SkillTitle className={(this.state.animate_tools ? "animate" : '') + " tools"}>Workflow & Tools</SkillTitle>
                    <ToolsIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools-front"} onClick={() => scrollToRef(this.FrontSkillsContainerRef)}>
                        <div className="sec-title">Frontend</div>
                        <FrontendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools-back"} onClick={() => scrollToRef(this.BackSkillsContainerRef)}>
                        <div className="sec-title">Backend</div>
                        <BackendIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'tools' ? <SkillCard key={i} index={i} level={skill.level} name={skill.name} animate={this.state.animate_tools} fullwidth={true}></SkillCard> : null  
                ))}
            </SkillsContainer>
        </Section>;
    }
}

export default withTranslation()(Skills);