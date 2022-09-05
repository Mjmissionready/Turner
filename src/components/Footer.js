import * as React from "react";
import "./Footer.css";
import logo from "./TurnersCars.png";

export default function Footer() {
    return (
        <div className="container">
            <div className="footerRow">
                <div className="col">
                    <a href="https://www.turners.co.nz/?activetab=carsearch/">
                        <img src={logo} alt="Logo" style={{ height: "50px" }} />
                    </a>
                </div>

                {/* Column1 */}
                <div className="col">
                    <ui className="footerList">
                    <h2>ACCOUNT</h2>
                        <p>My Account</p>
                        <p>Membership</p>
                        <p>Payment options</p>
                        <p>Help centre</p>
                    </ui>
                </div>

                {/* Column2 */}
                <div className="col">
                    <ui className="footerList">
                    <h2>COMPANY</h2>
                        <p>About us </p>
                        <p>Why insure with us?</p>
                        <p>Careers</p>
                        <p>Contact us</p>
                        <p>Covid-19</p>
                        <p>FAQ</p>
                    </ui>
                </div>

                {/* Column3 */}
                <div className="col">
                    <ui className="footerList">
                    <h2>LEGAL</h2>
                        <p>Terms & Conditions</p>
                        <p>Report insurance fraud</p>
                        <p>Make a claim</p>
                        <p>Retrieve a quote</p>
                        <p>Cancel your policy</p>
                        <p>Policy documents</p>
                        <p>Make a complaint</p>
                        <p>Send us a compliment</p>
                    </ui>
                </div>

                {/* Column4 */}
                <div className="col">
                    <ui className="footerList">
                    <h2>SUPPORT</h2>
                        <p>Insurance calculator</p>
                        <p>Further assistance</p>
                        <p>Glossary</p>
                        <p>Blog</p>
                        <p>Send us compliments</p>
                    </ui>
                </div>
            </div>

            <hr />


            <p className="copyright">
                &copy;{new Date().getFullYear()} TURNERS CARS | All rights reserved |
                Terms Of Service | Privacy
            </p>

        </div>
    );
}