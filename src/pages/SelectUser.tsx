import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import BorderBtn from "../components/BorderBtn";

export default function SelectUser () {
  return (
    <>
      <Container>
        <Title>ROAD</Title>
        <SubTitle>우리가 걸어온 길을 저장하는 곳</SubTitle>
        <SelectBox>
          <BorderBtn text="학생" />
          <BorderBtn text="교사" />
        </SelectBox>
      </Container> 
    </>
  )
} 

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Title = styled.p`
  font-size: 2.2em;
  font-weight: 700;
`

const SubTitle = styled.p`
  font-size: 1em;
`

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin:3.7em 0 0 0; 
`

const UserSelect = styled.button`
  width: 22.5em;
  height: 3.3em;
  font-weight: 700;
  color: ${colors.Main};
  border-radius: 12px;
  border: 0.5px solid ${colors.Main};
  background-color: transparent;
`