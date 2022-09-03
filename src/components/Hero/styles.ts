import styled from "styled-components";
import { SectionCard } from "components/SectionCard";

export const HeroWrapper = styled(SectionCard)`
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  min-height: 455px;
  z-index: 3;

  @media (max-width: 640px) {
    min-height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 38px;
    min-height: 100%;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  width: 80%;

  @media (max-width: 640px) {
    font-size: 16px;
    font-weight: 300;
    width: 100%;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

export const HeroImg = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  z-index: 3;
`;
