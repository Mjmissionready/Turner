import * as React from "react";
import "./NavBar.css";
import logo from "./TurnersCars.png";
import styled from "styled-components";

const Container = styled.div`
    margin: 20px 50px;
`;

export default function NavBar() {
    return (
        <>
            <div className="topHeader">
                <li> 0800 887 637</li>
                <li> Find Us</li>
            </div>

            <Container>
                <div className="header">
                    <div className="headerLogo">
                        <a href="https://www.turners.co.nz/?activetab=carsearch/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>


                    <ul className="headerLogin">
                        <li style={{ marginRight: "20px" }}> MY ACCOUNT</li>
                        <li> REGISTER </li>
                    </ul>
                </div>
            </Container>

            <nav className="navbar">
                <ul className="nav__menu">
                    <li><a href="/">Find a Car</a></li>
                    <li><a href="/">Buy / Sell a Car </a></li>
                    <li><a href="/">Finance & Insurance</a></li>
                    <li><a href="/">Turners Subscription</a></li>
                </ul>
            </nav>
        </>
    );
}