import styled from "styled-components";

export const SectionCard = styled.section`
  background-color: #ccdaeb;
  border-radius: 16px;
  margin-top: 12px;
  padding: 32px 48px;
  position: relative;

  @media (max-width: 640px) {
    padding: 32px 24px;
  }

  @media (max-width: 420px) {
    padding: 32px 20px;
  }
`;
