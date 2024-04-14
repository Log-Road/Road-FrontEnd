import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Header from "../../components/HeaderAdmin";
import DownArrow from "../../assets/DownArrow.svg"

/**
 * 
 * @returns 학생 정보 수정 페이지
 */

interface StudentInfo {
    grade: number;
    classNumber: number;
    studentId: number;
}

export default function StudentInfoEdit() {

    const StudentData = [ //input에 돌릴 데이터 값
        { label: "학년", info : "grade", maxlength: 1 },
        { label: "반", info : "classNumber", maxlength: 1 },
        { label: "학번", info : "studentId", maxlength: 2 },
    ]

    const OptionData = [ //option에 돌릴 데이터 값
        { name: "재학생", value: "students" },
        { name: "졸업생", value: "graduate" },
        { name: "자퇴", value: "dropOut" },
        { name: "전학", value: "transfer" },
        { name: "휴학", value: "takeOff" }
    ]

    const [studentInfo, setStudentInfo] = useState<StudentInfo>({ //백엔드에서 가져온 값 초기 값으로 넣기!!
        grade: 2,
        classNumber: 2,
        studentId: 16 
    })

    const InputChange = (e: React.ChangeEvent<HTMLInputElement>): void => { //인풋창 값을 수정할 시 학생 정보가 변경됨
        const {name, value} = e.target
        setStudentInfo({
            ...studentInfo,
            [name] : Number(value)
        });
    }

    const ClickButton = () => {
        console.log(studentInfo)
    }

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
                                <Input 
                                    type="text" 
                                    name={value.info}
                                    value={studentInfo[value.info]} 
                                    maxLength={value.maxlength} 
                                    onChange={(e) => InputChange(e)}/>
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
                    <SuccessButton onClick={ClickButton}>완료</SuccessButton>
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
