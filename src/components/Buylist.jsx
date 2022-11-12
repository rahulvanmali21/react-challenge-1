import React from "react";
import { List, Title } from "./BuildList";
import Card from "./Card";
import ItemCard from "./ItemCard";
import ListWrapper from "./ListWrapper";

const Buylist = ({ data, setId, selectedID }) => {
  const handleClick = (id) => {
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
      <Title>If You buy</Title>
      <List>
        {data?.map?.((item, i) => (
          <ItemCard
            as="li"
            key={item.id}
            data={item}
            type="buy"
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

export default Buylist;
