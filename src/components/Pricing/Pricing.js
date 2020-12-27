/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import PricingCard from "./PricingCard";
import PricingInfo from "./PricingInfo";

function Pricing() {
  return (
    <div css={styles} className="pricing" id="pricing">
      <Container>
        <PricingCard />
        <PricingInfo />
      </Container>
    </div>
  );
}

const styles = css`
  padding: 140px 0;
  .container {
    display: flex;
    align-items: center;
    > * {
      flex: 1;
    }
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      width: 80%;
      text-align: center;
      .pricingInfo {
        margin-bottom: 40px;
      }
    }
  }
`;

export default Pricing;
