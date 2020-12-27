/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import ImgSvg from "../../img/money.svg";

function HeroImg() {
  return <div css={styles} className="heroImg"></div>;
}

const styles = css`
  width: 100%;
  max-width: 500px;
  height: 600px;
  background: url("${ImgSvg}") no-repeat center/contain;
  @media (max-width: 940px) {
    display: none;
  }
  @media (min-width: 941px) and (max-width: 1245px) {
    max-width: 400px;
    height: 400px;
  }
`;

export default HeroImg;
