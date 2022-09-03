import styled from "styled-components";
import { SectionCard } from "components/SectionCard";

export const HeroWrapper = styled(SectionCard)`
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 455px;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    min-height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(28px, 6vw, 60px);
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 24px;
  max-width: 500px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

export const HeroImg = styled.img`
  display: block;
  object-fit: contain;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    margin-top: 24px;
    height: auto;
    width: 100%;
  }

  @media (min-width: 641px) {
    position: absolute;
    top: 40px;
    bottom: 40px;
    left: max(520px, 100% - 540px);

    object-position: left;

    height: fill-available;
    width: auto;
  }
`;
