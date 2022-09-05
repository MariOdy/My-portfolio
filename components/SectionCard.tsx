import styled from "styled-components";

const SectionCard = styled.section`
  background-color: #ccdaeb;
  border-radius: 16px;
  margin: 64px 0;
  padding: 32px 48px;
  position: relative;

  @media (max-width: 780px) {
    margin: 32px 0;
  }

  @media (max-width: 640px) {
    padding: 32px 24px;
  }

  @media (max-width: 420px) {
    padding: 32px 20px;
  }
`;

export default SectionCard;
