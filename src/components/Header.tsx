import React from 'react'
import styled from "styled-components";
import Profile from '../assets/Profile.svg';
import { colors } from "../styles/colors"

export default function Header() {
    return (
        <Container>
            <Contents>
                <Title>Road</Title>
                <Flex>
                    <Text>랭킹</Text>
                    <Text>글작성</Text>
                    <Img src={Profile} alt="Profile" />
                </Flex>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 88px;
display: flex;
justify-content: center;
background-color: ${colors.Gray["gray 50"]};
`

const Contents = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Flex = styled.div`
display: flex;
gap: 48px;
`

const Title = styled.p`
font-family: PretendardSemiBold;
font-size: 24px;
line-height: 130%;
`

const Text = styled.p`
font-family: PretendardMedium;
font-size: 20px;
color: ${colors.gray2};
`

const Img = styled.img``