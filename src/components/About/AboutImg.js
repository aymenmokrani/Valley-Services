/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import aboutSvg from "../../img/about.svg";

function AboutImg() {
  return <div css={styles} className="aboutImg"></div>;
}

const styles = css`
  background-color: red;
  background: url("${aboutSvg}") no-repeat right/contain;
  height: 450px;
  width: 100%;
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 350px;
  }
  @media (max-width: 900px) {
    background-position: center;
  }
`;
export default AboutImg;
