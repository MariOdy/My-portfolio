import styled from "styled-components";
import { Container } from "../../Container.styled";

export const WorkTypeWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 50px;

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

  background-color: #cbdaeb;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

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
