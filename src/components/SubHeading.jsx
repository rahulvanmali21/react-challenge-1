import React from "react";
import styled from "styled-components";

const Subheading = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Subheading;

const Wrapper = styled.h3`
  font-weight: 600;
  font-size: 26px;
  color: #86868b;
  width: 70%;
  @media (max-width: 960px) {
    display: none;
  }
`;
