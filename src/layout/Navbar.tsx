import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #1f2640;
  padding: 1.5rem 18rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  .brand-logo {
    width: 15rem;
  }
`;

interface Props {}

function Navbar(props: Props) {
  return (
    <Nav>
      <img
        src="/assets/svg/brand.svg"
        alt="brand logo"
        className="brand-logo"
      />
    </Nav>
  );
}

export default Navbar;
