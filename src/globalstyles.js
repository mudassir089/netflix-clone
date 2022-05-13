import { createGlobalStyle } from "styled-components";


export const Globalstyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;

}

body{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat',sans-serif;
    background-image: linear-gradient(270deg, #0c0c0c 90%, #3e0000 100%);

}

html{
    font-size:62.5%;
    scroll-behavior: smooth;
}



`