import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/themes";
import GlobalStyle from "./Styles/globalStyle";
import Home from "./pages/Home";
import Category from "./pages/Category";
import OurHistory from "./pages/OurHistory";
import Item from "./pages/Item";
import Franchise from "./pages/Franchise";
import Stores from "./pages/Stores";

const AppRoutes = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/categoria/:categoryRoute" element={ <Category /> }></Route>
                    <Route path="/categoria/:categoryRoute/:itemRoute" element={ <Item /> }></Route>
                    <Route path="/ourhistory" element={ <OurHistory /> }></Route>
                    <Route path="/franchise" element={ <Franchise /> }></Route>
                    <Route path="/stores" element={ <Stores /> }></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRoutes;