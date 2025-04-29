import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`;

export const Bubble = styled.div`
    display: flex;
    border-radius: 10px;
    margin-right: 5px;
    width: 42px;
    height: 42px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.secondary};

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        gap: 20px;
        margin: 0;
        padding: 0;
    }

    li {
        cursor: pointer;
    }
`;