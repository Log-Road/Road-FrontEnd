import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

/**
 * 
 * @returns 게시물 업로드 승인 모달 창
 */

export default function ApproveUpload() {
    return (
        <Container>
            <Contents>
                <Text>게시물 업로드 승인하시겠습니까?</Text>
                <ButtonWrap>
                    <CancelBtn>취소</CancelBtn>
                    <ApproveBtn>승인</ApproveBtn>
                </ButtonWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 360px;
height: 160px;
border-radius: 1em;
padding: 1.25em;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 3.13em;
`

const Text = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1.13em;
line-height: 1.69em
`

const ButtonWrap = styled.div`
display: flex;
justify-content: flex-end;
gap: 0.75em;
`

const CancelBtn = styled.div`
color: ${colors.Gray["gray 600"]};
background-color: ${colors.Gray["gray 100"]};
border-radius: 0.63em;
padding: 0.5em 1.25em;

&:hover {
    background-color: ${colors.Gray["gray 200"]};
}
`

const ApproveBtn = styled.div`
color: ${colors.White};
background-color: ${colors.Main};
border-radius: 0.63em;
padding: 0.5em 1.25em;

&:hover {
    background-color: ${colors.Blue["main 600"]};
}
`