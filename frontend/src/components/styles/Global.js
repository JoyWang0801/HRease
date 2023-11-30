import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');
    :root {
        --hre-green: #6EB38E;
        --hre-dark-green: #6A987F;
        --hre-light-green: #C4E0D1;
        --black: #000000;
        --dark-grey: #414141;
        --white: #FFFFFF;
    }
    
    body, h1, h2, h3, h4, h5, h6, p, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`

export default GlobalStyles