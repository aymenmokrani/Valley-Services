/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";

function HeroInfo() {
  return (
    <div css={styles} className="heroInfo">
      <h2>Discover the Valley Difference.</h2>
      <p>
        This is my Valley ! The Most Important Valley You'll Ever Walk
        <br /> Always There. It's A Valley Adventure.
      </p>
      <Button btnText="Get Started" />
    </div>
  );
}

const styles = css`
  color: white;
  width: 100%;
  max-width: 550px;
  h2 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.3;
  }
  p {
    margin: 30px 0;
    line-height: 1.9;
  }
  button {
    text-transform: uppercase;
    font-weight: 600;
  }
  @media (max-width: 940px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (min-width: 941px) and (max-width: 1245px) {
    max-width: 450px;
    h2 {
      font-size: 44px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default HeroInfo;
