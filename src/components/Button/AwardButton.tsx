import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors"

export default function AwardButton() {
    return (
        <>
            <Button>시상</Button>
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
border: 0.1em solid ${colors.Main};
border-radius: 0.63em;
color: ${colors.Main};
font-family: 'Pretendard-Regular';
font-size: 0.85em;

&:hover {
    background-color: ${colors.Blue["main 50"]};
}
`