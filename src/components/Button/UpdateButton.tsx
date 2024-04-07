import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors"

export default function UpdateButton() {
    return (
        <>
            <Button>수정</Button>
        </>
    )
}

const Button = styled.button`
width: 4em;
height: 2.2em;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.White};
border: 0.1em solid ${colors.gray1};
border-radius: 0.63em;
color: ${colors.gray2};
font-family: 'Pretendard-Regular';
font-size: 0.85em;

&:hover {
    background-color: ${colors.Gray["gray 50"]};
}
`