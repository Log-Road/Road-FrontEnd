import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Header from "../components/Header";

export default function TeacherPage() {
    return (
        <>
    
            <Header/>
            <Container></Container>

        </>
    );
};

const Container = styled.div`
    background-color: red;
    height: 100em;
    
`