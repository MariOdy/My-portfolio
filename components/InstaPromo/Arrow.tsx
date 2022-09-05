import React from "react";
import { StyledArrow } from "./styles";

interface ArrowProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: "left" | "right";
}

const Arrow: React.FC<ArrowProps> = ({
  disabled = false,
  type = "right",
  onClick,
  ...props
}) => (
  <StyledArrow
    onClick={onClick}
    disabled={disabled}
    className="arrow"
    data-type={type}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {type === "left" ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  </StyledArrow>
);

export default Arrow;
