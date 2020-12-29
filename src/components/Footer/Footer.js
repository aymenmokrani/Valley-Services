/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Container from "../GlobalComponent/Container";
import logo from "../../img/LOGO/White/LOGOPSD3000@0,25x.png";

function Footer() {
  return (
    <div className="footer" id="footer" css={styles}>
      <Container>
        <div className="footerLogo">
          <img src={logo} alt="" />
        </div>
        <div>
          <h4>All Packages</h4>
          <span>Package-1</span>
          <span>Package-2</span>
          <span>Package-3</span>
          <span>Custom</span>
        </div>
        <div>
          <h4>Quick Links</h4>
          <span>Contact Us</span>
          <span>About Us</span>
          <span>{`News & Articls`}</span>
          <span>Privacy Policy</span>
        </div>
        <div>
          <h4>All Packages</h4>
          <span>thevalley@gmail.com</span>
          <span>123 East 26th Street, Fifth Floor, New York, NY 10011</span>
        </div>
        <div className="footerBottom">
          <p>
            Copyright ©2020 All rights reserved | This template is made by
            <span> Aymen's Valley</span>
          </p>
        </div>
      </Container>
    </div>
  );
}

const styles = css`
  background: black;
  color: white;
  padding-top: 140px;
  .container {
    display: flex;
    flex-wrap: wrap;
    > div {
      margin-top: 20px;
      width: 25%;
      display: flex;
      flex-direction: column;
      > span {
        margin: 10px 0;
        color: #8ba4b1;
        cursor: pointer;
        transition: 300ms ease-in-out;
        &:hover {
          color: #eb566c;
          margin-left: 5px;
        }
      }
      > h4 {
        margin-bottom: 30px;
        font-size: 22px;
      }
    }
    .footerLogo {
      img {
        width: 70%;
        max-width: 300px;
      }
    }
    .footerBottom {
      width: 100%;
      padding: 20px 0;
      text-align: center;
      margin-top: 100px;
      border-top: 1px solid #1c2e4c;
      p {
        color: #8ba4b1;
        padding-top: 10px;
        span {
          color: #eb566c;
        }
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1000px) {
    .container {
      > div {
        width: 50%;
      }
    }
  }
  @media (max-width: 900px) {
    .container {
      > div {
        width: 100%;
      }
    }
  }
`;
export default Footer;
