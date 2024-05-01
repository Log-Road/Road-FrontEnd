import React, { useState } from "react";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import ImgIcon from "../../assets/ImgIcon.svg";

/*PersonalProject 페이지의 이미지 렌더링 컴포넌트*/

interface PreviewProps {
   text: string;
   value?: string;
   onChange: (e: any) => void;
}

export default function ImgPreview({text, value, onChange}: PreviewProps) {
   const [imgPreview, setImgPreview] = useState<string>("");

   // 호출된 파일 이미지 url로 변경 -> preview로 미리보기 도와줌 
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = () => {
              if (typeof reader.result === 'string') {
                  setImgPreview(reader.result);
                  
                  onChange(reader.result);
              }
          };
          reader.readAsDataURL(file);
      }
  };
  
  

   return (
      <>
         <SubTitle>{text}</SubTitle>
         {imgPreview ? (
            <ImgPreviewLabel htmlFor="file">
               <PreviewImg src={imgPreview}/>
            </ImgPreviewLabel>
         ) : (
            <ImgFileLabel htmlFor="file">
               <IconImg src={ImgIcon}/>
            </ImgFileLabel>
         )}
         <ImgFile
            type="file"
            accept="image/*"
            id="file"
            onChange={(e) => handleFileChange(e)}
            value={value}
         />
      </>
   );
}

const SubTitle = styled.p`
   font-size: 16px;
        @media (max-width: 648px) {
        & {
        font-size: 17px;
        }
        }
`

const ImgPreviewLabel = styled.label`
   width: 60%; 
   /* overflow: hidden; */
   display: flex;
   @media (max-width: 648px) {
   & {
      width: 50%;
   }
   }
`

const ImgFileLabel = styled.label`
   width: 200px;
   background-color: ${colors.Gray["gray 50"]};
   width: 160px;
   height: 160px;
   margin-right: 17.4em;
   border-radius: 12px;
   display: flex;
   justify-content: center;
   align-items: center;
    
   @media (max-width: 648px) {
   & {
      width: 160px;
      height: 160px;
   }
   }
`

const PreviewImg = styled.img`
   width: 100%;
   border-radius: 12px;
`

const IconImg = styled.img``

const ImgFile = styled.input`
   display: none;
`