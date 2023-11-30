import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

const Background = styled.html`
`;

export default function Document() {
  return (
    <Background lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Background>
  );
}
