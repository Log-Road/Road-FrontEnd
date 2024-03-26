import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

export default function ApproveUpload() {
    return (
        <Container>
            <Contents>
                <Text>게시물 업로드 승인하시겠습니까?</Text>
                <ButtonWrap>
                    <CancleBtn>취소</CancleBtn>
                    <ApproveBtn>승인</ApproveBtn>
                </ButtonWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 20%;
height: 15%;
border-radius: 1em;
padding: 1.25em;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 3.13em;
`

const Text = styled.div`
font-family: 'Pretendard-Regular';
font-size: 1.13em;
line-height: 1.69em
`

const ButtonWrap = styled.div`
display: flex;
justify-content: flex-end;
gap: 0.75em;
`

const CancleBtn = styled.div`
color: ${colors.Gray["gray 600"]};
background-color: ${colors.Gray["gray 100"]};
border-radius: 0.63em;
padding: 0.5em 1.25em;
`

const ApproveBtn = styled.div`
color: ${colors.White};
background-color: ${colors.Main};
border-radius: 0.63em;
padding: 0.5em 1.25em;
`