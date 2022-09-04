import styled from "styled-components";

export const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 24px 0;

  background-color: #07060a;
  color: #a9a9a9;

  > div {
    display: flex;
  }
`;

export const Title = styled.h4`
  color: white;
  font-size: 40px;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ContactsImg = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 12px;

  & img {
    max-width: 100%;
    object-fit: contain;
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

  @media (max-width: 640px) {
    align-items: center;
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
