import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import * as _ from 'underscore';
import { inView } from './../utils/inView';
import { withTranslation } from 'react-i18next';
import Section from './../components/Section';
import Title from './../components/Title';
import SubTitle from './../components/SubTitle';
import { skillsSvgData, patterns, gradients } from './../assets/constants';
import Theme from './../assets/Theme';
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
                animation: ${() => resetStrokeDash} 0.1s 3s infinite;
            }
        }
    }

    /* MOBILE */
    @media (max-width: 764px) {
        padding: 0 30px;
        margin-top: 120px;
    }
`;

const ContactInfos = styled.div`
    position: relative;
    width: 800px;

    /* MOBILE */
    @media (max-width: 764px) {
        position: static;
        width: 100%;
    }
`;

const ContactItem = styled.div`
    color: ${Theme.fakeWhite};
    font-weight: 200;
    font-size: 20px;
    margin-top: 5px;

    a {
        color: ${Theme.fakeWhite};
        text-decoration: none;
    }
`;

const BGCategoryIconContainer = styled.div`
    position: absolute;
    top: -65px;
    left: 0;
    width: 800px;
    pointer-events: none;

    /* MOBILE */
    @media (max-width: 764px) {
        left: -339px;
        left: calc(-400px + 50vw);
        top: -73px;
    }
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
            transition: stroke-dashoffset 2.5s ease-in-out 0.5s;
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

    /* MOBILE */
    @media (max-width: 764px) {
        position: static;
        width: 100%;
        height: 300px;
        margin: 0;
        padding: 0;
        background-position: top center;
        background-size: 100%;
    }
`;

const ContactDetails = styled.div`
    position: relative;
    margin-top: 201px;
    margin-left: 365px;

    .title {
        color: ${Theme.fakeWhite};
        font-size: 45px;
        margin: 0;
        font-weight: 200;
        text-transform: uppercase;
        z-index: 12;
        position: relative;
    }

    /* MOBILE */
    @media (max-width: 764px) {
        margin-top: 0;
        margin-left: 0;
        z-index: 10;
        .title {
            padding-top: 13px;
        }
    }
`;

const ContactResume = styled.div`
    font-size: 20px;
    text-align: justify;
    width: 427px;
    color: ${Theme.fakeWhite};
    font-weight: 300;
    align-self: unset;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 50px;
    line-height: 1.7;

     /* MOBILE */
    @media (max-width: 764px) {
        position: relative;
        width: 100%;
        z-index: 14;
    }
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
        const { t } = this.props;

        return <Section background={gradients.contact} patternUrl={patterns.kube.url}>
            <Title>{t('about')}</Title>
            <ContactContainer ref={this.FormsRef} className={this.state.animate ? "animate" : ''}>
                <ContactInfos>
                    <ContactDetails>
                        <ContactPhoto />
                        <div className="title"><SubTitle>Robin Vitré</SubTitle></div>
                        <ContactItem><a href="mailto:robin.vitre@gmail.com">robin.vitre@gmail.com</a></ContactItem>
                        <ContactItem><a href="tel:+33 6 37 94 17 96">+33 6 37 94 17 96</a></ContactItem>
                        <ContactItem><a href="https://www.linkedin.com/in/robin-vitre/" title="Linkedin">/in/robin-vitre/</a></ContactItem>
                    </ContactDetails>
                    <ContactResume>
                    {t('about-me-text')}</ContactResume>
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


export default withTranslation()(Contact);