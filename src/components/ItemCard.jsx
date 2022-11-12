import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ListIcon from "./ListIcon";

const ItemCard = ({
  data,
  type = "build",
  onClick,
  onMouseEnter,
  onMouseLeave,
  index,
  active = false,
}) => {
  return (
    <Wrapper
      background={"#FFFFFF"}
      borderRadius="12px"
      onTouchStart={onClick}
      onMouseEnter={onMouseEnter}
      active={active}
      onMouseLeave={onMouseLeave}
      type={type}
    >
      <div>
        <Indicator type={type} />
        <ItemText>{data?.title}</ItemText>
      </div>
      <ListIcon type={type} index={index} />
    </Wrapper>
  );
};

export default ItemCard;

const Wrapper = styled(Card)`
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  min-height: 80px;
  cursor: pointer;
  padding: 12px 18px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;

  border: 1px solid
    ${(prop) =>
      prop.active
        ? prop.type === "build"
          ? "#2250F4"
          : "#FF8000"
        : "transparent"};
  background: ${(prop) =>
    prop.active ? (prop.type === "build" ? "#d3dcfd" : "#ffe6cc") : "#fff"};

  @media (max-width: 1200px) {
    min-width: 100%;
  }
  @media (max-width: 960px) {
    min-width: 300px;
  }

  @media (max-width: 800px) {
    min-width: 300px;
  }
  @media (max-width: 550px) {
    min-width: 100%;
  }
`;

const Indicator = styled.div`
  width: 50px;
  background: ${(prop) => (prop.type === "build" ? "#2250f4" : "#FF8000")};
  height: 8px;
  border-radius: 50px;
`;

const ItemText = styled.p`
  margin-top: 0.6rem;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #707074;
`;
