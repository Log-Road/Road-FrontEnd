import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import Header from "../components/Header";


export default function ChangeEmail() {

    const [email, setEmail] = useState<String>("")
    const [error, setError] = useState<String>("")

    const checkedEmail = (e) => {
        const emailRegx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        const userEmail = e.target.value
        setEmail(userEmail)
        
        if (emailRegx.test(userEmail) === false) {
            setError("이메일 형식이 올바르지 않습니다")
        }
        else {
            setError("")
        }
    }

    return (
        <Container>
            <Header />
            <Container>
                <Contents>
                    <Title>이메일 변경</Title>
                    <Wrap>
                        <Input onChange={checkedEmail} />
                        <ErrorMessage>{error}</ErrorMessage>
                    </Wrap>
                    <Button>변경하기</Button>
                </Contents>
            </Container>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
gap: 120px;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 75px;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const Title = styled.p`
font-family: "Pretendard-Bold";
font-size: 36px;
line-height: 120%;
`

const ErrorMessage = styled.p`
font-family: 'Pretendard-Regular';
font-size: 0.8em;
color: ${colors.Error};
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

const Button = styled.div`
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