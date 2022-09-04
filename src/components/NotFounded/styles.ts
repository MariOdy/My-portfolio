import styled, { keyframes } from "styled-components";
import Container from "components/Container";

const bounceX = keyframes` from { left: 0; } to { left: calc(100% - 112px); }`;
const bounceY = keyframes`from { top: 0; } to { top: calc(100% - 61.06px); }`;
const bounceXMobile = keyframes` from { left: 0; } to { left: calc(100% - 80px); }`;
const bounceYMobile = keyframes`from { top: 0; } to { top: calc(100% - 44.75px); }`;

export const NotFoundedWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 80vh;
  height: 80vh;
  position: relative;

  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  font-size: 32px;
  font-weight: 200;
  color: #4f4f4f;

  & .go-back {
    background-color: #cbdaeb;
    font-weight: 300;
    font-size: 20px;
    color: #000000;
    width: 125px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    user-select: none;
  }

  & img {
    max-width: 40%;
  }
  & .bouncer {
    display: block;
    color: #000000;
    position: absolute;
    transition: opacity 0.5s ease;
    z-index: 0;
    --x-time: 8.5s;
    --y-time: 10.1s;
    animation: ${bounceX} var(--x-time) linear 0s infinite alternate,
      ${bounceY} var(--y-time) linear 0s infinite alternate;
    width: 112px;
    @media (max-width: 640px) {
      --x-time: 4s;
      --y-time: 6.3s;
      animation: ${bounceXMobile} var(--x-time) linear 0s infinite alternate,
        ${bounceYMobile} var(--y-time) linear 0s infinite alternate;
      width: 80px;
    }
    & svg {
      height: auto;
      width: 100%;
      color: #ff4e79;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 4px 10px;

    & img {
      max-width: 100%;
    }
  }
`;

export const NotFoundedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: #545454;
  font-size: 20px;

  z-index: 1;

  @media (max-width: 640px) {
    align-items: center;
  }
`;
