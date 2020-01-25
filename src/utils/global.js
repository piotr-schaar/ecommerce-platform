import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap&subset=latin-ext');    
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: greyscale;
    }
    html,body {
        width:100%;
        height: 100%;
        overflow-x: hidden;
    }
    html {
     font-size: 62.5%;
     box-sizing: border-box;
    }
    @media ${({ theme }) => theme.mediaQueries.small} {
        font-size: 60%;
    }
    @media ${({ theme }) => theme.mediaQueries.smaller} {
        font-size: 55%;
    }
    body {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }
    a, input, textarea, button {
        outline: none;
        font-family: inherit;
    }
`;
