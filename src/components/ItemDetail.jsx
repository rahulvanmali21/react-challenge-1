import React from "react";
import styled from "styled-components";
import useFetchDetails from "../hooks/useFetchDetails";
import DetailIcon from "../Static/DetailIcon";
import Card from "./Card";

const ItemDetail = ({ selectedID }) => {
  let { result, loading, error } = useFetchDetails(selectedID);
  return (
    <Wrapper>
      <div>
        <DetailIcon />
      </div>
      {result && (
        <DetailCard background={"#fff"} padding="0.95rem" borderRadius={"12px"}>
          <h2>{result?.detailTitle}</h2>
          <Divder />
          <p>{result?.detailBody}</p>
        </DetailCard>
      )}
    </Wrapper>
  );
};

export default ItemDetail;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;
const Divder = styled.div`
  width: 100%;
  background: #dddddd;
  border: 1px solid #dddddd;
  margin: 0.26rem 0rem;
`;

const DetailCard = styled(Card)`
  position: absolute;
  top: 70%;
  @media (max-width: 960px) {
    position: unset;
  }
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
  }
  p {
    font-weight: 600;
    font-size: 16px;
    color: #707074;
  }
  width: 75%;
`;
