import React, { Component } from "react";
import styled from 'styled-components';
import Section from './../components/Section';
import Title from './../components/Title';
import Theme from './../assets/Theme';

const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0 100px;
    padding-bottom: 200px;
`;

const ContactItem = styled.div`
    color: white;
    font-size: 30px;
    padding: 0 20px;

    a {
        color: white;
        text-decoration: none;
    }
`;


class Contact extends Component {
    
    render() {
        return <Section color={Theme.purpleDark}>
            <Title>A propos</Title>
            <ContactContainer>
                <ContactItem><a href="mailto:robin.vitre@gmail.com">robin.vitre@gmail.com</a></ContactItem>
                <ContactItem><a href="tel:+33 6 37 94 17 96">+33 6 37 94 17 96</a></ContactItem>
                <ContactItem><a href="https://www.linkedin.com/in/robin-vitre/" title="Linkedin">/in/robin-vitre/</a></ContactItem>
            </ContactContainer>
        </Section>;
    }
}

export default Contact;