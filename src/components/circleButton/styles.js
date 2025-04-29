import styled from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color};
    width: ${({dimensions}) => dimensions?.width || '3rem'};
    height: ${({dimensions}) => dimensions?.height || '3rem'};
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #004085;
    }
`;