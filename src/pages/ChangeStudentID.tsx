import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import Header from "../components/Header";

interface InfoItem {
    info : string;
    maxlength: number
}

interface ChangeButtonProps {
    changeButtonActive : boolean
}

export default function ChangeStudentID() {

    const StudentInfo: InfoItem[] = [
        { info: "학년", maxlength : 1},
        { info: "반", maxlength: 1}, 
        { info: "번호", maxlength: 2}
    ];

    const [studentData, setStudentData] = useState({
        grade: "",
        class: "",
        studentId: ""
    })
    const [error, setError] = useState<string>("")
    const [changeButtonActive, setChangeButtonActive] = useState<boolean>(false)

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = e.target.value;
        setStudentData({ ...studentData, [StudentInfo[index].info]: newValue });
        
        if(newValue.length === StudentInfo[index].maxlength && index < StudentInfo.length -1) {
            const nextInput = document.getElementById(`input-${index+1}`) as HTMLInputElement;
            nextInput.focus();
        }
    }

    return (
        <Container>
            <Header />
            <Container>
                <Contents>
                    <Title>학번 변경</Title>
                    <Wrap>
                        {StudentInfo.map((value, index) => (
                            <InputWrap>
                                <Input
                                id={`input-${index}`}
                                onChange={(e) => changeInputValue(e, index)} 
                                maxLength={value.maxlength}
                                autoFocus={index === 0}
                                />
                                <InnerText>{value.info}</InnerText>
                            </InputWrap>
                        ))}
                        <ErrorMessage>{error}</ErrorMessage>
                    </Wrap>
                    <ButtonWrap>
                        <CancelButton>취소</CancelButton>
                        <CompleteButton changeButtonActive={changeButtonActive}>완료</CompleteButton>
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

const CompleteButton = styled.div<ChangeButtonProps>`
width: 175px;
height: 52px;
border: none;
border-radius: 0.75em;
background-color: ${({changeButtonActive}) => changeButtonActive? colors.Main : colors.Gray["gray 200"]};
color: ${({changeButtonActive}) => changeButtonActive? colors.White : colors.gray2};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color:${({changeButtonActive}) => changeButtonActive? colors.Main : colors.Gray["gray 300"]};
}
`