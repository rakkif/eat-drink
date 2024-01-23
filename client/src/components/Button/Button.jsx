import { React } from "react";
import { styled } from "styled-components";

const Button = ({ content, handleClick }) => {
  return <StyledButton onClick={handleClick}>{content}</StyledButton>;
};
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid white;
  color: white;
  border-radius: 8%;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0.5rem;
`;

export default Button;
