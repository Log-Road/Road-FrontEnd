import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns 아이디 찾기 페이지
 */

export default function FindID() {

    // 회원님의 아이디는 abcd1234 입니다. 
    //이거 인증번호를 입력해주세요 이 텍스트에 나타나도록 하던가 alert로 띄우기

    const navigate = useNavigate()

    const [email, setEmail] = useState<String>("")
    const [AuthenticationNumber, setAuthenticationNumber] = useState<String>("")

    return (
        <Container>
            <Contents>
                <Title>아이디 찾기</Title>

                <Wrap>
                    <InputWrap>
                        <Input placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <InnerText>인증번호 발송</InnerText>
                    </InputWrap >
                    <InputWrap>
                        <Input placeholder="인증번호" onChange={(e)=>{setAuthenticationNumber(e.target.value)}}/>
                        <InnerText>인증하기</InnerText>
                    </InputWrap >
                    <ErrorMessage>인증번호를 입력해주세요</ErrorMessage>
                </Wrap>

                <BtnWrap>
                    <LoginButton onClick={() => { navigate("/login") }}>로그인</LoginButton>
                    <HandlePassword onClick={() => {navigate("")}}>비밀번호 찾기</HandlePassword>
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
color: ${colors.gray1};

&:focus {
    border-color: ${colors.Main};
    outline: none;
  }
`

const LoginButton = styled.button`
width: 22.5em;
height: 3.25em;
border: none;
border-radius: 0.75em;
background-color: ${colors.Main};
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${colors.Blue["main 600"]};
}
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
font-size: 1em;
color: ${colors.Error};
`