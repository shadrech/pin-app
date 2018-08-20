import styled from "react-emotion";

export const BtnWrapper = styled('div')`
    display: block;
`;

export const RowWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    &:last-child {
        margin-bottom: 0;
    }
`;