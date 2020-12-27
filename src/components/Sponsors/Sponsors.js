/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import SponsorInfo from "./SponsorInfo";
import SponsorLogo from "./SponsorLogo";

import Armani from "../../img/sponsors/armani.png";
import Lamborghini from "../../img/sponsors/lamborghini.png";
import Nasa from "../../img/sponsors/nasa.png";
import Rolls from "../../img/sponsors/rolls_royce.png";
import Rollex from "../../img/sponsors/rolex.png";
import Vuitton from "../../img/sponsors/louis_vuitton.png";
function Sponsors() {
  return (
    <div className="sponsors" id="sponsors" css={styles}>
      <Container>
        <SponsorInfo />
        <div className="logos">
          <SponsorLogo logo={Lamborghini} />
          <SponsorLogo logo={Armani} />
          <SponsorLogo logo={Nasa} />
          <SponsorLogo logo={Rolls} />
          <SponsorLogo logo={Rollex} />
          <SponsorLogo logo={Vuitton} />
        </div>
      </Container>
    </div>
  );
}

const styles = css`
  width: 100%;
  padding: 140px 0;
  .container {
    width: 100%;
    display: flex;

    .sponsorInfo {
      flex: 50;
    }

    .logos {
      display: flex;
      flex: 50;
      justify-content: flex-end;
      flex-wrap: wrap;
      & > * {
        width: 31%;
        margin: 1%;
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    .container {
      width: 90%;
      margin: auto;
    }
    .sponsorInfo {
      h2 {
        font-size: 35px;
      }
    }
    .logos {
      height: 200px;
      & > * {
        width: 48% !important;
      }
    }
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      .sponsorInfo {
        width: 80%;
        margin: auto;
      }
      .logos {
        margin-top: 40px;
        & > * {
          height: 100px;
        }
      }
    }
  }
`;
export default Sponsors;
