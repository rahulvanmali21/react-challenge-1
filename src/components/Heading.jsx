import React from "react";
import styled from "styled-components";

const Heading = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Heading;

const Wrapper = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #000000;
  margin-top: 3rem;
  @media (max-width: 960px) {
    display: none;
  }
`;
