import styled from "styled-components";
import { Base } from "./Base";

export const Container = styled(Base)`
  padding: 5vh 10vw;

  @media(max-width: 768px) {
    padding: 2vh 2vw;
  }
`;
