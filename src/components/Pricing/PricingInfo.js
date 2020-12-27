/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";
import Title from "../GlobalComponent/Title";

function PricingInfo() {
  return (
    <div className="pricingInfo" css={styles}>
      <Title text="Our Princing" />
      <h2>Our Best Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        suscipit voluptates, id harum beatae unde nostrum. Possimus voluptatem
        repellendus laborum, molestias sunt facere quos veritatis expedita vel,
        qui, dignissimos provident?
      </p>
      <Button btnText="MONTHLY" />
      <Button btnText="YEARLY" />
    </div>
  );
}

const styles = css`
  h2 {
    color: #28395a;
    font-size: 45px;
    margin-top: 20px;
  }
  p {
    margin: 40px 0;
    line-height: 2.1;
  }
  button {
    font-weight: 600;
    padding: 14px 30px;
    &:first-of-type {
      border-radius: 50px 0 0 50px;
    }
    &:last-of-type {
      border-radius: 0 50px 50px 0;
      background: #fce0d8;
      color: #020230;
    }
  }
`;

export default PricingInfo;
