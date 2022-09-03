import styled from "styled-components";

export const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 12px;

  background-color: black;
  color: #a9a9a9;

  > div {
    display: flex;
  }

  @media (max-width: 640px) {
    text-align: center;
    p {
      width: 100%;
    }
  }
`;

export const ContactsImg = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 12px;
  img {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-size: 20px;
  font-weight: 300;

  gap: 20px;

  h2 {
    font-size: 40px;
  }
  h4 {
    font-size: 16px;
    font-weight: 200;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    align-items: center;
    h2 {
      font-size: 32px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  margin-bottom: 20px;

  a:hover {
    text-decoration-line: underline;
  }
`;

export const Email = styled.div`
  font-weight: 400;
  cursor: default;
`;

export const Socials = styled.div`
  display: flex;
  width: 50%;
  gap: 25px;

  margin-bottom: 20px;
  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;
