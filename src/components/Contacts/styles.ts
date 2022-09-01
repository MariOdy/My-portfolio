import styled from "styled-components";

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  text-align: center;
  padding: 40px;

  background-color: #251a2d;
  color: #ffff;
  margin-top: 50px;

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
    max-width: 80%;
  }
`;
export const ContactsInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
