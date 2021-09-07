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
        background-color: #141414;
        padding-left: 5em;
        overflow-x: hidden;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--greysky);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--greysky);
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }

        img {
            max-width: 100%;
            border-style: none;
        }

        a {
            text-decoration: none;
        }

        ul {
            text-decoration: none;
            list-style: none;
        }

        li {
            list-style: none;
        }
    }

    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
  @-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10%, 0);
        transform: translate3d(0, 10%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
  }
  @keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 10%, 0);
        transform: translate3d(0, 10%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
  }
`;
