import React from "react";
import styled from "styled-components";
import Artwork1 from "../Static/imgs/artwork1.png";
import Artwork2 from "../Static/imgs/artwork2.png";
import Artwork3 from "../Static/imgs/artwork3.png";
import Artwork4 from "../Static/imgs/artwork4.png";
const Container = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Container;

const Wrapper = styled.div`
  background-image: url(${Artwork1}), url(${Artwork2}), url(${Artwork3}),
    url(${Artwork4});
  background-position: top left, top right, bottom left, bottom right;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  padding: 0 12rem;

  // laptop
  @media (max-width: 1200px) {
    padding: 0 6rem;
  }
  //tablet
  @media (max-width: 960px) {
    padding: 0 6rem;
  }
  //mobile
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;
