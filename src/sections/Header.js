import React, { Component } from "react";
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import Section from './../components/Section';

import Theme from './../assets/Theme';

const HelloTextHeight = '170px';

const HelloText = styled.h1`
    color: #FFF;
    font-size: 58px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    margin: 0;
    height: ${HelloTextHeight};
    flex-direction: column;
    align-items: flex-start;
    font-weight: 100;

    transition: transform ${props => props.time};
    transform: translate(5000px, 0);
    transform: translate(${props => props.x}, 0);

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 28px;
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
    height: 40vh;
    position: relative;
`;
const BottomBarsContainer = styled.div`
    height: calc(100vh - 40vh - ${HelloTextHeight});
    position: relative;
`;

const MovingObject = styled.div`
    background: ${props => props.color || '#fff'};
    height: 2px;
    left: ${props => props.from === "left" ? '0' : 'initial'};
    right: ${props => props.from === "right" ? '0' : 'initial'};
    width: ${props => props.size || '50vw'};
    position: absolute;
    top: ${props => props.top};
    transition: transform ${props => props.time};
    transform: translate(${props => props.from === "right" ? '5000px' : '-6000px'}, 0);
    transform: translate(${props => props.x}, 0);
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

        return <Section height="100vh" padding="0" color={Theme.purpleDark}>
            <TopBarsContainer>
                <MovingObject from={'right'} x={this.state.x} time="0.9s" top="35%" color={Theme.purpleLight} size="80vw"></MovingObject>
                <MovingObject from={'left'}  x={this.state.xNeg} time="1.3s" top="60%" color={Theme.blueLight} size="60vw"></MovingObject>
                <MovingObject from={'right'} x={this.state.x} time="1.7s" top="72%" color={Theme.pinkLight} size="50vw"></MovingObject>
            </TopBarsContainer>
    
            <HelloText  x={this.state.x} time="1s">
            {t('welcome-text-1')}<br /> {t('welcome-text-2')}
                <LanguageInfo>{t('change-lang-text-1')} <a href="/" onClick={(e) => this.handleLangChange(e)} title="English/Français">{t('change-lang-text-2')} </a> {t('change-lang-text-3')} </LanguageInfo>
            </HelloText>
            <BottomBarsContainer>
                <MovingObject from={'left'}  x={this.state.xNeg} time="2.1s" top="40%" color={Theme.purpleLight} size="30vw"></MovingObject>
                <MovingObject from={'right'} x={this.state.x} time="2.5s" top="70%" color={Theme.blueLight} size="45vw"></MovingObject>
            </BottomBarsContainer>
        </Section>;
    }
}

export default withTranslation()(Header);