import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
	}

	body{
        font-family: ${({ theme }) => theme.fonts.body};
        overflow-x:hidden ;
        scroll-behavior: smooth;
        background-color: ${({ theme }) => theme.colors.bg};
        
    }

	button{
        cursor: pointer;
    }

	img{
        max-width: 100%;
    }

	h1, h2, h3 {
        font-weight: 400;
		font-family: ${({ theme }) => theme.fonts.heading};
    }

	p {
        font-weight: 300;
    }
`;
