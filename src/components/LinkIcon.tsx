import styled from "styled-components";

export const LinkIcon = styled.a`
  --icon-size: 30px;

  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  transition: opacity 0.4s ease;
  padding: 4px;

  opacity: 0.6;

  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  & svg {
    height: var(--icon-size);
    width: var(--icon-size);
  }
`;
