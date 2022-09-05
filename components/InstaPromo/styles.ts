import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  gap: 24px 48px;
  margin: 64px 0;

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    margin: 32px 0;
  }
`;

export const Content = styled.div`
  flex: 1 1;
  max-width: 520px;
  width: 100%;
`;

export const Title = styled.h4`
  font-size: 32px;
  max-width: 380px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  max-width: 420px;
  margin-bottom: 24px;
`;

export const SliderColumn = styled.div`
  flex: 1 0;
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: fit-content;

  & .keen-slider {
    max-width: 100%;
    width: 500px;

    border-radius: 20px;
    overflow: hidden;
  }
`;

export const ProjectWrapper = styled.a`
  display: block;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    height: 0;
    padding-top: 100%;
    width: 100%;
  }
`;

export const Thumbnail = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Dots = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  justify-content: center;
`;

export const Dot = styled.button`
  border: none;

  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  padding: 5px;

  &[data-active="true"] {
    background: #000;
  }
`;

export const StyledArrow = styled.button`
  background: transparent;
  border: none;

  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: #fff;

  &[data-type="left"] {
    left: 5px;
  }

  &[data-type="right"] {
    right: 5px;
  }
`;
