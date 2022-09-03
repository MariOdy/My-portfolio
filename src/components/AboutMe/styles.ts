import styled from "styled-components";
import { SectionCard } from "components/SectionCard";

export const AboutMeWrapper = styled(SectionCard)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 64px 0;

  background-color: #cbdaeb;
  background-image: url("/images/wiggle.svg");
  background-size: 64px;

  @media (max-width: 780px) {
    flex-direction: column;
    margin: 32px 0;
    text-align: center;
  }
`;

export const AboutInfo = styled.div``;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 300;
  max-width: 520px;

  & span {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #7385ff;
    text-underline-offset: 4px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const MyPhotoWrapper = styled.div`
  border-radius: 50%;
  position: relative;
  width: fit-content;

  & img {
    border-radius: inherit;
    display: block;
    height: auto;
    max-width: 100%;
    width: 300px;
    position: relative;
    z-index: 1;

    transition: transform 0.5s ease;
  }

  &:before {
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    border-radius: inherit;
    content: "";
    filter: blur(24px);
    opacity: 0;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    transition: opacity 0.5s ease;
  }

  &:hover {
    &:before {
      opacity: 0.7;
    }
    & img {
      transform: translateY(-8px);
    }
  }
`;
