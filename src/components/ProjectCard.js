import React, { Component } from "react";
import styled from 'styled-components';
import * as _ from 'underscore';

import SubTitle from './SubTitle';
import SkillCard from './SkillCard';

import { daysConverter } from './../utils/date';
import { inView } from './../utils/inView';
import { getSkillCategoryColor } from './../utils/skills';
import Theme from './../constants/Theme';



const smallScreenBreak = "1008px";

const ProjectCardStyled = styled.article`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 50px;
    display: flex;

    /* Big Screen + */
    @media (min-width: 1800px) {
        width: calc( 100% / 2);
    }

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        flex-direction: column;
    }
`;

const ProjectLink = styled.a`
    display: block;
    position: relative;
    width: 320px;
    z-index: 2;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        align-self: center;
    }
`;

const ProjectInfos = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        overflow: initial;
    }
`;

const ImageContainer = styled.div`
    max-height: 100%;
    width: 100%;
    height: 320px;
    background-image: url(${props => props.imgSrc ? props.imgSrc : "https://robinvitre.s3.eu-west-3.amazonaws.com/website.jpg" });
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        height: 200px;
    }
`;

const ProjectName = styled.div`
    padding-left: 20px;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        margin-top: 20px;
        text-align: center;
        padding-left: 0;
    }
`;

const ProjectDetails = styled.div`
    padding-left: 20px;
    color: ${Theme.fakeWhite};
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 3px;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        margin-top: 5px;
        text-align: center;
        padding-left: 0;
    }
`;

const ProjectCategories = styled.div`
    position: relative;
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 50px;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        width: 100vw;
        margin-left: -20px;
        margin-top: 20px;
        position: relative;
        bottom: 0;
    }
`;


class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.ProjectRef = React.createRef();

        this.state = {
            animate: false,
        };

        this.animateProject = this.animateProject.bind(this);

        // debounce scroll event listener
        this.animateProjectThrottled = _.throttle(this.animateProject, 200);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.animateProjectThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateProjectThrottled);
    }
    
    animateProject() {
        let ProjectRefElement = this.ProjectRef.current;

        if (inView(ProjectRefElement) && !this.state.animate) {
            this.setState(() => {
                return {animate: true}
            });
        }
        else if(!inView(ProjectRefElement) && this.state.animate){
            this.setState(() => {
                return {animate: false}
            });
        }
    }
    
    render() { 
    return <ProjectCardStyled ref={this.ProjectRef}>
            <ProjectLink href={this.props.project.url} title={this.props.project.name} target="_blank">
                <ImageContainer imgSrc={this.props.project.thumbnailSrc}/>
            </ProjectLink>
            <ProjectInfos>
                <ProjectName><SubTitle>{this.props.project.name}</SubTitle></ProjectName>
                <ProjectDetails>
                    <span className="type">{this.props.project.type}</span> — <span className="duration">{daysConverter(this.props.project.duration)}</span> — <span className="date">{this.props.project.date}</span>
                </ProjectDetails>
                <ProjectCategories>
                    {this.props.project.categories.map((cat, index) => (
                        <SkillCard key={index} index={index} level={cat.level} name={cat.skills.join(', ')} animate={this.state.animate} fullwidth={false} color={getSkillCategoryColor(cat.name)} />
                    ))}
                </ProjectCategories>
            </ProjectInfos>
        </ProjectCardStyled>
    }
}

export default ProjectCard;