import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% + 4rem);
    background-color: ${colors.background};
    position: relative;
    padding: 8rem;
        @media (min-width: 1000px) {
            width: calc(100% + 12rem);
        }
`;

export const Header = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
`;

export const HeaderTitle = styled.div`
    display: flex;
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