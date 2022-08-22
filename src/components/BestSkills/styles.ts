import styled from "styled-components";
import { Container } from "../../Container.styled";

export const BestSkillsWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  img {
    max-height: 455px;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`;

export const BestSkillsInfo = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-start;

  h2 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 36px;
  }
  @media (max-width: 900px) {
    align-items: center;
    width: 80%;

    p {
      margin-bottom: 12px;
      text-align: center;
    }
  }
`;

export const InfoPercantage = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  width: 80%;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  gap: 32px;
  margin-bottom: 12px;

  span {
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 900px) {
    gap: 20px;
    font-size: 20px;
    justify-content: center;
    margin-bottom: 0;
  }
`;
