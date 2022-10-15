import React from "react";
import { Link } from "react-router-dom";
import { Search, FavoriteBorder, PermIdentity } from "@mui/icons-material";
import logo from "../../../assets/logo.png";

function TopHeader() {
    return (
        <div className="topheader_container">
            <div className="topheader_logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="topheader_inputs"></div>
            <div className="topheader_user"></div>
        </div>
    );
}

export default TopHeader;
