import SectionCard from "components/SectionCard";
import styled from "styled-components";

export const ContactsWrapper = styled(SectionCard)`
  background-color: transparent;
  min-height: 80vh;

  border-radius: 0;
  max-width: 80%;
  margin: 0 auto 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 48px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    width: 50%;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 16px;
    margin-top: 20px;
  }
  > div .mail {
    background-color: #393939;
  }

  @media (max-width: 640px) {
    p {
      width: 110%;
      text-align: center;
    }
    > div {
      width: 100%;
    }
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0;
  max-height: 230px;
  height: 230px;
  border-radius: 12px;

  background-color: #4785ff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }

  svg {
    width: 100px;
    height: 100px;
    color: #ffffff;
  }
  @media (max-width: 640px) {
    height: 130px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
