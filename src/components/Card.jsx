import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { padding, background, borderRadius, children } = props;
  return (
    <StyledCard
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
`;
