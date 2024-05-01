import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface BorderBtnProps {
  text: string;
  onClick?: () => void;
}

export default function BorderBtn({text, onClick} : BorderBtnProps) {
  return (
    <>
      <Btn onClick={onClick}>{text}</Btn>
    </>
  )
}
const Btn = styled.button`
  width: 22.5em;
  height: 3.3em;
  font-weight: 700;
  color: ${colors.Main};
  border-radius: 12px;
  border: 1px solid ${colors.Main}; // 고침 1px
  background-color: transparent;

  &:hover { // 만듦
    background-color: ${colors.Main};
    color: ${colors.White};
  }
  
`