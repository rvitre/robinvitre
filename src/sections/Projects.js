import React, { Component } from "react";
import styled from 'styled-components';

import Section from './../components/Section';
import Title from './../components/Title';
import ProjectCard from './../components/ProjectCard';

import ProjectsList from '../assets/ProjectsList';

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 100px;

    /* alert-strip  MOBILE */
    @media (max-width: 764px) {
        height: auto;
        padding: 0 20px;
    }
`;

class Projects extends Component {

    render() {
        return <Section>
                <Title>Projects</Title>
                <ProjectsContainer>
                    {ProjectsList.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </ProjectsContainer>
            </Section>;
    }
}

export default Projects;