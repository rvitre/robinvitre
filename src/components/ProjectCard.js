import React, { Component } from "react";
import styled from 'styled-components';
import { daysConverter } from './../utils/date';
import { getSkillCategoryColor } from './../utils/skills';

import SkillCard from './SkillCard';

const smallScreenBreak = "1008px"

const ProjectCardStyled = styled.article`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 50px;
    display: flex;

    /* Big Screen + */
    @media (min-width: 2000px) {
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
`;

const ImageContainer = styled.div`
    max-height: 100%;
    width: 100%;
    height: 200px;
    background-image: url(https://robinvitre.s3.eu-west-3.amazonaws.com/website.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
`;

const ProjectName = styled.h3`
    padding-left: 20px;
    color: white;
    font-size: 30px;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        margin-top: 10px;
        text-align: center;
        padding-left: 0;
    }
`;

const ProjectDetails = styled.div`
    padding-left: 20px;
    color: white;
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
    bottom: 0;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        width: 100vw;
        margin-left: -20px;
        margin-top: 20px;
        position: relative;
    }
`;



class ProjectCard extends Component {

    render() {
        let project = this.props.project;
        return <ProjectCardStyled>
            <ProjectLink href={project.url} title={project.name} target="_blank">
                <ImageContainer />
            </ProjectLink>
            <ProjectInfos>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDetails>
                    <span className="type">{project.type}</span> — <span className="duration">{daysConverter(project.duration)}</span> — <span className="date">{project.date}</span>
                </ProjectDetails>
                <ProjectCategories>
                    {project.categories.map((cat, index) => (
                        <SkillCard key={index} time={index} level={cat.level} name={cat.skills.join(', ')} animate={true} fullwidth={false} color={getSkillCategoryColor(cat.name)} />
                    ))}
                </ProjectCategories>
            </ProjectInfos>
        </ProjectCardStyled>;
    }
}

export default ProjectCard;