import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 100px;
 font-size: 40px;
`;

export default function buySell() {
    return (
        <Container>
            <h3>Buy and Sell your Car</h3>
        </Container>
    );
}