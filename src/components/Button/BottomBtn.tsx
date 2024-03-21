import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface BottomBtnProps {
    text: string;
}

export default function BottomBtn({text} : BottomBtnProps) {
    return (
        <>
        <Btn>{text}</Btn>
        </>
    );
}

const Btn = styled.button`
    font-size: 16px;
    padding: 13px 75px;
    border-radius: 10px;
    border: none;
    background-color: ${colors.Gray["gray 200"]};
    color: ${colors.gray2};
    position : fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`