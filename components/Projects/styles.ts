import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  margin-top: 50px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e9;
  padding: 20px 0;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 32px;
`;

export const Divider = styled.hr``;

export const ProjectsGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 640px) {
    gap: 16px;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProjectCardWrapper = styled.a`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: block;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  & img {
    display: block;
    height: auto;
    min-height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }
`;
