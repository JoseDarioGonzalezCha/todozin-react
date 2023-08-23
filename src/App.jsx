import { ApiProvider } from "./Contexts/ApiContext";
import { ThemeProvider } from "styled-components";

import { Container } from "./Components/Container/Container";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ApiProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
