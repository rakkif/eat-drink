import { React } from "react";
import { styled } from "styled-components";

const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder}></StyledInput>;
};
const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  background-color: #d4a373;
  font-size: 0.7em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  margin: 0.5rem;

  &:focus {
    outline: none;
  }
`;

export default Input;
