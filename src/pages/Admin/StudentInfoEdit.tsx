import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Header from "../../components/Header";
import UpArrow from "../../assets/UpArrow.svg"
import DownArrow from "../../assets/DownArrow.svg"

/**
 * 
 * @returns 학생 정보 수정 페이지
 */

export default function StudentInfoEdit() {

    const StudentData = {
        grade: ["학년", 1],
        class: ["반", 1],
        StudentId: ["학번", 10]
    }

    return (
        <Container>
            <Header />
            <InnerContainer>

                <TitleWrap>
                    <Title>ROAD</Title>
                    <SubTitle>홍길동 정보 수정</SubTitle>
                </TitleWrap>

                <Wrap>
                    {
                        Object.keys(StudentData).map((key, index) => (
                            <InputWrap key={index}>
                                <Input/>
                                <Text>{StudentData[key][0]}</Text>
                            </InputWrap>
                        ))
                    }

                    <DropBoxWrap>
                        <Select name="state">
                            <Option value="students">재학생</Option>
                            <Option value="graduate">졸업생</Option>
                            <Option value="graduate">자퇴</Option>
                            <Option value="graduate">전학</Option>
                            <Option value="graduate">휴학</Option>
                        </Select>
                        <ArrowIcon src={DownArrow} />
                    </DropBoxWrap>
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
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 6.88em;
`

const InnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2.81em;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const InputWrap = styled.div`
position: relative;
width: 22.50em;
height: 3.38em;
`

const DropBoxWrap = styled.div`
position: relative;
width: 22.50em;
height: 3.38em;
`

const ButtonWrap = styled.div`
width: 22.50em;
height: 3.38em;
display: flex;
gap: 0.5em;
`

const BackButton = styled.div`
width: 11em;
height: 3.25em;
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
    color: ${colors.Gray["gray 800"]};
}
`

const SuccessButton = styled.div`
width: 11em;
height: 3.25em;
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
    color: ${colors.Gray["gray 50"]};
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

const Option = styled.option``

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

const Text = styled.p`
position: absolute;
top: 1em;
right: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 140%;
color: ${colors.gray2};
`

const ArrowIcon = styled.img`
position: absolute;
top: 1em;
right: 1.5em;
`
