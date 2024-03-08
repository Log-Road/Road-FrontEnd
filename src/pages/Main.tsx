import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import MainHeader from "../components/MainHeader";
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
        <MainHeader />
        <Contents>
          <ProjectText>올해 작품</ProjectText>
          <ArchivingText>아카이빙</ArchivingText>
        </Contents>
        <ProjectBox>
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
        </ProjectBox>
        <ProjectBox>
          <MainProject />
          <MainProject />
          <MainProject />
          <MainProject />
        </ProjectBox>
        <VoteBtn>투표하러 가기</VoteBtn>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${colors.Gray["gray 50"]};
  position: relative;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0 0 0 11.4vw;
`;

const ProjectText = styled.p`
  font-size: 1.3rem;
  border-bottom: 2px solid black;
  &:hover {
    cursor: pointer;
  }
`;

const ArchivingText = styled.p`
  font-size: 1.3rem;
  color: ${colors.gray2};
  &:hover {
    cursor: no-drop;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  margin: 2rem 0 0 11vw;
  gap: 1.5rem;
`;


const VoteBtn = styled.button`
  width: 11vw;
  height: 2.7vw;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  color: ${colors.White};
  background-color: ${colors.Main};
  position: fixed;
  bottom: 20px; /* 조정할 수 있는 값입니다. */
  left: 44%; /* 조정할 수 있는 값입니다. */

  &:hover {
    cursor: pointer;
  }
`;