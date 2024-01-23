import { React, useState } from "react";
import { styled } from "styled-components";
import Underline from "../Underline/Underline";
import HeartInput from "../HeartsInput/HeartsInput";
import FlexItem from "../FlexItem/FlexItem";
import Button from "../Button/Button";
import Input from "../Input/Input";
import axios from "axios";

const API_URL = "http://localhost:5000";

const AddItem = () => {
  const [isEdit, setIsEdit] = useState(false);

  const clickAddItem = async () => {
    setIsEdit(true);
  };

  const addToList = async () => {
    axios
      .get(`${API_URL}/drink`)
      .then((res) => {})
      .catch((err) => {
        console.log("eep");
      });
  };

  return (
    <StyledAddItem onClick={clickAddItem}>
      {isEdit ? (
        <>
          <Input type={"text"} placeholder={"Restaurant"}></Input>
          <HeartInput />
        </>
      ) : (
        "+ITEM"
      )}
      {/* {isEdit ? (
        <FlexItem>
          <Input type={"text"} placeholder={"Restaurant"} />
          <div>
            <span>Toggle Switch </span>
            <Input type={"checkbox"} />
            <label for="toggle"></label>
          </div>
          <Input type={"text"} placeholder={"Stars"} />
          <Button content={"+"} handleClick={addToList} />
        </FlexItem>
      ) : (
        "+Item"
      )} */}
      <Underline />
    </StyledAddItem>
  );
};
const StyledAddItem = styled.div`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    hr {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default AddItem;
