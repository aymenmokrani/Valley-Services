/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

function SponsorLogo({ logo }) {
  const styles = css`
    background: url("${logo}") no-repeat center/contain;
  `;
  return <div css={styles}></div>;
}

export default SponsorLogo;
