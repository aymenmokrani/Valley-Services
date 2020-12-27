/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";
import RocketImg from "../../img/pricing/rocketImg.webp";
import TopBg from "../../img/pricing/topBg.webp";
import BottomBg from "../../img/pricing/bottomBg.webp";

function PricingCard() {
  return (
    <div className="pricingCard" css={styles}>
      <div className="content">
        <div className="backimg">
          <img src={TopBg} alt="" />
          <img src={BottomBg} alt="" />
        </div>
        <div className="rocket">
          <img src={RocketImg} alt="" />
        </div>
        <h2>$ 05.00</h2>
        <div className="divider"></div>
        <div className="features">
          <p>Increase traffic 50%</p>
          <p>Social Media Marketing</p>
          <p>10 Free Optimization</p>
          <p>24/7 support</p>
        </div>
        <Button btnText="GET THE PLAN" />
      </div>
    </div>
  );
}

const styles = css`
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ff4f5b;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
    padding: 80px;
    min-height: 100%;
    text-align: center;
    color: white;
    .backimg {
      img {
        position: absolute;
        &:first-of-type {
          top: 0;
          right: 0;
        }
        &:last-of-type {
          bottom: 0;
          left: 0;
        }
      }
    }
    .rocket {
      width: 90px;
      height: 90px;
      border-radius: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      background: #fce0d8;
    }
    h2 {
      font-size: 30px;
      margin-top: 20px;
    }
    .divider {
      border: 1px solid white;
      width: 50%;
      margin: 30px auto;
    }
    p {
      line-height: 2.5;
      font-size: 15px;
    }

    button {
      align-self: center;
      font-weight: 600;
      color: #28395a;
      background-color: white;
      margin-top: 40px;
      position: relative;
      &:hover {
        cursor: pointer;
        background-color: #28395a;
        color: white;
      }
    }
  }
`;
export default PricingCard;
