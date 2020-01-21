import React, { Component } from "react";
import styled from 'styled-components';
import * as _ from 'underscore';
import { withTranslation } from 'react-i18next';
import Section from './../components/Section';
import Title from './../components/Title';
import ProjectCard from './../components/ProjectCard';
import ProjectsList from '../constants/ProjectsList';
import { inView } from './../utils/inView';
import { patterns, gradients } from './../constants/constants';

const smallScreenBreak = "1008px";

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 100px;

    /* MOBILE */
    @media (max-width: ${smallScreenBreak}) {
        height: auto;
        padding: 0 20px;
    }
`;

class Projects extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { t } = this.props;

        return <Section background={gradients.projects} patternUrl={patterns.dode.url}>
                <Title>{t('projects')}</Title>
                <ProjectsContainer>
                    {ProjectsList.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </ProjectsContainer>
            </Section>;
    }
}

export default withTranslation()(Projects);