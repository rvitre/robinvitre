import React, { Component } from "react";
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import Section from './../components/Section';
import MovingLine from './../components/MovingLine';
import Theme from './../assets/Theme';
import {scrollToBottom} from './../utils/scroll';
import { patterns, gradients } from './../assets/constants';

const HelloTextHeight = '200px';

const HelloText = styled.h1`
    color: ${Theme.fakeWhite};
    font-size: 80px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    margin: 0;
    height: ${HelloTextHeight};
    flex-direction: column;
    align-items: flex-start;
    font-weight: 100;
    z-index: 2;
    position: relative;

    transition: transform ${props => props.time};
    transform: translate(5000px, 0);
    transform: translate(${props => props.x}, 0);

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 28px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const LanguageInfo = styled.span`
    font-size: 14px;
    font-weight: normal;
    margin-top: 15px;

    a {
        color: ${Theme.purpleLight};
        text-decoration: none;
    }
`;

const TopBarsContainer = styled.div`
    height: 35vh;
    position: relative;
`;
const BottomBarsContainer = styled.div`
    height: calc(100vh - 45vh - ${HelloTextHeight});
    position: relative;
`;

const SectionAnchor = styled.div` 
    position: absolute;
    right: 0;
    top: 55%;
    color: ${Theme.fakeWhite}; 
    font-size: 35px;
    font-weight: 200;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    

    &:after {
        content: '';
        height: 1px;
        background: ${Theme.fakeWhite};
        width: 90px;
        margin-left: 12px;
    }

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 20px;
    }
`;

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {x: '5000px', xNeg: '-6000px', lang: 'fr'};

        this.handleLangChange = this.handleLangChange.bind(this);
    }

    componentDidMount() {
        let _this = this;
        setTimeout(function() { _this.setState((state) => {
            return {x: '0', xNeg: '0'}
        });}, 1);
    }

    handleLangChange(e) {
        e.preventDefault();
        const { i18n } = this.props;

        if (this.state.lang === 'fr') {
            i18n.changeLanguage('en');
            this.setState(() => {
                return {lang: 'en'}
            });
        }
        else {
            i18n.changeLanguage('fr');
            this.setState(() => {
                return {lang: 'fr'}
            });
        }
    }

    render() {
        const { t } = this.props;

        return <Section height="100vh" padding="0" background={gradients.header} patternUrl={patterns.kube.url}>
            <TopBarsContainer>
                <MovingLine from={'right'} x={this.state.x} time="0.9s" top="35%" color={Theme.purpleLight} size="80vw"></MovingLine>
                <MovingLine from={'left'}  x={this.state.xNeg} time="1.3s" top="60%" color={Theme.blueLight} size="60vw"></MovingLine>
                <MovingLine from={'right'} x={this.state.x} time="1.7s" top="74%" color={Theme.pinkLight} size="50vw"></MovingLine>
            </TopBarsContainer>
    
            <HelloText  x={this.state.x} time="1s">
            {t('welcome-text-1')}<br /> {t('welcome-text-2')}
                <LanguageInfo>{t('change-lang-text-1')} <a href="/" onClick={this.handleLangChange} title="English/Français">{t('change-lang-text-2')} </a> {t('change-lang-text-3')} </LanguageInfo>
            </HelloText>
            <BottomBarsContainer>
                <MovingLine from={'left'}  x={this.state.xNeg} time="2.1s" top="40%" color={Theme.purpleLight} size="30vw"></MovingLine>
                <MovingLine from={'right'} x={this.state.x} time="2.5s" top="80%" color={Theme.blueLight} size="45vw"></MovingLine>
                <SectionAnchor onClick={() => scrollToBottom()}>A propos</SectionAnchor>
            </BottomBarsContainer>
        </Section>;
    }
}

export default withTranslation()(Header);