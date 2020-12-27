/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import TestimonialSvg from "../../img/testimonial.svg";

function TestimonialImg() {
  return (
    <div className="testimonialImg" css={styles}>
      <img src={TestimonialSvg} alt="" />
    </div>
  );
}

const styles = css`
  display: flex;
  justify-content: center;
  img {
    max-width: 70%;
    position: relative;
  }
`;
export default TestimonialImg;
