import { createGlobalStyle } from "styled-components";
import COLORS from "./Colors";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 1vw;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: black;
    }
    body{
        background-color: #${COLORS.DARKGREEN};
    }
    h1{
        font-size: 5em;
    }
    p{
        font-size: .7em;
    }
    a{
        font-size: 1.3em;
    }

`

export default GlobalStyle