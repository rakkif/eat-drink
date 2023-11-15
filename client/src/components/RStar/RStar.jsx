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
  padding-left: ${({ isWhole }) => (isWhole ? "15px" : "10px")};
  padding-top: 12px;
  color: white;
  opacity: 0.5;
  font-size: medium;
`;

const RStar = ({ stars }) => {
  const isWholeNum = (n) => {
    var result = n - Math.floor(n) !== 0;
    if (result) return false;
    else return true;
  };

  return (
    <StyledContainer>
      <Heart src={heart}></Heart>
      <StarValue isWhole={isWholeNum(stars)}>{stars}</StarValue>
    </StyledContainer>
  );
};

export default RStar;
