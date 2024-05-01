import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors"

export default function DeleteButton() {
    return (
        <>
            <Button>삭제</Button>
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
border: 0.1em solid ${colors.Red["error 500"]};
border-radius: 0.63em;
color: ${colors.Red["error 500"]};
font-family: 'Pretendard-Regular';
font-size: 0.85em;

&:hover {
    background-color: #fff8f8
}
`