import styled from "styled-components";
import { colors } from "../../constants/format";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    gap: 2rem;

`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Title = styled.h1`
    font-size: 6.2rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: ${colors.background};
    margin-bottom: 1rem;
    text-align: left;
`;

export const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: ${colors.lightText};
`;

export const PcImage = styled.img`
    width: 500px;
    height: 500px;
    margin-top: 10rem;
    @media (max-width: 768px) {
        right: -20rem;
        position: absolute;
    }
`;