import styled from "styled-components";
import { Container } from "../../Container.styled";

export const WorkTypeWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding: 20px 40px;
  min-height: 550px;
  margin-top: 75px;

  background-image: url("./images/parallax.png");
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
export const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 350px;
  padding: 8px 12px;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(4px);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  &:hover {
    transform: scale(1.02);
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    svg {
      width: 30px;
      height: 30px;
      color: #3778b5;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 500;
    margin: 16px 0;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
`;
