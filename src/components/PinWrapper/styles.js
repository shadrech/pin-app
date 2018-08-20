import styled from "react-emotion";

export const Wrapper = styled('div')`
    height: 30rem;
    width: 18rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem 0 1rem 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 400px) {
        height: 100%;
        width: 100%;
        padding: 0;
    }
`;