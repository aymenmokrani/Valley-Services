/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import SupportCard from "./SupportCard";
import SupportInfo from "./SupportInfo";
import SupportBg from "../../img/domainBg.webp";

function Support() {
  return (
    <div className="support" id="support" css={styles}>
      <Container>
        <SupportInfo />
        <div className="supportCards">
          <SupportCard icon="phone" text="+1 234 4362" />
          <SupportCard icon="comments" text="valley@gmail.com" />
        </div>
      </Container>
    </div>
  );
}

const styles = css`
  background: url("${SupportBg}") no-repeat center/cover;
  padding: 140px 0;
  .container {
    display: flex;
    .supportInfo {
      width: 40%;
    }
    .supportCards {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 901px) and (max-width: 1288px) {
      .supportCards {
        flex-direction: column;
        align-items: center;
        .supportCard {
          width: 300px;
          margin: 5px 0;
        }
      }
    }
    @media (max-width: 900px) {
      flex-direction: column;
      .supportInfo {
        width: 100%;
      }
      .supportCards {
        flex-direction: column;
        .supportCard {
          width: 300px;
          margin: 5px 0;
        }
      }
    }
  }
`;
export default Support;
