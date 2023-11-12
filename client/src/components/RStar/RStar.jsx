import React from "react";
import heart from "../../assets/heart.png";
import { styled } from "styled-components";
// import { GlobalStyles } from "../styles/Global";

const Heart = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
`;

const StyledContainer = styled.div`
  position: relative;
`;

const StarValue = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  color: white;
  opacity: 0.7;
  font-size: large;
`;

const RStar = ({ stars }) => {
  return (
    <StyledContainer>
      <Heart src={heart}></Heart>
      <StarValue>{stars}</StarValue>
    </StyledContainer>
  );
};

export default RStar;
