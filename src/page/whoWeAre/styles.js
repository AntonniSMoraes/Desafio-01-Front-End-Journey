import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: ${colors.background};
    position: relative;
    padding: 8rem;
`;

export const Header = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
`;

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderText = styled.p`
    padding-right: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const HeaderButton = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: ${colors.buttonText};
`
export const Logo = styled.div`
    display: flex;
    width: 18px;
    height: 18px;
    padding: .4rem;
    border-radius: 10px;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin-right: 4rem;
`;


export const Nav = styled.nav`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.secondary};

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 10rem;
        margin: 0;
        padding: 0;
    }

    li {
        cursor: pointer;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;