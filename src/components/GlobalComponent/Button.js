/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ btnIcon, btnText }) {
  return (
    <button css={styles}>
      <i className={(btnIcon ? "icon " : "marginIcon") + btnIcon}></i>
      {btnText}
    </button>
  );
}

const styles = css`
  padding: 14px 24px;
  border: none;
  outline: none;
  background: #ff7c58;
  cursor: pointer;
  transition: background 300ms ease-in-out;
  color: #fff;
  border-radius: 50px;
  &:hover {
    background: #e03000;
  }
  .icon {
    margin-right: 10px;
  }
  .iconMargin {
    margin-right: 0;
  }
`;

export default Button;
