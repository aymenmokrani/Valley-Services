/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import Title from "../GlobalComponent/Title";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section css={styles} id="services">
      <Title text="Work on Valley" />
      <h2>Go To Work On A Valley .</h2>
      <Container>
        <ServiceCard title="Server Side" icon="fa fa-server" number="01" />
        <ServiceCard title="Configurations" icon="fa fa-cog" number="02" />
        <ServiceCard
          title="Cloud Based"
          icon="fa fa-cloud-upload"
          number="03"
        />
      </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  padding: 140px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(248, 245, 242);
  background: linear-gradient(
    180deg,
    rgba(248, 245, 242, 1) 50%,
    rgba(255, 255, 255, 1) 50%
  );
  .title {
    justify-content: center;
  }
  h2 {
    text-align: center;
    color: #28395a;
    font-size: 34px;
    margin-top: 20px;
  }
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 901px) and (max-width: 1288px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;
export default Services;
