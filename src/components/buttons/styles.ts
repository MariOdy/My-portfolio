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
  border-radius: 10px;
  user-select: none;
  width: 155px;
  height: 45px;
  > span {
    pointer-events: none;
  }
`;

export const SolidButton = styled(BaseButton)`
  background-color: #ff4e79;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

export const TransparentButton = styled(BaseButton)`
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  color: #ff4e79;
  border: 1px solid #ff4e79;
`;
