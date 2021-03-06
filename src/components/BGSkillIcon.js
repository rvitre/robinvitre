import styled, { keyframes } from 'styled-components';
import { skillsSvgData } from './../constants/constants';

const resetStrokeDash = keyframes`
    0%   { stroke-dasharray: initial; stroke-dashoffset: initial;}
    100%   { stroke-dasharray: initial; stroke-dashoffset: initial;}
`;

const BGSkillIcon = styled.div`
    position: absolute;
    right: 5vw;
    top: -192px;

    &.front {
        top: -208px;

        svg {
            rect {
                stroke-dasharray: ${skillsSvgData.front["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.front["stroke-length"]};
            }
        }
    }

    &.back {
        top: -313px;

        svg {
            polygon {
                stroke-dasharray: ${skillsSvgData.back["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.back["stroke-length"]};
            }
        }
    }

    &.tools {
        top: -247px;
        svg {
            polygon {
                stroke-dasharray: ${skillsSvgData.tools["stroke-length"]};
                stroke-dashoffset: ${skillsSvgData.tools["stroke-length"]};
            }
        }
    }

    & > svg {
        width: 650px;
        polygon, rect {
            will-change: stroke-dasharray;
            stroke-width: 1;
            transition: stroke-dashoffset 1.5s ease-in-out;
        }
    }

    &.animate {
        svg {
            * {
                stroke-dashoffset: 0 !important;
                animation: ${() => resetStrokeDash} 0.1s 1.5s infinite;
            }
        }
    }

    /* MOBILE */
    @media (max-width: 764px) {
        
        & > svg {
            width: 513px;
        }

        &.front {
            top: -155px;
        }

        &.back {
            top: -239px;
        }

        &.tools {
            top: -183px;
        }
    }
    
`;

export default BGSkillIcon;