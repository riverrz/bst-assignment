import styled from "styled-components";

interface Props {
  spaceLeft?: boolean;
  spaceRight?: boolean;
  spaceTop?: boolean;
  spaceBottom?: boolean;
}

export const Image = styled.img<Props>`
  margin-top: ${({ spaceTop }) => (spaceTop ? "10px" : "")};
  margin-bottom: ${({ spaceBottom }) => (spaceBottom ? "10px" : "")};
  margin-left: ${({ spaceLeft }) => (spaceLeft ? "10px" : "")};
  margin-right: ${({ spaceRight }) => (spaceRight ? "10px" : "")};
`;
