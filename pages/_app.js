import { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import HamburgerContextProvider from "../context/HamburgerContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:16px;
    line-height:1.4;
    @font-face {
      font-family: "Roboto";
      src: url("/fonts/Roboto-Regular.ttf");
    }
    font-family: "Roboto";
  }
`;
const theme = {
  colors: {
    primary: "#0070f3",
    green: "#2dde98",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HamburgerContextProvider>
          <Nav></Nav>
          <Component {...pageProps} />
          <Footer></Footer>
        </HamburgerContextProvider>
      </ThemeProvider>
    </>
  );
}
