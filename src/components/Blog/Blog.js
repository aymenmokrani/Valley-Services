/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import BlogInfo from "./BlogInfo";
import Container from "../GlobalComponent/Container";
import BlogCard from "./BlogCard";
import CardOneImg from "../../img/cardOne.webp";
import CardTwoImg from "../../img/cardTwo.webp";
import CardThreeImg from "../../img/cardThree.webp";
function Blog() {
  return (
    <div className="blog" id="blog" css={styles}>
      <BlogInfo />
      <Container>
        <BlogCard blogImg={CardOneImg} />
        <BlogCard blogImg={CardTwoImg} />
        <BlogCard blogImg={CardThreeImg} />
      </Container>
    </div>
  );
}

const styles = css`
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    .blogCard {
      margin-top: 80px;
    }
    @media (min-width: 901px) and (max-width: 1288px) {
      flex-wrap: wrap;
      .blogCard {
        width: 45%;
      }
    }
    @media (max-width: 900px) {
      flex-wrap: wrap;
      justify-content: center;
      .blogCard {
        width: 80%;
      }
    }
  }
`;

export default Blog;
