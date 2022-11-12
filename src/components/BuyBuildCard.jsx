import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useFetchbuildCard from "../hooks/useFetchbuildCard";
import BuildList from "./BuildList";
import Buylist from "./Buylist";
import Card from "./Card";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const BuyBuildCard = () => {
  const { result, loading, error } = useFetchbuildCard();

  const [selectedID, setselectedID] = useState(null);

  const setId = useCallback((id) => {
    setselectedID(id);
  });
  return (
    <Wrapper padding={"1.7rem"} background={"#300E7B"} borderRadius={"35px"}>
      {loading && !result ? (
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Row className="flex-grow-1">
            {/* build */}
            <Col>
              <BuildList
                data={result?.build}
                setId={setId}
                selectedID={selectedID}
              />
            </Col>
            <Col className="flex-grow-1 ">
              <ItemDetail selectedID={selectedID} />
            </Col>
            <Col>
              <Buylist
                data={result?.buy}
                setId={setId}
                selectedID={selectedID}
              />
            </Col>
          </Row>
          <Quote>👋 Pssttt.... hover over the cards above</Quote>
        </>
      )}
    </Wrapper>
  );
};

export default BuyBuildCard;

const Wrapper = styled(Card)`
  margin-bottom: 2rem;
  // display: flex;
  @media (max-width: 960px) {
    margin-top: 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;

const Col = styled.div`
  // desktop
  width: 33%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Quote = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 600;
`;
