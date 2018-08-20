import styled, {css} from "react-emotion";

export const ButtonWrapper = styled('div')`
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 1rem 0.1rem rgba(90,113,139,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "GothamRounded-Book";
    font-size: 1.3rem;
    color: ${props => props.locked ? "#5A718B" : "gray"};
    transition: all .2s ease;
    ${props => props.locked ? css`
        pointer-events: none;
    ` : css`
        &:hover {
            box-shadow: 0px 0px 0.2rem 0.9rem rgba(37,171,255,0.22);
            background: #25ABFF;
            color: white;
            cursor: pointer;
        }
    `}
`;