import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import * as _ from 'underscore';
import { inView } from './../utils/inView';

import Section from './../components/Section';
import Title from './../components/Title';

import { skillsSvgData, patterns, gradients } from './../assets/constants';
import { ReactComponent as FrontendIcon} from './../assets/img/frontend.svg';
import { ReactComponent as BackendIcon} from './../assets/img/backend.svg';
import { ReactComponent as ToolsIcon} from './../assets/img/tools.svg';
import MePhoto from './../assets/img/me.jpg';


const resetStrokeDash = keyframes`
    0%   { stroke-dasharray: initial; stroke-dashoffset: initial;}
    100%   { stroke-dasharray: initial; stroke-dashoffset: initial;}
`;


const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 100px;
    padding-bottom: 380px;
    position: relative;

    &.animate {
        svg {
            * {
                stroke-dashoffset: 0 !important;
                animation: ${() => resetStrokeDash} 0.1s 1.5s infinite;
            }
        }
    }
`;

const ContactInfos = styled.div`
    position: relative;
    width: 800px;
`;

const ContactItem = styled.div`
    color: white;
    font-weight: 200;
    font-size: 20px;
    margin-top: 5px;

    a {
        color: white;
        text-decoration: none;
    }
`;

const BGCategoryIconContainer = styled.div`
    position: absolute;
    top: -65px;
    left: 0;
    width: 800px;
    pointer-events: none;
`;

const BGCategoryIcon = styled.div`
    position: absolute;
    width: 800px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;

    & > svg {
        polygon, rect {
            will-change: stroke-dasharray;
            stroke-width: 1;
            transition: stroke-dashoffset 1.5s ease-in-out;
        }
    }

    &.front {
        top: 149px;
        width: 594px;
        z-index: 9;

        svg {
            rect {
                stroke-dasharray: ${skillsSvgData.front["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.front["stroke-length"]};
            }
        }
    }

    &.back {
        top: -73px;
        z-index: 11;

        svg {
            polygon {
                stroke-dasharray: ${skillsSvgData.back["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.back["stroke-length"]};
            }
        }
    }

    &.tools {
        top: 62px;
        z-index: 11;
        width: 770px;

        svg {
            polygon {
                stroke-dasharray: ${skillsSvgData.tools["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.tools["stroke-length"]};
            }
        }
    }
`;

const ContactPhoto = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    z-index: 10;
    left: -345px;
    bottom: 0;

    background-image: url(${MePhoto});
    background-repeat: no-repeat;
    background-position: 91% 14%;
    background-size: 150%;
`;

const ContactDetails = styled.div`
    position: relative;
    margin-top: 201px;
    margin-left: 365px;

    .title {
        color: white;
        font-size: 45px;
        margin: 0;
        font-weight: 200;
        text-transform: uppercase;
        z-index: 12;
        position: relative;
    }
`;

const ContactResume = styled.div`
    font-size: 20px;
    text-align: justify;
    width: 427px;
    color: white;
    font-weight: 300;
    align-self: unset;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 50px;
    line-height: 1.7;
`;

class Contact extends Component {

    constructor(props) {
        super(props);
        this.FormsRef = React.createRef();

        this.state = {
            animate: false,
        };

        this.animateForms = this.animateForms.bind(this);

        // debounce scroll event listener
        this.animateFormsThrottled = _.throttle(this.animateForms, 50);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.animateFormsThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateFormsThrottled);
    }
    
    animateForms(event) {
        let FormsElement = this.FormsRef.current;

        if (inView(FormsElement) && !this.state.animate) {
            this.setState(() => {
                return {animate: true}
            });
        }
        else if(!inView(FormsElement) && this.state.animate){
            this.setState(() => {
                return {animate: false}
            });
        }
    }

    render() {
        return <Section background={gradients.contact} patternUrl={patterns.kube.url}>
            <Title>A propos</Title>
            <ContactContainer ref={this.FormsRef} className={this.state.animate ? "animate" : ''}>
                <ContactInfos>
                    <ContactDetails>
                        <ContactPhoto />
                        <div className="title">Robin Vitré</div>
                        <ContactItem><a href="mailto:robin.vitre@gmail.com">robin.vitre@gmail.com</a></ContactItem>
                        <ContactItem><a href="tel:+33 6 37 94 17 96">+33 6 37 94 17 96</a></ContactItem>
                        <ContactItem><a href="https://www.linkedin.com/in/robin-vitre/" title="Linkedin">/in/robin-vitre/</a></ContactItem>
                    </ContactDetails>
                    <ContactResume>
                    Je suis un développeur web Agile. Après une formation de 3 ans et 5 ans d'expérience dans des projets variés au sein d'un groupe international, je suis prêt à relever de nouveaux défis et mettre mon savoir-faire en valeur.
                    </ContactResume>
                    <BGCategoryIconContainer>
                        <BGCategoryIcon className="front"><FrontendIcon /></BGCategoryIcon>
                        <BGCategoryIcon className="back"><BackendIcon /></BGCategoryIcon>
                        <BGCategoryIcon className="tools"><ToolsIcon /></BGCategoryIcon>
                    </BGCategoryIconContainer>
                </ContactInfos>
            </ContactContainer>
        </Section>;
    }
}


export default Contact;