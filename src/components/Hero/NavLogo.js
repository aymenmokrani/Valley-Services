/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import LogoImg from "../../img/LOGO/Blue/logoL.png";

function NavLogo() {
  return <img src={LogoImg} css={styles} />;
}

const styles = css`
  width: 200px;
`;

export default NavLogo;
