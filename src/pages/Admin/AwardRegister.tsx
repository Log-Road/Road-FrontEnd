import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";

export default function AwardRegister() {

    const AwardData = [
        "금상",
        "은상",
        "동상",
        "인기상",
        "인기상"
    ]

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
                            <ContestName>뭐라뭐라 대회</ContestName>
                            <ContestName>대회 이름</ContestName>
                        </ContestWrap>

                        {AwardData.map((value, index) => (
                            <ContentWrap>
                                <AwardWrap>
                                    <AwrardText>{index+1}</AwrardText>
                                    <AwrardText>{value}</AwrardText>
                                </AwardWrap>

                                <select name="state">
                                    <option value="students">ROAD</option>
                                    <option value="students">ROADROAD</option>
                                    <option value="students">집가는프로젝트</option>
                                </select>
                            </ContentWrap>
                        ))}

                        <ButtonWrap>
                            <Button>수정</Button>
                            <Button>등록</Button>
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
background-color: ${colors.Gray["gray 50"]};
`

const InnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`

const Wrap = styled.div`
width: 1029px;
height: 721px;
background-color: ${colors.White};
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Content = styled.div`
width: 741px;
height: 606px;
display: flex;
flex-direction: column;
gap: 20px;
`

const TopWrap = styled.div`
display: flex;
justify-content: space-between;
`

const ContestWrap = styled.div`
display: flex;
gap: 28px;
`

const ContentWrap = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 8px;
padding: 15px 30px;
`

const AwardWrap = styled.div`
display: flex;
gap: 20px;
`

const ButtonWrap = styled.div`
display: flex;
justify-content: flex-end;
gap: 10px;
`

const CompleteButton = styled.button`
width: 152px;
height: 43px;
color: ${colors.White};
background-color: ${colors.Main};
border: none;
border-radius: 20px;
font-family: 'Pretendard-Bold';
font-size: 18px;
line-height: 120%;
`

const Button = styled.button`
width: 176px;
height: 52px;
color: ${colors.gray2};
background-color: ${colors.Gray["gray 100"]};
border: none;
border-radius: 12px;
font-family: 'Pretendard-Bold';
font-size: 18px;

&:hover{
    background-color: ${colors.Gray["gray 200"]};
}
`

const Title = styled.p`
font-family: 'Pretendard-Bold';
font-size: 36px;
line-height: 120%;
`

const ContestName = styled.p`
font-family: 'Pretendard-Bold';
font-size: 24px;
line-height: 140%;
`

const AwrardText = styled.p`
font-family: 'Pretendard-Medium';
font-size: 18px;
line-height: 140%;
`