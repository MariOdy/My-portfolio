import styled from "styled-components";

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: #251a2d;
  color: rgba(255, 255, 255, 0.87);
  margin-top: 50px;

  > div {
    display: flex;
  }

  @media (max-width: 640px) {
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
`;
