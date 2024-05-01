import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors"

interface ButtonProps {
  text: string;
  active: boolean;
}

export default function ActiveButton({text, active} : ButtonProps) {
  return <Button active={active}>{text}</Button>
}

const Button = styled.button.attrs((props: ButtonProps) => ({
  active: props.active,
}))
`
width: 25vw;
height: 3.25em;
border: none;
border-radius: 0.75em;
background-color: ${({ active }) => active ? colors.Main : colors.Gray["gray 200"]};
color: ${({ active }) => (active ? "#fff" : colors.gray2)};
display: flex;
justify-content: center;
align-items: center;
font-family: 'Pretendard-Medium';
font-size: 1em;

&:hover {
    background-color: ${({ active }) => active ? colors.Blue["main 600"] : colors.Gray["gray 300"]};
}
`