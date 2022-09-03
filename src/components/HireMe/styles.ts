import styled, { keyframes } from "styled-components";
import { SectionCard } from "components/SectionCard";

const bounceX = keyframes` from { left: 0; } to { left: calc(100% - 112px); }`;
const bounceY = keyframes`from { top: 0; } to { top: calc(100% - 61.06px); }`;
const bounceXMobile = keyframes` from { left: 0; } to { left: calc(100% - 80px); }`;
const bounceYMobile = keyframes`from { top: 0; } to { top: calc(100% - 44.75px); }`;

export const Banner = styled(SectionCard)`
  border-radius: 10px;
  background-color: rgba(6, 95, 82, 0.5);

  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 50px;
  text-align: center;
  transition: all 0.15s ease;
  outline: none;
  & > div {
    position: relative;
    z-index: 1;
  }

  img {
    max-width: 250px;
  }
  & h3 {
    font-size: 20px;
    font-weight: 600;
    color: #ffaf66;
    margin: 0.4em auto;
    transition: color 0.2s ease;
    width: fit-content;
    white-space: nowrap;
    backdrop-filter: blur(2px);
    border-radius: 1em;
  }
  & p {
    font-size: 14px;
    font-weight: 300;
    color: #000000;
    line-height: 1.45;
    max-width: 520px;
    width: fit-content;
    backdrop-filter: blur(2px);
    border-radius: 1em;
    @media (max-width: 1020px) {
      max-width: 420px;
    }
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
      color: #000000;
    }
  }
  &:hover,
  &:focus {
    & h3 {
      color: #000000;
    }
  }
`;
