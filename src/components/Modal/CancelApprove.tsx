import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

/**
 * 
 * @returns 게시글 승인 취소 모달 창
 */

export default function CancelApprove() {
    return (
        <Container>
            <Contents>
                <TextWrap>
                    <Text>게시글 업로드 승인을 거부하시겠습니까?</Text>
                    <TextGray>추후 재승인 할 수 있습니다</TextGray>
                </TextWrap>
                <Write placeholder="승인 취소 사유" />
                <ButtonWrap>
                    <CancleBtn>취소</CancleBtn>
                    <RefusalBtn>승인 취소</RefusalBtn>
                </ButtonWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 600px;
height: 321px;
border-radius: 1em;
padding: 1.25em;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`

const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.25em;
`

const Text = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1.13em;
line-height: 1.69em;
`

const TextGray = styled.p`
font-family: 'Pretendard-Regular';
font-size: 1em;
line-height: 1.25em;
color: ${colors.gray2};
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