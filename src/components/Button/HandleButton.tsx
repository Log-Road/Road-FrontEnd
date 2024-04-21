import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

/**
 * 어드민 페이지 버튼 (글보기, 수정, 시상, 삭제)
 */

interface ButtonProps {
    text: string;
}

export default function HandleButton({ text }: ButtonProps) {
    return (
        <>
            <Button text={text}>{text}</Button>
        </>
    )
}

const Button = styled.button<ButtonProps>`
height: 2.2em;
padding: 8px 12px;
display: flex;
justify-content: center;
align-items: center;
border: 0.1em solid ${(props) => props.text === "시상" ? colors.Main : props.text === "삭제" ? colors.Error : colors.gray1};
border-radius: 0.63em;
background-color: ${colors.White};
color: ${(props) => props.text === "시상" ? colors.Main : props.text === "삭제" ? colors.Error : colors.gray2};
font-family: 'Pretendard-Regular';
font-size: 0.85em;

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`