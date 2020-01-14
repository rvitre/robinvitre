import React, { Component } from "react";
import styled from 'styled-components';
import * as _ from 'underscore';

import Section from './../components/Section';
import Title from './../components/Title';
import ProjectCard from './../components/ProjectCard';

import ProjectsList from '../assets/ProjectsList';
import { inView } from './../utils/inView';

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 100px;

    /* MOBILE */
    @media (max-width: 764px) {
        height: auto;
        padding: 0 20px;
    }
`;

class Projects extends Component {

    constructor(props) {
        super(props);

        for (let index in ProjectsList) {
            this['projectRef'+index] = React.createRef();
        }
        this.FrontProjectCardRef = React.createRef();

        this.state = {
            animate_front: false,
            animateProjects: []
        };
        
        this.animateProjectCard = this.animateProjectCard.bind(this);

        // debounce scroll event listener
        this.animateProjectCardThrottled = _.throttle(this.animateProjectCard, 50);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.animateProjectCardThrottled);

        for (let index in ProjectsList) {
            this.setState(state => {
                const animateProjects = [...state.animateProjects, {"name": "projectRef"+index, "status": false}];
                return {
                    animateProjects,
                };
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateProjectCardThrottled);
    }
    
    animateProjectCard() {
        let FrontProjectCardElement = this.projectRef0.current;
        
        for (let index in ProjectsList) {
            let theRef = this.projectRef0.current;

            if (inView(theRef, 0) && !this.state.animateProjects[index].status) {
                this.setState(state => {
                    const animateProjects = state.animateProjects.map((item, i) => {
                        if (i == index) {
                            item.status = true;
                            return item;
                        } else {
                            return item;
                        }
                    });
                    return {
                        animateProjects,
                    };
                });
            }
            else if(!inView(theRef, 0) && this.state.animateProjects[index].status){
                this.setState(state => {
                    const animateProjects = state.animateProjects.map((item, i) => {
                        if (i == index) {
                            item.status = false;
                            return item;
                        } else {
                            return item;
                        }
                    });
                    return {
                        animateProjects,
                    };
                });
            }
        }
    }

    setRef = (ref) => {
        this.projecRefs.push(ref);
    };

    render() {
        return <Section>
                <Title>Projets</Title>
                <ProjectsContainer>
                    {ProjectsList.map((project, i) => (
                        <ProjectCard key={i} project={project} ref={this['projectRef'+i]} animate={typeof this.state.animateProjects[i] === 'undefined' ? false : this.state.animateProjects[i].status} />
                    ))}
                </ProjectsContainer>
            </Section>;
    }
}

export default Projects;