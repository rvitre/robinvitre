import React, { Component } from "react";
import styled from 'styled-components';

const ProjectCardStyled = styled.article`
    box-sizing: border-box;
    padding: 20px;
    width: 50%;
    height: 100px;
`;

class ProjectCard extends Component {
    render() {
        let project = this.props.project;
        return <ProjectCardStyled>{project.name}</ProjectCardStyled>;
    }
}

export default ProjectCard;