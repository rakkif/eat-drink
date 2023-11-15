import React from "react";
import { styled } from "styled-components";
import RStar from "../RStar/RStar";

const StyledList = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2.5rem;
  font-weight: 500;
  color: #ef824f;
  padding-right: 25%;
  padding-left: 10%;

  &:hover {
    color: rgba(239, 130, 79, 0.5);
    hr {
      background-color: rgba(239, 130, 79, 0.5);
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
  margin: 0rem;
  &:hover {
    color: #ef824f;
    hr {
      background-color: #ef824f;
    }
  }
  hr {
    height: 0.313rem;
    border: none;
    margin: 0rem;
    padding-left: 1.25rem;
    background-color: #ef824f;
  }
`;

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
            <hr />
          </StyledListItem>
        </>
      ))}
    </StyledList>
  );
};

export default List;
