import styled from "styled-components";
import { Container } from "../../Container.styled";

export const CallToActionWrapper = styled(Container)`
  background-color: #ee81154d;
  border-radius: 4px;
  padding: 8px 26px;
  max-height: 120px;
  height: 120px;
  margin-top: 75px;
  margin-bottom: 75px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    max-height: 200px;
    height: fit-content;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

export const CallToActionInfo = styled.div`
  width: 40%;
  padding: 0 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CTLEmail = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: center;

  input {
    border: none;
    width: 65%;
    height: 45px;
    border-radius: 4px 0 0 4px;
    padding: 20px;
    outline: none;
  }

  img {
    width: 24px;
  }

  button {
    height: 45px;
    width: 65px;
    border: none;
    border-radius: 4px;
    margin: 0;
    border-radius: 0 4px 4px 0;
    background-color: #ffff;
  }
`;
