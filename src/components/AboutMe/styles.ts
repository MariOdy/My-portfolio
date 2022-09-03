import styled from "styled-components";
import { SectionCard } from "components/SectionCard";

export const AboutMeWrapper = styled(SectionCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 16px;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  h3 {
    font-size: 26px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 640px) {
    align-items: center;
    p {
      width: 110%;
      font-size: 16px;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 60%;
    border-radius: 50%;
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;
