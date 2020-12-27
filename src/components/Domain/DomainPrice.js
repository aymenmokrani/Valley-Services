/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

function DomainPrice({ color, domain, price }) {
  return (
    <div css={styles} className="domainPrice">
      <p style={{ color: color }}>{domain}</p>
      <span>${price}/Year</span>
    </div>
  );
}

const styles = css`
  color: white;
  width: 100%;
  padding: 18px 26px;
  max-width: 200px;
  border-right: 1px solid #032a57;
  &:last-of-type {
    border-right: 0;
  }
  p {
    margin-bottom: 12px;
  }
  span {
    color: #636376;
    font-size: 15px;
  }
  @media (min-width: 711px) and (max-width: 1200px) {
    max-width: 33%;
    border-right: none;
  }
  @media (max-width: 711px) {
    max-width: 50%;
    border-right: none;
    &:nth-child(odd) {
      border-right: 1px solid #032a57;
    }
  }
`;

export default DomainPrice;
