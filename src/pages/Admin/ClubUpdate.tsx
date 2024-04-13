import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";
import BorderBtn from "../../components/Button/BorderBtn";

/**
 * 
 * @returns 동아리 이름 수정 페이지
 */

interface AddProps {
    possibleAdd : boolean
}

export default function ClubUpdate() {

    const [clubName, setClubName] = useState<string>("")
    const [possibleAdd, setPossibleAdd] = useState<boolean>(false)

    const ChangeInput = (e) => {
        setClubName(e.target.value)
        setPossibleAdd(e.target.value !== "");
    }
    
    return (
        <Container>
            <Header />

            <Contents>
                <TopWrap>
                    <Title>ROAD</Title>
                    <SubTitle>동아리 수정</SubTitle>
                </TopWrap>

                <Input placeholder="동아리 이름" onChange={(e) => ChangeInput(e)}/>

                <Button possibleAdd={possibleAdd}>동아리 수정</Button>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`

const Contents = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5em;
`

const TopWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.44em;
`

const Input = styled.input`
width: 22.5em;
height: 3.38em;
border: 0.08em solid ${colors.Gray["gray 200"]};
border-radius: 0.75em;
padding: 0 1.5em;
font-family: 'Pretendard-Regular';
font-size: 1em;

&:focus {
    border-color: ${colors.Main};
    outline: none;
  }
`

const Button = styled.button<AddProps>`
width: 22.5em;
height: 3.25em;
border: none;
border-radius: 0.75em;
background-color: ${({ possibleAdd }) => possibleAdd ? colors.Main : colors.Gray["gray 200"]};
color: ${({ possibleAdd }) => (possibleAdd ? "#fff" : colors.gray2)};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${({ possibleAdd }) => possibleAdd ? colors.Blue["main 600"] : colors.Gray["gray 300"]};
}
`

const Title = styled.text`
font-family: 'Pretendard-Bold';
font-size: 2.25em;
line-height: 120%;
`

const SubTitle = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
`