/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Title from "../GlobalComponent/Title";

function BlogInfo() {
  return (
    <div className="blogInfo" css={styles}>
      <Title text="Our Blog" />
      <h2>Our Latest News</h2>
    </div>
  );
}

const styles = css`
  h2 {
    color: #28395a;
    font-size: 35px;
    margin-top: 20px;
    line-height: 1.4;
  }
`;

export default BlogInfo;
