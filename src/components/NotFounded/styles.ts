import styled from "styled-components";
import { Container } from "../../Container.styled";

export const NotFoundedWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 30px;

  background-image: url("/images/bg-404.png");
  background-size: cover;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  font-size: 32px;
  font-weight: 200;
  color: #4f4f4f;
  padding: 4px 70px;

  & .go-back {
    background-color: #ff4e79;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    width: 125px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    user-select: none;
  }

  & img {
    max-width: 40%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 4px 10px;

    & img {
      max-width: 100%;
    }
  }
`;

export const NotFoundedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  font-family: "Montserrat", sans-serif;
  color: #545454;

  padding: 8px 12px;

  @media (max-width: 640px) {
    align-items: center;
  }
`;
