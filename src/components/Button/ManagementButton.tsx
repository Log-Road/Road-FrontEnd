import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"

/**
 * 어드민 관리 페이지 버튼 (인원정보, 대회, 동아리 관리)
 */

interface ButtonProps {
    text: string;
    onClick: () => void
}

export default function ManagementButton({ text, onClick }: ButtonProps) {
    return (
        <>
            <Button text={text} onClick={onClick}>{text}</Button>
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