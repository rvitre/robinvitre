import React, { Component } from "react";
import styled from 'styled-components';
import { daysConverter } from './../utils/date';

import SkillCard from './SkillCard';


const ProjectCardStyled = styled.article`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 50px;
    display: flex;

    /* MOBILE */
    @media (min-width: 2000px) {
        width: calc( 100% / 2);
    }
`;

const ProjectLink = styled.a`
    display: block;
    position: relative;
    width: 320px;
    z-index: 2;
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
`;

const ProjectDetails = styled.div`
    padding-left: 20px;
    color: white;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
`;

const ProjectCategories = styled.div`
    position: relative;
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 0;
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
                        <SkillCard key={index} level={cat.level} name={cat.skills.join(', ')} animate={true} fullwidth={false} />
                    ))}
                </ProjectCategories>
            </ProjectInfos>
        </ProjectCardStyled>;
    }
}

export default ProjectCard;