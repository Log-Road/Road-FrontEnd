import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Header from "../../components/HeaderAdmin";
import UpArrow from "../../assets/UpArrow.svg"
import DownArrow from "../../assets/DownArrow.svg"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns 학생 정보 수정 페이지
 */

interface StudentInfo {
    grade: number;
    classNumber: number;
    studentId: number;
}

interface ButtonProps {
    possibleClick: boolean
}

export default function StudentInfoEdit() {

    const navigate = useNavigate()

    const StudentData = [ //input에 돌릴 데이터 값
        { label: "학년", info: "grade", maxlength: 1 },
        { label: "반", info: "classNumber", maxlength: 1 },
        { label: "학번", info: "studentId", maxlength: 2 },
    ]

    const OptionData = [ //option에 돌릴 데이터 값
        { name: "재학생", value: "students" },
        { name: "졸업생", value: "graduate" },
        { name: "자퇴", value: "dropOut" },
        { name: "전학", value: "transfer" },
        { name: "휴학", value: "takeOff" }
    ]

    //백엔드에서 가져온 값 초기 값으로 넣기!!
    const [studentInfo, setStudentInfo] = useState<StudentInfo>({ //학생 정보(학년, 반, 번호)
        grade: 2,
        classNumber: 2,
        studentId: 16
    })
    const [studentState, setStudentState] = useState<string>("재학생") //학생 상태 (재학, 졸업, 자퇴, 전학, 휴학)
    const [error, setError] = useState<boolean>(false) //에러발생 여부
    const [showOption, setShowOption] = useState<boolean>(false) //옵션창 보이는지 안보이는지 상태
    const [possibleClick, setPossibleClick] = useState<boolean>(false) //완료 버튼 활성화 및 비활성화 상태


    const InputChange = (e: React.ChangeEvent<HTMLInputElement>): void => { //인풋창 값을 수정할 시 학생 정보가 변경됨
        const { name, value } = e.target

        setStudentInfo({
            ...studentInfo,
            [name]: value === "" ? "" : value
        })
    }

    const SelectChange = (selectedOption: string) : void => { //option 값 변경시 상태 변경
        setStudentState(selectedOption)
        setShowOption(false)
    }

    useEffect(() => {
        const inputRegex = /^[0-9]*$/;
        let hasError = false;

        Object.values(studentInfo).forEach(function (value) { 
            setError(false)
            if (value === "") {
                hasError = true
                return console.log("빈공간")
            }
            else if (!inputRegex.test(value.toString())) {
                hasError = true
                return console.log("입력 형식이 올바르지 않습니다")
            }
        })
        setError(hasError)
        setPossibleClick(!hasError)
        
        console.log(studentInfo)
        console.log(hasError)

    }, [studentInfo])

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
                                    onChange={(e) => InputChange(e)} />
                                <InnerText>{value.label}</InnerText>
                            </InputWrap>
                        ))
                    }

                    <SelectBox>
                        <CheckedValue onClick={() => setShowOption(!showOption)}>{studentState}</CheckedValue>
                        {showOption &&
                            <SelectWrap>
                                {OptionData.map((value, index) => (
                                    <SelectContent
                                        key={index}
                                        onClick={() => SelectChange(value.name)}
                                    >{value.name}
                                    </SelectContent>
                                ))}
                            </SelectWrap>
                        }
                        {showOption ? <Icon src={UpArrow} /> : <Icon src={DownArrow} />}
                    </SelectBox>

                </Wrap>

                <ButtonWrap>
                    <BackButton onClick={(e) => navigate("/informationPersonnel")}>뒤로가기</BackButton>
                    <SuccessButton possibleClick={possibleClick}>완료</SuccessButton>
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

const SelectBox = styled.div`
width: 100%;
height: 56px;
position: relative;
display: flex;
flex-direction: column;
gap: 4px;
`

const CheckedValue = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 16px 24px;
background-color: ${colors.White};
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

const SelectWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
border-radius: 8px;
background-color: ${colors.White};
box-shadow: 1px 9px 18px 0px #060f2728;
`

const SelectContent = styled.div`
width: 100%;
height: 48px;
padding: 16px 24px;
display: flex;
align-items: center;
border-radius: 8px;
background-color: ${colors.White};

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`


const ButtonWrap = styled.div`
display: flex;
justify-content: space-between;
width: 25vw;
height: 3.38em;
`

const BackButton = styled.button`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
border: 0.06em solid ${colors.gray1};
border-radius: 0.75em;
color: ${colors.gray2};
background-color: ${colors.White};
font-family: 'Pretendard-Bold';
font-size: 1.13em;
line-height: 140%;

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`

const SuccessButton = styled.button<ButtonProps>`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.75em;
border: 0.06em solid ${({possibleClick}) => possibleClick? colors.Main : colors.Gray["gray 200"]};
background-color: ${({possibleClick}) => possibleClick? colors.Main : colors.Gray["gray 200"]};
color: ${({possibleClick}) => possibleClick? colors.White : colors.Gray["gray 600"]};
font-family: 'Pretendard-Bold';
font-size: 1.13em;
line-height: 140%;

&:hover {
    background-color: ${({possibleClick}) => possibleClick? colors.Blue["main 600"] : colors.Gray["gray 300"]};
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
