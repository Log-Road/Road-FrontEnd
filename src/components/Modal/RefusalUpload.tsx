import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

/**
 * 
 * @returns 게시물 업로드 승인 거부 모달 창
 */

export default function RefusalUpload() {
    return (
        <Container>
            <Contents>
                <Text>게시글 업로드 승인을 거부하시겠습니까?</Text>
                <Write placeholder="거부 사유" />
                <ButtonWrap>
                    <CancleBtn>취소</CancleBtn>
                    <RefusalBtn>거부</RefusalBtn>
                </ButtonWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 600px;
height: 297px;
border-radius: 1em;
padding: 1.25em;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`

const Text = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1.13em;
line-height: 1.69em;
`

const Write = styled.textarea`
width: 560px;
height: 155px;
border-radius: 0.75em;
background-color: ${colors.Gray["gray 50"]};
border: none;
resize: none;
outline: none;
padding: 1em 1.25em;
font-family: 'Pretendard-Regular';
font-size: 1em;
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

&:hover {
    background-color: ${colors.Gray["gray 200"]};
}
`

const RefusalBtn = styled.div`
display: flex;
color: ${colors.White};
background-color: ${colors.Error};
border-radius: 0.63em;
padding: 0.5em 1.25em;

&:hover {
    background-color: ${colors.Red["error 600"]};
}
`