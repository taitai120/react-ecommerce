import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function HomeTemplate() {
    return (
        <div className="hometemplate_container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <footer className="footer">footer</footer>
        </div>
    );
}

export default HomeTemplate;
