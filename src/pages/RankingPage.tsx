import React from 'react'
import styled from "styled-components";
import Header from "../components/Header"
import ProjectBox from "../components/ProjectBox"
import List from "../components/List"
import { colors } from "../styles/colors"

/**
 * 
 * @returns 랭킹페이지
 */

export default function RankingPage() {
    return (
        <Container>
            <Header />
            <InnerContainer>
                <Title>뭐시깽이 대회 랭킹</Title>
                <SelectWrap>
                    <Text>팀</Text>
                    <Text>동아리</Text>
                    <Text>개인</Text>
                </SelectWrap>
                <Contents>
                    <ProjectWrap>
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                    </ProjectWrap>
                    <Other>
                        <SubTitle>다른 대회 살펴보기</SubTitle>
                        <ListWrap>
                            <List/>
                            <List/>
                            <List/>
                        </ListWrap>
                    </Other>
                </Contents>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${colors.Gray["gray 50"]};
`

const InnerContainer = styled.div`
width: 85%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 20px auto;
`;

const SelectWrap = styled.div`
display: flex;
gap: 28px;
margin: 8px 0px 24px;
`

const Title = styled.p`
font-family: PretendardBold;
font-size: 24px;
line-height: 140%;
`

const Text = styled.p`
font-family: PretendardBold;
font-size: 24px;
line-height: 140%;
color: ${colors.gray2};
`

const Contents = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const ProjectWrap = styled.div`
width: 80%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 30px;
`

const Other = styled.div`
width: 387px;
height: 590px;
padding: 24px 28px;
border-radius: 16px;
background-color: #fff;
`

const SubTitle = styled.p`
font-family: PretendardBold;
font-size: 18px;
line-height: 140%;
margin-bottom: 28px;
`

const ListWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`