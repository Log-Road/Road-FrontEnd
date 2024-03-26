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
width: 360px;
height: 160px;
border-radius: 16px;
padding: 20px;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
`

const Text = styled.div`
font-family: 'Pretendard-Regular';
font-size: 18px;
line-height: 27px;
`

const ButtonWrap = styled.div`
display: flex;
justify-content: flex-end;
gap: 12px;
`

const CancleBtn = styled.div`
color: ${colors.Gray["gray 600"]};
background-color: ${colors.Gray["gray 100"]};
border-radius: 10px;
padding: 8px 20px;
`

const ApproveBtn = styled.div`
color: ${colors.White};
background-color: ${colors.Main};
border-radius: 10px;
padding: 8px 20px;
`