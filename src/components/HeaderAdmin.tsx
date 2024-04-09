import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors"
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

export default function HeaderAdmin() {

    const navigate = useNavigate();

    return (
        <Container>
            <Contents>

                <Logo onClick={() => { navigate("/") }}>ROAD</Logo>

                <ItemWrap>
                    <HandleText onClick={() => { navigate("/") }}>동아리 관리</HandleText>
                    <HandleText onClick={() => { navigate("/") }}>글 관리</HandleText>
                    <HandleText onClick={() => { navigate("/") }}>인원정보</HandleText>
                    <HandleText onClick={() => { navigate("/") }}>대회관리</HandleText>
                </ItemWrap>
            </Contents>

        </Container >
    )
}

const Container = styled.div`
width: 100vw;
height: 8.15vh;
display: flex;
justify-content: center;
align-items: center;
`

const Contents = styled.div`
width: 84.375vw;
display: flex;
justify-content: space-between;
`

const ItemWrap = styled.div`
display: flex;
align-items: center;
gap: 2em;
`

const Logo = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1.5em;
line-height: 140%;
`

const HandleText = styled.p`
font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  color: ${colors.gray2};
  
  &:hover {
    color: ${colors.Main}
  }
`