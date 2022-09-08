import * as React from "react";
import "./desktop10.css";
import Chat from "./Chat.png";
// import styled from "styled-components";

// const Container = styled.div`
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  margin: 100px;
//  font-size: 40px;
// `;

export default function Desktop10() {
    return (
        <>
            <div className="box">
                <div className="success">
                    Success!
                    <hr />
                </div>
                <div className="detail">
                    <p>
                        <span>Thank You!</span> We appreciate your perchase with Turners insurance and will do our best to make sure your dealings with us are as smooth and stress free as possible!
                        <br />
                        <br />
                        If requested you will recieve your policy documents in your email within the next 30 minutes, or by post over the next 3 - 5 working days.
                        <br />
                        <br />
                        If you would like anymore information on you policy feel free to browse our site, use the chatbot provided or give us a call at 0800 887 637.
                    </p>
                </div>
                <div className="amount">
                    $65.99
                </div>
                <div className="point">
                    Manage or view account
                </div>
            </div>

            <div className="rtnHome">
                <button className="rtnBtn">
                    Return to Home
                </button>
                <img src={Chat} alt="chatbot"/>
            </div>
        </>
    );
}