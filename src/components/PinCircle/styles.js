import styled from "react-emotion";
import { statusColor } from "../utils";

export const Circle = styled('div')`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.35rem;
    margin: 0 0.5rem;
    background: ${props => props.number ? 'transparent' : statusColor(props)};
    opacity: ${props => props.index >= props.pinLength ? 0.2 : 1};
    display: flex;
    align-items: center;
`;

export const CircleNumber = styled('span')`
  color: ${({color}) => color};
  font-family: "GothamRounded-Light";
  font-size: 1rem;
`;