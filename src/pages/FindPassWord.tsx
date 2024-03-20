import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns 비밀번호 찾기 페이지
 */

interface LoginButtonProps {
    possibleLogin : boolean
}

export default function FindPassWord() {
    const navigate = useNavigate()

    const [userId, setUserId] = useState<string>("")
    const [possibleLogin, setPossibleLogin] = useState<boolean>(false)

    return (
        <Container>
            <Contents>
                <Title>비밀번호 찾기</Title>

                <Wrap>
                    <InputWrap>
                        <Input placeholder="아이디" onChange={(e) => { setUserId(e.target.value) }} />
                        <InnerText>확인</InnerText>
                    </InputWrap >
                    <ErrorMessage>아이디가 올바르지 않습니다</ErrorMessage>
                </Wrap>

                <BtnWrap>
                    <LoginButton possibleLogin={possibleLogin} onClick={() => { navigate("/login") }}>로그인</LoginButton>
                    <HandlePassword onClick={() => { navigate("/findId") }}>아이디 찾기</HandlePassword>
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
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4.68em;
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

const Input = styled.input`
width: 22.5em;
height: 3.38em;
border: 0.08em solid ${colors.Gray["gray 200"]};
border-radius: 0.75em;
padding: 0 1.5em;
font-family: 'Pretendard-Regular';
font-size: 1em;

&:focus {
    border-color: ${colors.Main};
    outline: none;
  }
`

const LoginButton = styled.button<LoginButtonProps>`
width: 22.5em;
height: 3.25em;
border: none;
border-radius: 0.75em;
background-color: ${({ possibleLogin }) => possibleLogin ? colors.Main : colors.Gray["gray 200"]};
color: ${({ possibleLogin }) => (possibleLogin ? "#fff" : colors.gray2)};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:active {
    background-color: ${({ possibleLogin }) => possibleLogin ? colors.Blue["main 600"] : colors.Gray["gray 300"]};
}

${({ possibleLogin }) => possibleLogin && `
    background-color: ${colors.Main};
    color: #fff;
  `}
`

const InnerText = styled.text`
position: absolute;
top: 1em;
right: 1.50em;
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray2};

&:hover {
    color: ${colors.Main};
}
`

const Title = styled.text`
font-family: 'Pretendard-Bold';
font-size: 2.25em;
line-height: 120%;
`

const HandlePassword = styled.text`
font-family: 'Pretendard-Regular';
font-size: 1em;
color: ${colors.gray1};

&:hover {
    color: ${colors.gray2};
}
`

const ErrorMessage = styled.text`
font-family: 'Pretendard-Regular';
font-size: 0.8em;
color: ${colors.Error};
`