import React, { Component } from "react";
import styled from 'styled-components';
import Section from './../components/Section';
import Title from './../components/Title';

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

class Contact extends Component {
    
    render() {
        return <Section color="#4205d9">
            <Title>Contact</Title>
        </Section>;
    }
}

export default Contact;