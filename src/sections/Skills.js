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

const SkillTitle = styled.h3`
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    color: white;
    font-weight: 300;
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
            left: -82px;
        }

        &.back {
            left: 156px;
        }

        &.tools {
            left: 235px;
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

const BGSkillIcon = styled.div`
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
        top: -313px;

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

    & > svg {
        width: 650px;
        polygon, rect {
            will-change: stroke-dasharray;
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

    /* MOBILE */
    @media (max-width: 764px) {
        
        & > svg {
            width: 513px;
        }

        &.front {
            top: -155px;

            svg {
                rect {
                    stroke-dasharray: ${SkillsSvgData.front["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.front["stroke-length"]};
                }
            }
        }

        &.back {
            top: -239px;

            svg {
                polygon {
                    stroke-dasharray: ${SkillsSvgData.back["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.back["stroke-length"]};
                }
            }
        }

        &.tools {
            top: -183px;
            svg {
                polygon {
                    stroke-dasharray: ${SkillsSvgData.tools["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.tools["stroke-length"]};
                }
            }
        }
    }
    
`;

const SecondaryBGSkillIcon = styled.div`
    position: absolute;
    will-change: opacity;
    opacity: 0;
    transition: opacity 0.3s 1.4s ease-in-out;

    &.animate {
        opacity: 1;
    }

    svg {
        width: 120px;
        
        * {
            stroke-width: 4px;
        }
    }

    .sec-title {
        position: absolute;
        top: 50%;
        color: white;
        text-transform: uppercase;
        white-space: nowrap;
    }

    &.front-back {
        top: 10px;
        left: -350px;
    }

    &.front-tools {
        bottom: -17px;
        left: -250px;

        .sec-title {
            left: -98px;
            top: 42%;
        }
    }

    &.back-front {
        top: 45px;
        left: -84px;

        .sec-title {
            left: -40px;
            top: 42%;
        }
    }

    &.back-tools {
        top: 157px;
        left: -290px;

        .sec-title {
            left: -98px;
            top: 42%;
        }
    }


    &.tools-front {
        top: 100px;
        left: -284px;

        .sec-title {
            left: -40px;
            top: 42%;
        }
    }

    &.tools-back {
        bottom: 37px;
        left: -200px;

        .sec-title {
            left: -9px;
            top: 44%;
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

        // if animations are all done, remove listener
        if (this.state.animate_front && this.state.animate_back && this.state.animate_tools) {
            //window.removeEventListener('scroll', this.animateSkillsContainerThrottled);
        }
    }

    render() {
        return <Section color={Theme.purpleDark2}>
            <Title>Compétences</Title>
            
            <SkillsContainer className="front" ref={this.FrontSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front"}>
                    <SkillTitle className={(this.state.animate_front ? "animate" : '') + " front"}>Frontend</SkillTitle> 
                    <FrontendIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front-back"}>
                        <div className="sec-title">Backend</div>
                        <BackendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_front ? "animate" : '') + " front-tools"}>
                        <div className="sec-title">Workflow & Tools</div>
                        <ToolsIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'front' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_front}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer className="back" ref={this.BackSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back"}> 
                    <SkillTitle className={(this.state.animate_back ? "animate" : '') + " back"}>Backend</SkillTitle>
                    <BackendIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back-front"}>
                        <div className="sec-title">Frontend</div>
                        <FrontendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_back ? "animate" : '') + " back-tools"}>
                        <div className="sec-title">Workflow & Tools</div>
                        <ToolsIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'back' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_back}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
            
            <SkillsContainer  className="tools" ref={this.ToolsSkillsContainerRef}>
                <BGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools"}> 
                    <SkillTitle className={(this.state.animate_tools ? "animate" : '') + " tools"}>Workflow & Tools</SkillTitle>
                    <ToolsIcon/>
                    <SecondaryBGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools-front"}>
                        <div className="sec-title">Frontend</div>
                        <FrontendIcon/>
                    </SecondaryBGSkillIcon>
                    <SecondaryBGSkillIcon className={(this.state.animate_tools ? "animate" : '') + " tools-back"}>
                        <div className="sec-title">Backend</div>
                        <BackendIcon/>
                    </SecondaryBGSkillIcon>
                </BGSkillIcon>
                {SkillsList.map((skill, i) => (
                    skill.category === 'tools' ? <SkillCard key={i} index={i} skill={skill} animate={this.state.animate_tools}>{skill.name}</SkillCard> : null  
                ))}
            </SkillsContainer>
        </Section>;
    }
}

export default Skills;