import React from 'react'
import styled from "styled-components";
import ProjectImg from "../assets/ProjectImg.svg"
import Profile from "../assets/Profile.svg"
import { colors } from "../styles/colors"

/**
 * 
 * @returns 랭킹페이지 프로젝트 컴포넌트
 */

export default function MainProject() {
    return (
        <Container>
            <Img src={ProjectImg} alt="프로젝트 사진" />
            <Contents>
                <Counter>개인</Counter>
                <Info>
                    <Title>아슬라 별하 이플 함초롱하다 사과 우리는 </Title>
                    <Article>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠</Article>
                </Info>
                <UserInfo>
                    <ProfileIcon src={Profile} />
                    <Name>홍길동</Name>
                    <Time>약 1시간 전</Time>
                </UserInfo>
            </Contents>
        </Container>
    )
};

const Container = styled.div`
  width: 23.19em;
  height: auto; /* 높이를 자동으로 설정하여 내용에 맞게 조정합니다. */
  border-radius: 1em;
  background-color: #fff;
  overflow-x: hidden; /* 내용이 부족해도 스크롤이 생기지 않도록 설정합니다. */
`;

const Contents = styled.div`
  width: auto; /* 부모 요소에 맞게 너비를 조정합니다. */
  padding: 1.25em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;


const Info = styled.div`
width: 22.19em;
`

const UserInfo = styled.div`
width: 22.19em;
display: flex;
align-items: center;
gap: 0.25em;
`

const Counter = styled.p`
font-family: PretendardBold;
font-size: 0.88em;
line-height: 1.25em;
color: ${colors.Main};
`

const Title = styled.p`
font-family: PretendardBold;
font-size: 18px;
line-height: 140%;
`

const Article = styled.p`
height: 5.38em;
font-family: ABeeZeeRegular;
font-size: 1.13em;
line-height: 180%;
overflow: hidden;
`

const Name = styled.p`
font-family: PretendardRegular;
font-size: 1em;
line-height: 140%;
`

const Time = styled.p`
font-family: PretendardRegular;
font-size: 0.88em;
line-height: 1.25em;
color: ${colors.gray1};
`

const Img = styled.img`
width: 100%;
height: 12.50em;
border-radius: 1em 1em 0 0;
`

const ProfileIcon = styled.img``