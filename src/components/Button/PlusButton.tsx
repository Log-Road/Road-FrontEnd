import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Plus from "../../assets/Plus.svg"

/**
 * 어드민 페이지 추가 버튼 (대회 추가, 동아리 추가)
 */

interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function PlusButton({ text, onClick }: ButtonProps) {
    return (
        <Contents onClick={onClick}>
            <Icon src={Plus} />
            <Text>{text}</Text>
        </Contents>
    )
}

const Contents = styled.div`
width: 124px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
gap: 2px;
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 12px;

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`

const Text = styled.p`
  color: ${colors.gray2};
  font-family: 'Pretendard-Regular';
  font-size: 1em;
  line-height: 22%;
`

const Icon = styled.img``