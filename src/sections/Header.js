import React, { Component } from "react";
import styled from 'styled-components';
import Section from './../components/Section';

const HelloText = styled.h1`
    color: #FFF;
    font-size: 58px;
    padding-left: 50px;
    padding-right: 100px;
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0;

    transition: transform ${props => props.time};
    transform: translate(5000px, 0);
    transform: translate(${props => props.x}, 0);
`;

const MovingObject = styled.div`
    background: #c60101;
    height: 1px;
    width: 6000px;
    position: absolute;
    top: ${props => props.top};
    transition: transform ${props => props.time};
    transform: translate(${props => props.xStart || '5000px'}, 0);
    transform: translate(${props => props.x}, 0);
`;
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {x: '5000px', xNeg: '-6000px'};
    }

    componentDidMount() {
        let _this = this;
        setTimeout(function() { _this.setState((state) => {
            return {x: '0', xNeg: '0'}
        });}, 1);
    }

    render() {
        return <Section>
            <HelloText  x={this.state.x} time="0.5s">Bonjour, je m'appelle Robin Vitré<br /> Je suis développeur web</HelloText>
            <MovingObject xStart={'5000px'} x={this.state.x} time="1s" top="40%"></MovingObject>
            <MovingObject xStart={'5000px'} x={this.state.x} time="1.5s" top="35%"></MovingObject>
            <MovingObject xStart={'5000px'} x={this.state.x} time="2s" top="30%"></MovingObject>
            <MovingObject xStart={'5000px'} x={this.state.x} time="2.5s" top="25%"></MovingObject>
            <MovingObject xStart={'5000px'} x={this.state.x} time="3s" top="20%"></MovingObject>

            <MovingObject xStart={'-6000px'} x={this.state.xNeg} time="3.5s" top="60%"></MovingObject>
        </Section>;
    }
}

export default Header;