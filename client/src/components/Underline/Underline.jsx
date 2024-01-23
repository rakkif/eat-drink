import React from "react";
import { styled } from "styled-components";

const Underline = () => {
  return <StyledUnderline />;
};

const StyledUnderline = styled.hr`
  height: 0.313rem;
  border: none;
  margin: ${({ theme }) => theme.spacing.s0};
  padding-left: ${({ theme }) => theme.spacing.s5};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Underline;
