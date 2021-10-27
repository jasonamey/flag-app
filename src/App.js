import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useMode } from "./hooks/useMode";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import CountriesPage from "./pages/CountriesPage";
import SingleCountryPage from "./pages/SingleCountryPage";
import useHttp from "./hooks/useHttp";
import { lightTheme, darkTheme } from "./styles/Themes";

const URL = "https://restcountries.com/v2/all";

function App() {
  const [countries, setCountries] = useState([]);

  const { isLoading, fetchData: fetchCountries } = useHttp();
  const { theme, themeToggler, mountedComponet } = useMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    fetchCountries(URL, setCountries);
  }, [fetchCountries]);

  if (!mountedComponet) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header toggleTheme={themeToggler} theme={theme} />
        <Router>
          <Switch>
            <Route exact path="/">
              <CountriesPage loading={isLoading} countriesData={countries} />
            </Route>
            <Route exact path="/:id" children={<SingleCountryPage />} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
