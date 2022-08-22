import styled from "styled-components";
import { Container } from "../../Container.styled";

export const ProjectsWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  padding: 0;
  margin-top: 75px;
  margin-bottom: 75px;

  h2 {
    padding: 4px;
  }

  @media (max-width: 640px) {
    align-items: center;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  max-width: 100%;

  img {
    max-width: 100%;
    border-radius: 10px;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.02);
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 4px 16px;
    gap: 16px;
  }
`;
