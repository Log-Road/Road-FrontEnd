import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";

/**
 * 
 * @returns 대회 추가 페이지
 */

interface NextProps {
    possibleNext : boolean
}

export default function AwardAdd() {

    const AwardData = [
        { name: "대상", count: 1 },
        { name: "은상", count: 1 },
        { name: "동상", count: 1 },
        { name: "인기상", count: 1 },
    ]
    const [possibleNext, setPossibleNext] = useState(false)

    return (
        <Container>
            <Header />
            <Contents>
                <TopWrap>
                    <Title>ROAD</Title>
                    <SubTitle>상 추가</SubTitle>
                </TopWrap>

                <Wrap>
                    {AwardData.map((value, index) => (
                        <InputWrap>
                            <Input/>
                            <InnerLeftText>{value.name}</InnerLeftText>
                            <InnerRightText>개</InnerRightText>
                        </InputWrap >
                    ))}
                    <AddAwardWrap>
                        <AddText>+ 상 추가하기</AddText>
                    </AddAwardWrap>
                </Wrap>

                <BtnWrap>
                    <NextButton possibleNext={possibleNext}>다음</NextButton>
                    <SkipText>수상없이 진행하기</SkipText>
                </BtnWrap>

            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`

const Contents = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3em;
`

const TopWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.44em;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const BtnWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.75em;
`

const InputWrap = styled.div`
position: relative;
`

const AddAwardWrap = styled.div`
width: 100%;

display: flex;
align-items: center;
gap: 5px;
padding: 16px 24px;
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 12px;
`

const Input = styled.input`
width: 22.5em;
height: 3.38em;
border: 0.08em solid ${colors.Gray["gray 200"]};
border-radius: 0.75em;
padding: 16px 60px;
font-family: 'Pretendard-Regular';
font-size: 1em;

&:focus {
    border-color: ${colors.Main};
    outline: none;
  }
`

const NextButton = styled.button<NextProps>`
width: 22.5em;
height: 3.25em;
border: none;
border-radius: 0.75em;
background-color: ${({ possibleNext }) => possibleNext ? colors.Main : colors.Gray["gray 200"]};
color: ${({ possibleNext }) => (possibleNext ? "#fff" : colors.gray2)};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${({ possibleNext }) => possibleNext ? colors.Blue["main 600"] : colors.Gray["gray 300"]};
}
`

const InnerLeftText = styled.p`
position: absolute;
top: 1.1em;
left: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray2};
`

const InnerRightText = styled.p`
position: absolute;
top: 1.1em;
right: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray2};
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

const AddText = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.Main};
`

const SkipText = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray1};

&:hover {
    color: ${colors.gray2};
}
`

const Icon = styled.img``