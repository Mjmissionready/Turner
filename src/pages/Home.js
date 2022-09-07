import * as React from "react";
import styled from "styled-components";
import Desktop10 from "../components/desktop10";

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 100px;
 font-size: 40px;
`;

export default function Home() {
    return (
        <Container>
            <Desktop10 />
        </Container>
    );
}