import React, { Component } from "react";
import styled from 'styled-components';
import { getSkillColor } from './../utils/skills';

const ProjectCardStyled = styled.article`
    box-sizing: border-box;
    padding: 20px;
    width: calc(100% / 6);

    /* 4k Desktop */
    @media (max-width: 3000px) {
        width: calc(100% / 5);
    }

    /* 2k Desktop */
    @media (max-width: 2000px) {
        width: calc(100% / 4);
    }

    /* Desktop */
    @media (max-width: 1400px) {
        width: calc(100% / 3);
    }

    /* Small Desktop */
    @media (max-width: 1100px) {
        width: calc(100% / 2);
    }
    /* MOBILE */
    @media (max-width: 764px) {
        width: 100%;
    }
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
    color: white;
    text-align: center;
`;

const ProjectTechs = styled.div`
    color: white;
    list-style: none;
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    min-height: 58px;

`;

const TechItem = styled.li`
    background: ${props => props.color ? props.color : '#fff'};
    padding: 0 5px;
    
`;

const ProjectLink = styled.a`
    display: block;
`;

class ProjectCard extends Component {

    render() {
        let project = this.props.project;
        return <ProjectCardStyled>
            <ProjectLink href={project.url} title={project.name} target="_blank">
                <ImageContainer />
            </ProjectLink>
            <ProjectName>{project.name}</ProjectName>
            <ProjectTechs>{project.techs.map((tech, index) => (<TechItem color={() => getSkillColor(tech)} key={index}>{tech}</TechItem>))}</ProjectTechs>
        </ProjectCardStyled>;
    }
}

export default ProjectCard;