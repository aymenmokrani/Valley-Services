/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

function NavLink({ text, link }) {
  return (
    <a css={styles} href={link}>
      {text}
    </a>
  );
}

const styles = css`
  text-decoration: none;
  color: white;
  margin-right: 28px;
  transition: color 300ms ease-in-out;
  &: hover {
    color: #e68d75;
  }
  @media (max-width: 940px) {
    width: 100%;
    margin-bottom: 26px;
  }
`;
export default NavLink;
