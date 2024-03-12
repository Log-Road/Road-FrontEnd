import React from 'react'
import styled from "styled-components";
import Header from "../components/Header"
import Project from "../components/Project"
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
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                    </ProjectWrap>
                    <Other>
                        <SubTitle>다른 대회 살펴보기</SubTitle>
                        <ListWrap>
                            <List />
                            <List />
                            <List />
                        </ListWrap>
                    </Other>
                </Contents>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
max-height: 81.85em;
overflow-y: auto;
display: flex;
flex-direction: column;
background-color: ${colors.Gray["gray 50"]};
`

const InnerContainer = styled.div`
width: 85%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 1.25em auto;
`;

const SelectWrap = styled.div`
display: flex;
gap: 1.75em;
margin: 0.5em 0 1.5em;
`

const Title = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1.5em;
line-height: 140%;
`

const Text = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1.5em;
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
gap: 1.88em;
`

const Other = styled.div`
width: 24.19em;
height: 36.88em;
padding: 1.50em 1.75em;
border-radius: 1em;
background-color: #fff;
`

const SubTitle = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1.13em;
line-height: 140%;
margin-bottom: 1.75em;
`

const ListWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`