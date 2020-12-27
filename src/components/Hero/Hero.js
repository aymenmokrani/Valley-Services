/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";
import Nav from "./Nav";

function Hero() {
  return (
    <section css={styles} className="hero" id="home">
      <Nav />
      <Container>
        <HeroInfo />
        <HeroImg />
      </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  min-height: 100vh;
  background-color: #070e1a;
  display: flex;
  flex-direction: column;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 941px) and (max-width: 1245px) {
    .container {
      max-width: 870px;
    }
  }
`;

export default Hero;
