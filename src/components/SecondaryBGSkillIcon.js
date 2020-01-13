import styled from 'styled-components';



const SecondaryBGSkillIcon = styled.div`
    position: absolute;
    will-change: opacity;
    opacity: 0;
    transition: opacity 0.3s 1.4s ease-in-out;
    cursor: pointer;

    &.animate {
        opacity: 1;
    }

    svg {
        width: 120px;
        
        * {
            stroke-width: 4px;
        }
    }

    .sec-title {
        position: absolute;
        top: 50%;
        color: white;
        text-transform: uppercase;
        white-space: nowrap;
    }

    &.front-back {
        top: 10px;
        left: -350px;
    }

    &.front-tools {
        bottom: -17px;
        left: -250px;

        .sec-title {
            left: -98px;
            top: 42%;
        }
    }

    &.back-front {
        top: 45px;
        left: -84px;

        .sec-title {
            left: -40px;
            top: 42%;
        }
    }

    &.back-tools {
        top: 157px;
        left: -290px;

        .sec-title {
            left: -98px;
            top: 42%;
        }
    }


    &.tools-front {
        top: 100px;
        left: -284px;

        .sec-title {
            left: -40px;
            top: 42%;
        }
    }

    &.tools-back {
        bottom: 37px;
        left: -200px;

        .sec-title {
            left: -9px;
            top: 44%;
        }
    }    
`;

export default SecondaryBGSkillIcon;