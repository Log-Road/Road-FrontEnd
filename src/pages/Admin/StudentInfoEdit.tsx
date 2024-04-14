import React,{useState} from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Header from "../../components/HeaderAdmin";
import DownArrow from "../../assets/DownArrow.svg"

/**
 * 
 * @returns 학생 정보 수정 페이지
 */

export default function StudentInfoEdit() {

    const StudentData = [
        { label: "학년", info : 1, maxlength: 1 },
        { label: "반", info : 1, maxlength: 1 },
        { label: "학번", info : 1, maxlength: 2 },
    ]

    const OptionData = [
        { name: "재학생", value: "students" },
        { name: "졸업생", value: "graduate" },
        { name: "자퇴", value: "dropOut" },
        { name: "전학", value: "students" },
        { name: "휴학", value: "students" }
    ]

    return (
        <Container>
            <Header />
            <InnerContainer>

                <Wrap>
                    <Title>ROAD</Title>
                    <SubTitle>홍길동 정보 수정</SubTitle>
                </Wrap>

                <Wrap>
                    {
                        StudentData.map((value, index) => (
                            <InputWrap key={index}>
                                <Input maxLength={value.maxlength} />
                                <InnerText>{value.label}</InnerText>
                            </InputWrap>
                        ))
                    }

                    <InputWrap>
                        <Select>
                            {
                                OptionData.map((value, index) => (
                                    <option key={index} value={value.value}>{value.name}</option>
                                ))
                            }
                        </Select>

                        <Icon src={DownArrow} />
                    </InputWrap>
                </Wrap>

                <ButtonWrap>
                    <BackButton>뒤로가기</BackButton>
                    <SuccessButton>완료</SuccessButton>
                </ButtonWrap>

            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`

const InnerContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2.81em;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5em;
`

const InputWrap = styled.div`
position: relative;
width: 25vw;
height: 3.38em;
`

const ButtonWrap = styled.div`
display: flex;
justify-content: space-between;
width: 25vw;
height: 3.38em;
`

const BackButton = styled.div`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
border: 0.06em solid ${colors.gray1};
border-radius: 0.75em;
color: ${colors.gray2};
font-family: 'Pretendard-Bold';
font-size: 1.13em;
line-height: 140%;

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`

const SuccessButton = styled.div`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
border: 0.06em solid ${colors.Blue["main 600"]};
border-radius: 0.75em;
background-color: ${colors.Main};
color: ${colors.White};
font-family: 'Pretendard-Bold';
font-size: 1.13em;
line-height: 140%;

&:hover {
    background-color: ${colors.Blue["main 600"]};
}
`

const Input = styled.input`
width: 100%;
height: 100%;
border: 0.06em solid ${colors.Gray["gray 200"]};
border-radius: 0.75em;
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
outline: none;
padding: 1em 1.50em;

&:focus {
    background-color: #fdfdfd;
    border: 0.12em solid ${colors.Gray["gray 100"]};
}
`

const Select = styled.select`
width: 100%;
height: 100%;
padding: 1em 1.50em;
border: 0.06em solid ${colors.Gray["gray 200"]};
border-radius: 0.75em;
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
outline: none;
appearance: none;

&:focus {
    background-color: #fdfdfd;
    border: 0.12em solid ${colors.Gray["gray 100"]};
}
`

const Title = styled.p`
font-family: 'Pretendard-Bold';
font-size: 2.25em;
line-height: 120%;
`

const SubTitle = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
`

const InnerText = styled.p`
position: absolute;
top: 1em;
right: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
color: ${colors.gray2};
`

const Icon = styled.img`
position: absolute;
top: 1em;
right: 1.5em;
`
