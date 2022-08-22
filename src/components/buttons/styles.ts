import styled from "styled-components";

export const BaseButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  box-shadow: none;
  appearance: none;
  border-radius: 4px;
  user-select: none;
  width: fit-content;
  > span {
    pointer-events: none;
  }
`;

export const SolidButton = styled(BaseButton)`
  background-color: #ee8315;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  color: #ededed;
  border: 2px solid transparent;
  border-radius: 24px;
  padding: 12px 16px;

  &:hover,
  &:focus-visible {
    color: #ee8315;
    background-color: #ffffff;
    font-weight: 500;
    border: 2px solid #ee8315;
  }
`;
