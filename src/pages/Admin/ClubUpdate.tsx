import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";
import ActiveButton from "../../components/Button/ActiveButton";

/**
 * 
 * @returns 동아리 수정 페이지
 */

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

                <Input placeholder="동아리 이름" value={clubName} onChange={(e) => ChangeInput(e)}/>
                <ActiveButton text="동아리 수정" active={possibleAdd}/>
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
width: 25vw;
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