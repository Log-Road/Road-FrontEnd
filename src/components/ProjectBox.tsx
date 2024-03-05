import React from 'react'
import styled from "styled-components";
import ProjectImg from "../assets/ProjectImg.svg"
import Profile from "../assets/Profile.svg"
import { colors } from "../styles/colors"

/**
 * 
 * @returns 랭킹페이지 프로젝트 컴포넌트
 */

export default function ProjectBox() {
    return (
        <Container>
            <Img src={ProjectImg} alt="프로젝트 사진" />
            <Tag>금상</Tag>
            <Contents>
                <Counter>득표수 112</Counter>
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
}

const Container = styled.div`
position: relative;
width: 387px;
height: 437px;
border-radius: 16px;
background-color: #fff;
`

const Tag = styled.div`
position: absolute;
top: 0px;
left: 0px;
height: 0px;
width: 78px;
height: 48px;
text-align: center;
font-family: PretendardBold;
font-size: 24px;
line-height: 50px;
color: #fff;
background-color: ${colors.Main};
border-radius: 16px 0px 16px 0px;
z-index: 100;
`

const Contents = styled.div`
width: 387px;
padding: 20px 16px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px
`

const Info = styled.div`
width: 355px;
`

const UserInfo = styled.div`
width: 355px;
display: flex;
align-items: center;
gap: 4px;
`

const Counter = styled.p`
font-family: PretendardBold;
font-size: 14px;
line-height: 20px;
color: ${colors.Main};
`

const Title = styled.p`
font-family: PretendardBold;
font-size: 18px;
line-height: 140%;
`

const Article = styled.p`
height: 86px;
font-family: ABeeZeeRegular;
font-size: 16px;
line-height: 180%;
overflow: hidden;
`

const Name = styled.p`
font-family: PretendardRegular;
font-size: 16px;
line-height: 140%;
`

const Time = styled.p`
font-family: PretendardRegular;
font-size: 14px;
line-height: 20px;
color: ${colors.gray1};
`

const Img = styled.img`
width: 100%;
height: 200px;
border-radius: 16px 16px 0px 0px;
`

const ProfileIcon = styled.img``