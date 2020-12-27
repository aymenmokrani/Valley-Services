/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import AboutImg from "./AboutImg";
import AboutInfo from "./AboutInfo";

function About() {
  return (
    <div css={styles} className="about" id="about">
      <Container>
        <AboutInfo />
        <AboutImg />
      </Container>
    </div>
  );
}

const styles = css`
  width: 100%;
  padding: 140px 0;
  .container {
    display: flex;
    align-items: center;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
export default About;
