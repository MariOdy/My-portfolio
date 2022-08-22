import styled from "styled-components";
import { Container } from "../../Container.styled";

export const ContactsWrapper = styled(Container)`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 12px 20px;
  margin-bottom: 40px;

  p {
  width: 50%;
  text-align: center;
}

button {
  margin-top: 20px;
  margin-bottom: 10px;
}
img {
  height: 475px;
}

@media (max-width: 640px) {
   p {
    width: 100%;
  }
`;
