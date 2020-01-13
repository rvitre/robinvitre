import styled from 'styled-components';

const SkillsSvgData = { 'front': { 'stroke-length': 735}, 'back': { 'stroke-length': 584 }, 'tools': { 'stroke-length': 587 }};

const BGSkillIcon = styled.div`
    position: absolute;
    right: 5vw;
    top: -192px;

    &.front {
        top: -208px;

        svg {
            rect {
                stroke-dasharray: ${SkillsSvgData.front["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.front["stroke-length"]};
            }
        }
    }

    &.back {
        top: -313px;

        svg {
            polygon {
                stroke-dasharray: ${SkillsSvgData.back["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.back["stroke-length"]};
            }
        }
    }

    &.tools {
        top: -247px;
        svg {
            polygon {
                stroke-dasharray: ${SkillsSvgData.tools["stroke-length"]};
                stroke-dashoffset: ${SkillsSvgData.tools["stroke-length"]};
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

            svg {
                rect {
                    stroke-dasharray: ${SkillsSvgData.front["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.front["stroke-length"]};
                }
            }
        }

        &.back {
            top: -239px;

            svg {
                polygon {
                    stroke-dasharray: ${SkillsSvgData.back["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.back["stroke-length"]};
                }
            }
        }

        &.tools {
            top: -183px;
            svg {
                polygon {
                    stroke-dasharray: ${SkillsSvgData.tools["stroke-length"]};
                    stroke-dashoffset: ${SkillsSvgData.tools["stroke-length"]};
                }
            }
        }
    }
    
`;

export default BGSkillIcon;