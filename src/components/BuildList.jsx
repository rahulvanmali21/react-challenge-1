import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ItemCard from "./ItemCard";
import ListWrapper from "./ListWrapper";
import Subheading from "./SubHeading";

const BuildList = ({ data, setId, selectedID }) => {
  const handleClick = (id) => {
    // check if mobile
    console.log("here");
    console.log(id);
    setId(id);
  };

  const onMouseEnter = (id) => {
    setId(id);
  };
  const onMouseLeave = () => {
    setId(null);
  };

  return (
    <ListWrapper padding="12px" borderRadius={"12px"}>
      <Title>If You build</Title>
      <List>
        {data?.map?.((item, i) => (
          <ItemCard
            as="li"
            key={item.id}
            data={item}
            type="build"
            onClick={() => handleClick(item.id)}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={() => onMouseLeave(item.id)}
            active={selectedID === item.id}
            index={i}
          />
        ))}
      </List>
    </ListWrapper>
  );
};

export default BuildList;

export const Title = styled.h1`
  color: #000;
  margin-top: 0.65rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 26px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 960px) {
    flex-direction: row;
    flex-wrap: noWrap;
    overflow-x: auto;
    overflow-y: clip;
  }
`;

// background: linear-gradient(180deg, rgba(242, 245, 248, 0.96) 0%, rgba(242, 245, 248, 0.02) 100%);
// border-radius: 12px;
