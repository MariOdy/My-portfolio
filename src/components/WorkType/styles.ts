import styled from "styled-components";
import { Container } from "../../Container.styled";

export const WorkTypeWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 455px;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

export const WorkTypeLeftBlock = styled.div`
  width: 60%;
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  > h3 {
    font-size: 16px;
    font-weight: 400;
  }
  > h2 {
    font-size: 30px;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: fit-content;
    gap: 20px;

    > h3 {
      margin-top: 0;
    }
  }
`;

export const WorkTypeBlocks = styled.div`
  display: grid;
  height: 324px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  > div {
    background-color: rgba(255, 255, 255, 0.141);
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  > div > img {
    width: 45%;
    height: 45%;
  }

  @media (max-width: 900px) {
    height: 175px;
  }
`;
