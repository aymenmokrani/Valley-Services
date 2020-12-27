/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import Container from "../GlobalComponent/Container";
import { useState } from "react";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav css={styles}>
      <Container>
        <NavLogo />
        <NavMenu toggleMenu={toggleMenu} />
        <i
          onClick={() => setToggleMenu(!toggleMenu)}
          id="burgerMenu"
          className={toggleMenu ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"}
        ></i>
      </Container>
    </nav>
  );
}

const styles = css`
  // background-color: red;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 26px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #burgerMenu {
      color: white;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 940px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
`;

export default Nav;
