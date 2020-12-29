/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Title from "../GlobalComponent/Title";

function SupportInfo() {
  return (
    <div css={styles} className="supportInfo">
      <Title text="Get Support" />
      <h2>24/7 Expert Support</h2>
      <p>
        Our expert team is always on hand to help answer your questions, get you
        started, and grow your presence online. You can call, chat or email us
        any time!
      </p>
    </div>
  );
}

const styles = css`
  h2 {
    color: white;
    font-size: 35px;
    margin-top: 20px;
    line-height: 1.4;
  }
  p {
    margin: 40px 0;
    line-height: 2.1;
    color: white;
  }
`;
export default SupportInfo;
