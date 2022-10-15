import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./containers/HomeTemplate/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate/AdminTemplate";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import HomePage from "./containers/HomeTemplate/HomePage/HomePage";
import ProductPage from "./containers/HomeTemplate/ProductPage/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeTemplate />}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                </Route>
                <Route path="/admin" element={<AdminTemplate />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
