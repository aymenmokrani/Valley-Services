/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";
import Title from "../GlobalComponent/Title";

function AboutInfo() {
  return (
    <div className="aboutInfo" css={styles}>
      <Title text="Get to know more" />
      <h2>We're here for any information</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        incidunt, recusandae molestiae porro consequatur alias dolorum!
        Accusamus est aperiam tenetur nihil exercitationem dolor quam harum
        similique impedit iusto. Inventore, voluptas!
      </p>
      <Button btnText="GET STARTED" />
    </div>
  );
}

const styles = css`
  width: 100%;
  max-width: 500px;
  h2 {
    color: #28395a;
    font-size: 40px;
    margin-top: 20px;
  }
  p {
    margin: 40px 0;
    line-height: 2.1;
  }
  button {
    font-weight: 600;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    h2 {
      font-size: 34px;
    }
    p {
      width: 80%;
    }
  }
  @media (max-width: 900px) {
    button {
      margin-bottom: 80px;
    }
  }
`;
export default AboutInfo;
