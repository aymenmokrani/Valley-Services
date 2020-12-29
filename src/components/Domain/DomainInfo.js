/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "../GlobalComponent/Button";
import Title from "../GlobalComponent/Title";

function DomainInfo() {
  return (
    <div className="domainInfo" css={styles}>
      <div className="domainDesc">
        <Title text="Get your domain" />
        <h2>Search domain you want</h2>
      </div>
      <div className="domainSearch">
        <input type="text" placeholder="search for you domain" />
        <div className="extension">
          <p>.com</p>
        </div>
        <Button btnText="SEARCH NOW" />
      </div>
    </div>
  );
}

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .domainDesc {
    width: 100%;
    max-width: 300px;
    h2 {
      color: white;
      font-size: 35px;
      margin-top: 20px;
      line-height: 1.4;
    }
  }
  .domainSearch {
    width: 100%;
    max-width: 740px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    input {
      width: 55%;
      height: 100%;
      padding: 0 20px;
      border: none;
      outline: none;
      border-radius: 50px 0 0 50px;
      color: #777;
      &::placeholder {
        color: #777;
      }
    }
    .extension {
      width: 20%;
      height: 100%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      border-radius: 0 50px 50px 0;
      height: 100%;
      flex: 1;
      padding: 0 14px;
    }
  }
  @media (min-width: 901px) and (max-width: 1288ox) {
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    .domainSearch {
      margin-top: 40px;
    }
  }
  @media (max-width: 600px) {
    .domainSearch {
      flex-direction: column;
      align-items: stretch;
      input {
        width: 100%;
        border-radius: 0;
        padding: 14px 26px;
      }
      .extension {
        display: none;
      }
      button {
        padding: 14px 26px;
        margin-top: 10px;
        border-radius: 0;
      }
    }
  }
`;

export default DomainInfo;
