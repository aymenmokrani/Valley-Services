/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

function BlogCard({ blogImg }) {
  return (
    <div className="blogCard" css={styles}>
      <img src={blogImg} alt="" />
      <div className="blogDesc">
        <span>23 DEC, 2020</span>
        <h4>Addiction When Gambling Becomes</h4>
      </div>
    </div>
  );
}

const styles = css`
  position: relative;
  img {
    width: 100%;
  }
  .blogDesc {
    background-color: #fff9f9;
    width: 90%;
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    right: 0;
    bottom: -70px;
    position: absolute;
    h4 {
      font-size: 18px;
      margin-top: 10px;
      transition: 300ms ease-in-out;
    }
    &:hover {
      h4 {
        color: #f74c1d;
      }
    }
  }
`;

export default BlogCard;
