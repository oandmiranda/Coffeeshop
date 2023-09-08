import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../Styles/themes";
import GlobalStyle from "../Styles/globalStyle";
import Home from "../pages/Home";
import Category from "../pages/Category";

const AppRoutes = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/category/" element={ <Category /> }></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRoutes;