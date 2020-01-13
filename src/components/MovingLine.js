import styled, { keyframes } from 'styled-components';


const translateLoopFromRight = keyframes`
    0%   { right: -100vw; }
    100%  { right: 100vw; }
`;

const translateLoopFromLeft = keyframes`
    0%   { left: -100vw; }
    100%  { left: 100vw; }
`;

const MovingLine = styled.div`
    background: ${props => props.color || '#fff'};
    height: 2px;
    left: ${props => props.from === "left" ? '-100vw' : 'initial'};
    right: ${props => props.from === "right" ? '-100vw' : 'initial'};
    width: ${props => props.size || '50vw'};
    position: absolute;
    top: ${props => props.top};
    transition: transform ${props => props.time}, left ${props => props.time}, right ${props => props.time};

    animation: ${props => props.from === "right" ? translateLoopFromRight : translateLoopFromLeft} 2s ${props => props.time} infinite;
`;

export default MovingLine;