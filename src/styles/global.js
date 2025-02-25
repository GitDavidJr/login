import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100 vw;
        background-color: #f0f2f5;
        font-family: Poppins;
    }

`

export default GlobalStyle