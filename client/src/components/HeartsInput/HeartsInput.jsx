import { React } from "react";
import { styled } from "styled-components";

const HeartInput = () => {
  return (
    <StyledHeartDiv>
      <input type="radio" id="star5" name="rate" value="5" />
      <label for="star5" title="text">
        5 stars
      </label>
      <input type="radio" id="star4" name="rate" value="4" />
      <label for="star4" title="text">
        4 stars
      </label>
      <input type="radio" id="star3" name="rate" value="3" />
      <label for="star3" title="text">
        3 stars
      </label>
      <input type="radio" id="star2" name="rate" value="2" />
      <label for="star2" title="text">
        2 stars
      </label>
      <input type="radio" id="star1" name="rate" value="1" />
      <label for="star1" title="text">
        1 star
      </label>
    </StyledHeartDiv>
  );
};

const StyledHeartDiv = styled.div`
  float: left;
  height: 46px;
  padding: 0 10px;

  &:not(:checked) > input {
    position: absolute;
    top: -9999px;
  }
  &:not(:checked) > label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
  }
  &:not(:checked) > label:before {
    content: "★ ";
  }
  & > input:checked ~ label {
    color: #ffc700;
  }
  &:not(:checked) > label:hover,
  &:not(:checked) > label:hover ~ label {
    color: #deb217;
  }
  & > input:checked + label:hover,
  & > input:checked + label:hover ~ label,
  & > input:checked ~ label:hover,
  & > input:checked ~ label:hover ~ label,
  & > label:hover ~ input:checked ~ label {
    color: #c59b08;
  }
`;

export default HeartInput;