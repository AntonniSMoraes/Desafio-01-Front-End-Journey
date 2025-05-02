import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 0;
  gap: 2rem;
  align-items: center;
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
    color: ${colors.primary};
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

