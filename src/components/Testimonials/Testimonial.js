/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import TestimonialImg from "./TestimonialImg";
import TestimonialInfo from "./TestimonialInfo";
import BackImg from "../../img/pricing/bottomBg.webp";

function Testimonial() {
  return (
    <div className="testimonials" id="testimonials" css={styles}>
      <Container>
        <TestimonialInfo />
        <TestimonialImg />
      </Container>
    </div>
  );
}

const styles = css`
  padding: 140px 0;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    .testimonialInfo {
    }
    .testimonialImg {
      flex: 1;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      .testimonialImg {
        margin-top: 100px;
      }
    }
  }
`;

export default Testimonial;
