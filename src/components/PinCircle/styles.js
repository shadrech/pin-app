import styled, {css} from "react-emotion";

export const Circle = styled('div')`
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    margin: 0 0.5rem;
    background: ${props => props.verified ? "green" : "#FD7762"};
    opacity: ${props => props.index >= props.pinLength ? 0.2 : 1}
    ${props => (props.index === props.pinLength - 1) && css`
        opacity: 1;
        background: none;
        &:before {
            content: "${props.number}";
            color: #FD7762;
            font-family: "GothamRounded-Light";
            font-size: 0.6rem;
        }
    `}
`;