import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import BorderBtn from "../components/BorderBtn";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError(false);
    checkFilled(event.target.value, password);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(false);
    checkFilled(username, event.target.value);
  };

  const handleSubmit = () => {
    if (username === "") {
      setUsernameError(true);
      setErrorMessage("아이디를 확인해주세요.");
    }
    if (password === "") {
      setPasswordError(true);
      setErrorMessage("비밀번호를 확인해주세요.");
    }
  };

  const checkFilled = (username: string, password: string) => {
    if (username !== "" && password !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };


  return (
    <>
      <Container>
        <TitleBox>
          <Title>ROAD</Title>
          <SubTitle>우리가 걸어온 길을 저장하는 곳</SubTitle>
        </TitleBox> 
        <InputBox>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={username}
            onChange={handleUsernameChange}
            isError={usernameError}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={handlePasswordChange}
            isError={passwordError}
          />
          <ErrorMessage isError={usernameError || passwordError}>
            {errorMessage}
          </ErrorMessage>
          <NextBtn onClick={handleSubmit} isFilled={isFilled}>
            로그인
          </NextBtn>
          <FindBox>
            <Find>아이디 찾기</Find>
            <CenterLine></CenterLine>
            <Find>비밀번호 찾기</Find>
          </FindBox>
          <BorderBtn text="회원가입"/>
        </InputBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.p`
  font-size: 2.2em;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1em;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin: 3.7em 0 0 0;
`;

const Input = styled.input<{ isError: boolean }>`
  position: relative;
  width: 22.5em;
  height: 3.3em;
  padding: 1.5em;
  border: ${({ isError }) => (isError ? `2px solid red` : `0.5px solid ${colors.gray2}`)};
  border-radius: 12px;
  font-family: ${({ isError }) => (isError ? "Arial, sans-serif" : "inherit")};
  &::placeholder {
    color: ${({ isError }) => (isError ? "red" : colors.gray2)};
  }
  &:focus {
    border-color: ${({ isError }) => (isError ? "red" : colors.gray2)};
    outline: none;
  }
  transition: border 0.3s ease-in-out;
`;

const ErrorMessage = styled.p<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? "red" : "transparent")};
  font-size: 14px;
  margin-top: 4px;
  display: ${({ isError }) => (isError ? "block" : "none")};
`;

const NextBtn = styled.button<{ isFilled: boolean }>`
  width: 22.5em;
  height: 3.3em;
  color: ${colors.gray2};
  border: none;
  border-radius: 12px;
  color: ${({isFilled}) => (isFilled ? colors.White : colors.gray2)};
  background-color: ${({ isFilled }) => (isFilled ? colors.Main : colors.gray1)}; 
  margin: 4em 0 0 0;
`;

const FindBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const CenterLine = styled.div`
  border: 0.1px solid ${colors.gray1};
`;

const Find = styled.p`
  font-size: 12px;
  color: ${colors.gray1};
`;
