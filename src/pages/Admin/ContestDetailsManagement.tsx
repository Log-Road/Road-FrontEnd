import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";
import ActiveButton from "../../components/Button/ActiveButton"

/**
 * 
 * @returns 대회 상세 정보 관리 페이지
 */

export default function ContestDetailsManagement() {

    return (
        <Container>
            <Header />

            <Contents>
                <TopWrap>
                    <Title>ROAD</Title>
                    <SubTitle>대회 상세 정보 관리</SubTitle>
                </TopWrap>

                <ContentWrap>
                    <Input placeholder="동아리 이름" />
                    <DateInputWrap>
                        <DateInput type="date" id="startDate" />
                        <DateInput type="date" id="lastDate" />
                    </DateInputWrap>
                </ContentWrap>

                <ActiveButton text="완료" active={false} />
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

const ContentWrap = styled.div`
width: 25vw;
display: flex;
flex-direction: column;
gap: 0.5em;
`

const DateInputWrap = styled.div`
display: flex;
justify-content: space-between;
`

const Input = styled.input`
width: 100%;
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

const DateInput = styled.input`
    width: 48%;
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