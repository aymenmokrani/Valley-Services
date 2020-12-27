/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Title from "../GlobalComponent/Title";

function SponsorInfo() {
  return (
    <div className="sponsorInfo" css={styles}>
      <Title text="Out Sponsors" />
      <h2>To Become A Better You, We are with you every step of the way</h2>
    </div>
  );
}

const styles = css`
  h2 {
    color: #28395a;
    font-size: 40px;
    margin-top: 20px;
  }
`;

export default SponsorInfo;
