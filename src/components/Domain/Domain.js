/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import DomainInfo from "./DomainInfo";
import DomainPrice from "./DomainPrice";
import DomainBg from "../../img/domainBg.webp";

function Domain() {
  return (
    <section css={styles} className="domain" id="domain">
      <Container>
        <DomainInfo />
        <div className="priceContainer">
          <DomainPrice color="#ff7474" domain=".com" price="3.99" />
          <DomainPrice color="#ffdd74" domain=".net" price="3.99" />
          <DomainPrice color="#74ff9f" domain=".org" price="3.99" />
          <DomainPrice color="#748bff" domain=".com" price="3.99" />
          <DomainPrice color="#f074ff" domain=".net" price="3.99" />
          <DomainPrice color="#3572ff" domain=".org" price="3.99" />
        </div>
      </Container>
    </section>
  );
}

const styles = css`
  background: url("${DomainBg}") no-repeat center/cover;
  width: 100%;
  background-color: black;
  padding: 140px 0;
  .priceContainer {
    width: 100%;
    margin-top: 70px;
    border: 1px solid #032a57;
    border-radius: 14px;
    display: flex;
    @media (max-width: 711px) {
      flex-wrap: wrap;
    }
    @media (min-width: 711px) and (max-width: 1200px) {
      flex-wrap: wrap;
    }
  }
`;
export default Domain;
