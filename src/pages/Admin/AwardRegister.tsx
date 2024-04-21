import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";

export default function AwardRegister() {

    const AwardData = ["금상", "은상", "동상", "인기상", "인기상"]

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
                                    <AwardText>{index+1}</AwardText>
                                    <AwardText>{value}</AwardText>
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
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 8px;
padding: 0.94em 0 0.94em 1.88em;
`

const AwardWrap = styled.div`
display: flex;
gap: 1.5em;
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