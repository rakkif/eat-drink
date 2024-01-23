import React from "react";
import { styled } from "styled-components";
import RStar from "../RStar/RStar";
import Underline from "../Underline/Underline";
import AddItem from "../AddItem/AddItem";

const List = ({ itemsList }) => {
  return (
    <StyledList>
      {itemsList?.map((item) => (
        <>
          <StyledListItem>
            <FlexRow>
              {item.name}
              <div>
                <RStar stars={item.r_star} />
              </div>
            </FlexRow>
            <Underline />
          </StyledListItem>
        </>
      ))}
      <AddItem />
    </StyledList>
  );
};

const StyledList = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.spacing.pageMargin};
  margin-left: ${({ theme }) => theme.spacing.pageMargin};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    hr {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: none;
  }
  &:hover {
    div {
      display: block;
    }
  }
`;
const StyledListItem = styled.div`
  margin: ${({ theme }) => theme.spacing.s0};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    hr {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default List;
