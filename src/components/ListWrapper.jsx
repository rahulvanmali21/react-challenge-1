import styled from "styled-components";
import Card from "./Card";

const ListWrapper = styled(Card)`
  background: linear-gradient(
    180deg,
    rgba(242, 245, 248, 0.96) 0%,
    rgba(242, 245, 248, 0.02) 100%
  );
  @media (max-width: 960px) {
    background: linear-gradient(
      90deg,
      rgba(242, 245, 248, 0.96) 0%,
      rgba(242, 245, 248, 0.02) 100%
    );
  }
`;

export default ListWrapper;
