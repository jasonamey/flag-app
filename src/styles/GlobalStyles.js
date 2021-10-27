import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    background : ${({ theme }) => theme.appBackgroundColor};
    color : ${({ theme }) => theme.appColor};
    transition : all .3s;
}

ul { 
    padding : 0px;
}
a {
    color : ${({ theme }) => theme.appColor};
    text-decoration : none;
}

button { 
    color : ${({ theme }) => theme.appColor};
}
`;
