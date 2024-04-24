import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";
import UpArrow from "../../assets/UpArrow.svg"
import DownArrow from "../../assets/DownArrow.svg"

export default function AwardRegister() {

    const ContestProjectMap = ["2024 해커톤", "웹프로그래밍 수행", "대덕SW대회"] //대회 이름 (가져오기)
    const AwardData = ["금상", "은상", "동상", "인기상", "KOSA-MIDASIT 해커톤 우수상"] //시상할 상 목록 (가져오기)
    const OptionData = [ //option 값 (가져오기)
        { projectName: "ROAD" },
        { projectName: "프로젝트명입니다" },
        { projectName: "대마고프로젝트명명" },
        { projectName: "뭐시기" },
        { projectName: "프로젝트이름" },
    ]

    const [selectedContestIndex, setSelectedContestIndex] = useState<number | null>(0); //선택된 대회 인덱스 저장
    const [selectedProject, setSelectedProject] = useState<string[]>(Array(AwardData.length).fill("프로젝트 선택")); //선택된 프로젝트 저장
    const [openSelectIndex, setOpenSelectIndex] = useState<number | null>(null); //열린 selectBox 인덱스 저장 (아무것도 열린 option창이 없다면 null 저장)


    const SelectChange = (selectedOption: string, index: number): void => { //option 프로젝트 선택시 값 변경 
        const newSelected = [...selectedProject];
        newSelected[index] = selectedOption;
        setSelectedProject(newSelected);
        setOpenSelectIndex(null)
    };

    const toggleSelect = (index: number) => { //selectBox 열고 닫음
        setOpenSelectIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleContestClick = (index: number) => { //대회 선택
        setSelectedContestIndex(index)
        setOpenSelectIndex(null);
    }

    const clickRegister = () => { //완료버튼 클릭시 실행 (중복 & 누락된 값 있는지 체크)
        console.log(selectedProject)
        if (selectedProject.includes("프로젝트 선택")) {
            console.log("값 선택을 안함~~")
        }
        else {
            const duplicate = selectedProject.filter((value, index) => selectedProject.indexOf(value) !== index)
            if (duplicate.length > 0) console.log("중복 값이 있음~~")
            else console.log("완벽합니당")
        }
    }

    return (
        <Container>
            <Header />
            <InnerContainer>

                <Wrap>
                    <Content>
                        <TopWrap>
                            <Title>수상 등록하기</Title>
                            <CompleteButton>시상 완료</CompleteButton>
                        </TopWrap>

                        <ContestWrap>
                            {ContestProjectMap.map((value, index) => (
                                <ContestName
                                    key={index}
                                    onClick={() => handleContestClick(index)}
                                    style={{ color: selectedContestIndex === index ? "Black" : `${colors.gray1}` }}
                                >
                                    {value}
                                </ContestName>
                            ))}
                        </ContestWrap>

                        {AwardData.map((value, index) => (
                            <ContentWrap>
                                <AwardWrap>
                                    <AwardText>{index + 1}</AwardText>
                                    <AwardText>{value}</AwardText>
                                </AwardWrap>

                                <SelectBox>
                                    <CheckedValue onClick={() => toggleSelect(index)}>{selectedProject[index]}</CheckedValue>
                                    {openSelectIndex === index &&
                                        <SelectWrap>
                                            {OptionData.map((value) => (
                                                <SelectContent
                                                    onClick={() => SelectChange(value.projectName, index)}
                                                >{value.projectName}
                                                </SelectContent>
                                            ))}
                                        </SelectWrap>
                                    }
                                    {openSelectIndex === index ? <Icon src={UpArrow} /> : <Icon src={DownArrow} />}
                                </SelectBox>
                            </ContentWrap>
                        ))}

                        <ButtonWrap>
                            <Button>수정</Button>
                            <Button onClick={clickRegister}>등록</Button>
                        </ButtonWrap>
                    </Content>
                </Wrap>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`

const InnerContainer = styled.div`
display: flex;
justify-content: center;
`

const Wrap = styled.div`
@media (max-width: 1500px) and (min-width: 500px){
    width: 65%;
}
@media (max-width: 2100px) and (min-width: 1500px) {
    width: 50%;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4% 0;
border-radius: 20px;
box-shadow: 0 0 10px 10px ${colors.Gray["gray 50"]};
`

const Content = styled.div`
width: 80%;
display: flex;
flex-direction: column;
gap: 1.25em;
`

const TopWrap = styled.div`
display: flex;
justify-content: space-between;
`

const ContestWrap = styled.div`
display: flex;
gap: 1.25em;
`

const ContentWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 8px;
padding: 0.94em 0 0.94em 1.88em;
position: relative;
`

const AwardWrap = styled.div`
display: flex;
gap: 1.5em;
`

const SelectBox = styled.div`
width: 60%;
height: 100%;
position: absolute;
right: 0;
display: flex;
flex-direction: column;
gap: 4px;
`

const CheckedValue = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: right;
padding: 16px 70px 16px 24px;
background-color: ${colors.White};
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
z-index: 10;
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
justify-content: flex-end;
gap: 0.63em;
`

const CompleteButton = styled.button`
width: 22%;
height: 2.69em;
color: ${colors.White};
background-color: ${colors.Main};
border: none;
border-radius: 24px;
font-family: 'Pretendard-Bold';
font-size: 1em;
line-height: 120%;
`

const Button = styled.button`
width: 27%;
height: 2.5em;
color: ${colors.gray2};
background-color: ${colors.Gray["gray 100"]};
border: none;
border-radius: 12px;
font-family: 'Pretendard-Bold';
font-size: 1.15em;

&:hover{
    background-color: ${colors.Gray["gray 200"]};
}
`

const Title = styled.p`
font-family: 'Pretendard-Bold';
font-size: 2em;
line-height: 120%;
`

const ContestName = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1.35em;
line-height: 140%;
`

const AwardText = styled.p`
font-family: 'Pretendard-Medium';
font-size: 1em;
line-height: 140%;
`

const Icon = styled.img`
position: absolute;
top: 1em;
right: 1.5em;
`