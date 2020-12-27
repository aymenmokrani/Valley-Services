/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import AvatarPic from "../../img/avatar.jpeg";

function TestimonialInfo() {
  return (
    <div className="testimonialInfo" css={styles}>
      <div className="user">
        <div className="img"></div>
        <div className="title">
          <h3 className="name">John Doe</h3>
          <div className="job">CEO, Colorlib</div>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex
          est dignissimos reiciendis enim nam quaerat quis incidunt at! Quam
          porro neque cum illum, doloremque cumque nihil laudantium animi qui.
        </p>
      </div>
    </div>
  );
}

const styles = css`
  .user {
    display: flex;
    align-items: center;
    .img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background-color: teal;
      background: url("${AvatarPic}") no-repeat center/cover;
    }
    .title {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .name {
        font-size: 30px;
        font-weight: 500;
        color: #eb566c;
      }
      .job {
        color: #999;
        font-weight: 600;
        margin-top: 5px;
      }
    }
  }
  .content {
    max-width: 500px;
    margin-top: 30px;
    line-height: 1.7;
    font-weight: 500;
  }
`;
export default TestimonialInfo;
