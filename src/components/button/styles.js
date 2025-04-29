import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 10px;
    width: ${({dimensions}) => dimensions?.width || 'auto'};
    height: ${({dimensions}) => dimensions?.height || 'auto'};
    background-color: ${
        ({background}) => background === 'primary' ?  colors.primary :
         colors.background};
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #004085;
    }
`;