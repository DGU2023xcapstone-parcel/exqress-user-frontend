import { Global, css } from "@emotion/react";

const style = css`
  html,
  body {
    max-width: 420px;
    height: 100vh;
    padding: 0;
    margin: 0px auto;

    -webkit-text-size-adjust: none;
  }
  .root {
    position: fixed;
    overflow: hidden;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
