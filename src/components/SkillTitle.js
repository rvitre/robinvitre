import styled from 'styled-components';

const SkillTitle = styled.h3`
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    color: white;
    font-weight: 300;
    font-size: 38px;
    left: -100vw;
    will-change: left;
    transition: left 0.7s ease-in-out;

    &.front {
        top: 88px;
    }

    &.back {
        top: 169px;
    }

    &.tools {
        top: 104px;
    }

    &.animate {
        &.front {
            left: -82px;
        }

        &.back {
            left: 156px;
        }

        &.tools {
            left: 235px;
        }
    }

    /* MOBILE */
    @media (max-width: 764px) {
        font-size: 23px;

        &.animate {
            &.front {
                left: 250px;
            }

            &.back {
                left: 282px;
            }

            &.tools {
                left: 257px;
                top: 68px;
            }
        }
    }
`;

export default SkillTitle;