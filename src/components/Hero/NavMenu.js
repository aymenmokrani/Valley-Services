/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";
import NavLink from "./NavLink";

function NavMenu({ toggleMenu }) {
  return (
    <div css={styles} className={toggleMenu ? "opened" : ""}>
      {/* NAVLINKS */}
      <NavLink text="Home" link="#home" />
      <NavLink text="Services" link="#services" />
      <NavLink text="About" link="#about" />
      <NavLink text="Contact" link="#contact" />
      {/* Action BUTTON */}
      <Button btnText="Join The Valley" />
    </div>
  );
}

const styles = css`
  button {
    font-weight: 500;
  }
  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: -800px;
    top: 0;
    padding: 40px 60px;
    background: #1a1a50;
    min-height: 100vh;
    width: 100%;
    max-width: 340px;
    transition: left 800ms ease-in-out;
    &.opened {
      left: 0;
    }
    button {
      border-radius: 0;
      width: 100%;
      padding: 16px 24px;
    }
  }
`;

export default NavMenu;
