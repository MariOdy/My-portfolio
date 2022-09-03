import styled from "styled-components";
import { SectionCard } from "Container.styled";

export const HeroWrapper = styled(SectionCard)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeroInfoWrapper = styled.div`
  z-index: 3;

  flex: 1.3;
  font-size: 60px;
  font-weight: 700;
  min-height: 455px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  line-height: 70px;
  > div .smart-code {
    display: none;
  }

  img {
    width: 60px;
    height: 60px;
  }

  p {
    width: 80%;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
  }

  @media (max-width: 640px) {
    font-size: 38px;
    line-height: 45px;
    min-height: 100%;

    > div > span:nth-child(1) {
      display: none;
    }
    > div .smart-code {
      display: inline;
    }

    p {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
    }
  }
`;

export const HeroImgWrapper = styled.div`
  z-index: 3;
  flex: 1;

  img {
    max-width: 100%;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`;
