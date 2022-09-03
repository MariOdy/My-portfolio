import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 64px 0;

  @media (max-width: 780px) {
    margin: 32px 0;
  }
`;

export const ThumbnailLink = styled.a`
  border-radius: 20px;
  display: block;
  max-width: 420px;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  border-radius: inherit;
  display: block;
  height: auto;
  width: 100%;
`;

export const Content = styled.div``;

export const Title = styled.h4``;
