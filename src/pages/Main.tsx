import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Header from "../components/Header";
import MainProject from "../components/MainProject";
import { useNavigate } from "react-router-dom";

/**
 * @returns 메인 
 */

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
    <Container>
      <Header />
      <div>
        <TextBox>
          <Text>올해 작품</Text>
          <Text>아카이빙</Text>
        </TextBox>
      <ProjectBox>
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
      
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
      
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
      
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
        </ProjectBox>
        <VoteBtn>투표하러 가기</VoteBtn>
      </div>
    </Container>
  </>
);
}

const Container = styled.div`
width: 100%;
height: auto;
background-color: ${colors.Gray["gray 50"]};
position: relative;
overflow-y: auto;
`;

const TextBox = styled.div`
display: flex;
justify-content: start;
margin: 0 0 0 150px;
gap: 28px;
`

const Text = styled.p`
font-family: "Pretendard-Medium";
font-size: 18px;
`

const ProjectBox = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 32px 0 44px 0;
padding: 0 140px;
gap: 32px 0;
`

const VoteBtn = styled.button`
width: 216px;
height: 52px;
font-family: "Pretendard-Medium";
font-size: 16px;
border: none;
border-radius: 12px;
color: white;
background-color: ${colors.Main};
position: fixed;
bottom: 20px;
left: 44%;
`