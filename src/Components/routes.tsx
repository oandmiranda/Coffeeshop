import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../Styles/themes";
import GlobalStyle from "../Styles/globalStyle";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRoutes;