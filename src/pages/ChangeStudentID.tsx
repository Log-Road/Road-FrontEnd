import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import Header from "../components/Header";

export default function ChangeStudentID() {

    const StudentInfo = ["학년", "학번", "번호"];

    return (
        <Container>
            <Header />
            <Container>
                <Contents>
                    <Title>학번 변경</Title>
                    <Wrap>
                        {StudentInfo.map((value, index) => (
                            <InputWrap key={index}>
                                <Input />
                                <InnerText>{value}</InnerText>
                            </InputWrap>
                        ))}
                        <ErrorMessage>오류메세지 입니다</ErrorMessage>
                    </Wrap>
                    <ButtonWrap>
                        <CancelButton>취소</CancelButton>
                        <CompleteButton>완료</CompleteButton>
                    </ButtonWrap>
                </Contents>
            </Container>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
gap: 120px;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 75px;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const InputWrap = styled.div`
position: relative;
`

const ButtonWrap = styled.div`
width: 22.5em;
display: flex;
justify-content: space-between;
`

const Title = styled.p`
font-family: "Pretendard-Bold";
font-size: 36px;
line-height: 120%;
`

const InnerText = styled.p`
position: absolute;
top: 1em;
right: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray2};

&:hover {
    color: ${colors.Main};
}
`

const ErrorMessage = styled.p`
font-family: 'Pretendard-Regular';
font-size: 0.8em;
color: ${colors.Error};
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

const CancelButton = styled.div`
width: 175px;
height: 52px;
border: 1px solid ${colors.gray1};
border-radius: 0.75em;
background-color: ${colors.White};
color: ${colors.gray2};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${colors.Gray["gray 100"]};
}
`

const CompleteButton = styled.div`
width: 175px;
height: 52px;
border: none;
border-radius: 0.75em;
background-color: ${colors.Main};
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${colors.Blue["main 600"]};
}
`