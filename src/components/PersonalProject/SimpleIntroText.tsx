import React, { useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import styled from "styled-components";


/*PersonalProject 페이지의 간단한 프로젝트 설명 컴포넌트*/

interface IntroProps {
   text: string;
   value?: string;
   onChange?: (value:string) => void;
}

export default function SimpleIntroText({text, value, onChange}: IntroProps) {
   const textareaRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      adjustTextareaHeight();
  }, []);

  const adjustTextareaHeight = () => {
      if (textareaRef.current) { 
          textareaRef.current.style.height = "auto";
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
        onChange(e.target.value);
    }
};

   return (
      <>
         <SubTitel>{text}</SubTitel>
         <IntroText
            placeholder="프로젝트 내용을 간단히 서술(150자)"
            rows={1}
            maxLength={150}
            onInput={adjustTextareaHeight}
            ref={textareaRef}
            onChange={handleChange}
            value={value}
         />
      </>
   );
}

const SubTitel = styled.p`
    font-size: 16px;
    margin-top: 11px;
    @media (max-width: 648px) { 
    & {
    font-size: 17px;
    }
    }
`

const IntroText = styled.textarea`
    border-radius: 13px;
    background-color: ${colors.Gray["gray 50"]};
    padding: 13px 16px;
    width: 80%;
    border: none;
    font-size: 16px;
    resize: none;
    outline: none;
    overflow-y: hidden;
    color: ${colors.Black};
    &::placeholder {
        color: ${colors.gray2};
    }
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`