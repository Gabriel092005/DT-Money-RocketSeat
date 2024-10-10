import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export  function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <TransactionsProvider>
      <Transactions></Transactions>
      </TransactionsProvider>
      
      </ThemeProvider>
      
  )
}


