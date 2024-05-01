import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface BottomBtnProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function BottomBtn({text, disabled, onClick} : BottomBtnProps) {
    
    return <Btn disabled={disabled} onClick={onClick}>{text}</Btn>
}

const Btn = styled.button`
    font-size: 16px;
    padding: 13px 75px;
    border-radius: 10px;
    border: none;
    background-color: ${colors.Gray["gray 200"]};
    background-color: ${props => props.disabled ? colors.Gray["gray 200"] : colors.Main};
    color: ${props => props.disabled ? colors.gray2 : colors.White};
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    position : fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.3s ease;
    &:hover {
        transform: ${props => props.disabled ? 'translate(-50%)' : 'translate(-50%, -5px)'};
    }

`