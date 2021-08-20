import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --white: #F9F7F7;
        --greysky: #DBE2EF;
        --darksky: #3F72AF;
        --blacksky: #112D4E;
        --fontXL: 2.5rem;
        --fontL: 1.5rem;
        --fontMD: 1.2rem;
        --fontSM: 1rem;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }

        img {
            max-width: 100%;
            border-style: none;
        }
    }
`;
