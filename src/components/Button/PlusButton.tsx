import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Plus from "../../assets/Plus.svg"

interface ButtonProps {
    text: string;
}

export default function PlusButton({ text }: ButtonProps) {
    return (
        <Contents>
            <Icon src={Plus} />
            <Text>동아리 추가</Text>
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
background-color: ${colors.White};
border: 1px solid ${colors.Gray["gray 200"]};
border-radius: 12px;
`

const Text = styled.p`
  color: ${colors.gray2};
  font-family: 'Pretendard-Regular';
  font-size: 1em;
  line-height: 22%;
`

const Icon = styled.img``