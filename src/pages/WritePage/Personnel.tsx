import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
// import { colors } from "../../styles/colors";
import BorderBtn from "../../components/Button/BorderBtn";

export default function Personnel() {
    return (
        <>
        <Container>
            <Header />
            <Content>
                <TextFlex>
                    <Title>프로젝트 인원</Title>
                    <SubText>프로젝트를 진행한 인원의 규모를 알려주세요</SubText>
                </TextFlex>
                <BtnFlex>
                    <BorderBtn text="개인"></BorderBtn>
                    <BorderBtn text="팀"></BorderBtn>
                    <BorderBtn text="동아리"></BorderBtn>
                </BtnFlex>
            </Content>
        </Container>
        </>

    );
}

const Container = styled.div`
     height: 100vh;
`
const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
`
const SubText = styled.p`
    font-size: 15px;
    justify-content: center;
`
const TextFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const BtnFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    gap: 50px;
    height: 75%;
    justify-content: center;
`

