import * as React from "react";
import "./NavBar.css";
import logo from "./TurnersCars.png";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaToggleOn } from "react-icons/fa";

const Container = styled.div`
    margin: 20px 50px;
`;

export default function NavBar() {
    return (
        <>
            <div className="topHeader">
                <li> <BsFillTelephoneFill size={"10px"} style={{ marginRight: "4px" }} /> 0800 887 637</li>
                <li> <ImLocation size={"11px"} style={{ marginRight: "3px" }} /> Find Us</li>
            </div>

            <Container>
                <div className="header">
                    <div className="headerLogo">
                        <a href="https://www.turners.co.nz/?activetab=carsearch/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>


                    <div className="headerLogin">
                        <form className="searchBox" action="https://www.google.com/search" method="get">
                            <input id="search" type="text" placeholder="SEARCH" />
                            <button type="search" value="search">
                                <BiSearchAlt />
                            </button>
                        </form>

                        <li style={{ marginRight: "20px" }}> MY ACCOUNT</li>
                        <li> REGISTER </li>
                    </div>
                </div>
            </Container>

            <nav className="navbar">
                <div className="nav__menu">
                    <li><a href="/">Find a Car</a></li>
                    <li><a href="/">Buy / Sell a Car </a></li>
                    <li><a href="/">Finance & Insurance</a></li>
                    <li><a href="/">Turners Subscription</a></li>
                </div>
            </nav>

            <a href="/" className="nav__toggleBtn">
                <FaToggleOn />
            </a>
        </>
    );
}