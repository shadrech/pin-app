import styled, {css} from "react-emotion";
import { statusColor } from "../utils";

export const Circle = styled('div')`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.35rem;
    margin: 0 0.5rem;
    background: ${statusColor};
    opacity: ${props => props.index >= props.pinLength ? 0.2 : 1}
    ${props => (props.index === props.pinLength - 1) && css`
        opacity: 1;
        background: none;
        &:before {
            content: "${props.number}";
            color: ${statusColor(props)};
            font-family: "GothamRounded-Light";
            font-size: 1rem;
            position: absolute;
            transform: translateY(-0.2rem);
            display: flex;
        }
    `}
`;