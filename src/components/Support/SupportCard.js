/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { primaryColor } from "../../utils/SchemeColors";

function SupportCard({ icon, text }) {
  return (
    <div css={styles} className="supportCard">
      <div>
        <i className={` fa fa-${icon} fa-2x`}></i>
      </div>
      <span>{text}</span>
    </div>
  );
}

const styles = css`
  background-color: ${primaryColor};
  cursor: pointer;
  color: white;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 20px;
  span {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export default SupportCard;
