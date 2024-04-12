import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors"

interface BorderBtnProps {
  text: string;
}

export default function BorderBtn({text} : BorderBtnProps) {
  return (
    <>
      <Btn>{text}</Btn>
    </>
  )
}
const Btn = styled.button`
  width: 22.5em;
  height: 3.3em;
  font-weight: 700;
  color: ${colors.Main};
  border-radius: 12px;
  border: 0.5px solid ${colors.Main};
  background-color: transparent;
`