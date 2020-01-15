import React from "react";
import styled from 'styled-components';
import { daysConverter } from './../utils/date';
import { getSkillCategoryColor } from './../utils/skills';

import SkillCard from './SkillCard';

const smallScreenBreak = "1008px";

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
    overflow: hidden;

    /* Small Screens -*/
    @media (max-width: ${smallScreenBreak}) {
        overflow: initial;
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



const ProjectCard = React.forwardRef((props,  ref) => <ProjectCardStyled ref={ref}>
            <ProjectLink href={props.project.url} title={props.project.name} target="_blank">
                <ImageContainer />
            </ProjectLink>
            <ProjectInfos>
                <ProjectName>{props.project.name}</ProjectName>
                <ProjectDetails>
                    <span className="type">{props.project.type}</span> — <span className="duration">{daysConverter(props.project.duration)}</span> — <span className="date">{props.project.date}</span>
                </ProjectDetails>
                <ProjectCategories>
                    {props.project.categories.map((cat, index) => (
                        <SkillCard key={index} index={index} level={cat.level} name={cat.skills.join(', ')} animate={props.animate} fullwidth={false} color={getSkillCategoryColor(cat.name)} />
                    ))}
                </ProjectCategories>
            </ProjectInfos>
        </ProjectCardStyled>
);

export default ProjectCard;