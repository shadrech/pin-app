import styled, {keyframes, css} from 'react-emotion';

export const Display = styled('div')`
    display: block;
    text-align: center;
    padding-right: 4rem;
    margin-bottom: 2rem;
`;

export const UpperText = styled('div')`
    color: #D8D8D8;
`;

export const Heading = styled('p')`
    font-size: 1rem;
    font-family: "GothamRounded-Medium";
    margin-bottom: 0;
`;
export const SubHeading = styled('p')`
    font-family: "GothamRounded-Light";
    font-size: 0.9rem;
    margin: 0;
`;

const shake = keyframes`
    0% {
        transform: translateX(0%);
    }
    10% {
        transform: translateX(10%);
    }
    20% {
        transform: translateX(-10%);
    }
    30% {
        transform: translateX(7%);
    }
    40% {
        transform: translateX(-5%);
    }
    50% {
        transform: translateX(5%);
    }
    60% {
        transform: translateX(-3%);
    }
    70% {
        transform: translateX(2%);
    }
    80% {
        transform: translateX(-2%);
    }
    90% {
        transform: translateX(1%);
    }
    95% {
        transform: translateX(-1%);
    }
    97% {
        transform: translateX(0.5%);
    }
    100% {
        transform: translateX(0%);
    }
`;

export const PinWrapper = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    ${props => props.shake && css`
        animation: ${shake} 1s ease;
    `}
`;