import { React } from "react";
import { styled } from "styled-components";

const FlexItem = () => {
  return <FlexItemStyled></FlexItemStyled>;
};
const FlexItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default FlexItem;
