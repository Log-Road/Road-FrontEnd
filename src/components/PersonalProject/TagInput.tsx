import React, { useState, useRef, useEffect} from "react";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import Add from "../../assets/Add.svg";
import Cancel from "../../assets/Cancel.svg"

/*PersonalProect 페이지의 태그생성input 컴포넌트*/

interface StackInputProps{
   text: string;
   placeholder: string;
   onChange: (tags: true | false) => void;
}

export default function TagInput({ text, placeholder, onChange }: StackInputProps) {
   const inputRef = useRef<HTMLInputElement>(null);
   const [items, setItems] = useState<string[]>([]);
   const [inputValue, setInputValue] = useState<string>("");

   useEffect(() => {
      // console.log("items:", items);
      onChange(items.length ? true : false);
    }, [items, onChange]); // items 상태가 업데이트될 때마다 실행됨

   // input 입력 후 Enter시 tag 추가
   const handleEnter = (event: { key: string; }) => {
      if (event.key === 'Enter') {
        const newItem = inputValue.trim(); // 입력된 값을 가져옴
        if (newItem !== '') {
          setItems([...items, newItem]); // 상태 업데이트
          setInputValue(''); // 입력 필드 초기화
        }
      }
    };

  // input 입력 후 Add 버튼 클릭 시 tag 추가
  const handleAddTag = () => {
      const trimmedValue = inputValue.trim();
      console.log("click");
      if (trimmedValue) {
          setItems([...items, inputValue]);
          setInputValue("");
      }
  };
  // input 입력 후 생성된 tag 삭제
  const handleRemoveTag = (index: number) => {
      const updatedTags = [...items];
      updatedTags.splice(index, 1);
      setItems(updatedTags);
  };



   return (
      <>
         <StackContainer>
            <Content>
               <SubTitle>{text}</SubTitle>
               <AddInputBox>
                  <AddBtn src={Add} onClick={handleAddTag}/>
                  <Input
                     placeholder={placeholder}
                     type="text"
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     ref={inputRef}
                     onKeyPress={handleEnter}
                  />
               </AddInputBox>
            </Content>
            <TagBox>
               {items.map((item, index) => (
                  <Tag key={index}>
                     {item}
                     <CancelBack onClick={() => handleRemoveTag(index)}>
                        <CancelBtn
                           src={Cancel}
                        />
                     </CancelBack>
                  </Tag>
               ))}
            </TagBox>
         </StackContainer>
      </>
   );
}

const StackContainer = styled.section``

const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 648px) {
   & {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
   }
   }
`

const SubTitle = styled.p`
   font-size: 16px;
        @media (max-width: 648px) {
        & {
        font-size: 17px;
        }
        }
`

const AddInputBox = styled.div`
   border-radius: 12px;
   background-color: ${colors.Gray["gray 50"]};
   padding: 8px 16px;
   display: flex;
   align-items: center;
   gap: 10px;
   width: 80%;
   @media (max-width: 648px) {
   & {
      width: 100%;
   }
   }
`

const AddBtn = styled.img`
   width: 26px;
   margin-bottom: 2px;
   border-radius: 50%;
   &:hover {
      background-color: ${colors.Gray["gray 100"]};
   }
`

const Input = styled.input`
   border: none;
   background-color: transparent;
   font-size: 16px;
   outline: none;
   width: 100%;
   color: ${colors.Black};
   &::placeholder {
      color: ${colors.gray2};
   }
`

const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20%;
    
    @media (max-width: 648px) {
    & {
        padding: 0;
    }
    }
`

const Tag = styled.div`
    display: inline-block;
    padding: 10px 36px 8px 15px;
    color: ${colors.Gray["gray 800"]};
    border-radius: 12px;
    border: 1px solid ${colors.Gray["gray 100"]};
    background-color: ${colors.White};
    font-size: 16px;
    position: relative;
    margin: 10px 10px 0 0;
    &:hover {
            border: 1px solid ${colors.Gray["gray 200"]};
            transition: border-color ease-in-out 0.15s;
    }
`

const CancelBtn = styled.img`
    width:11px;    
`

const CancelBack = styled.div`
    display: flex;
    padding: 9px;
    position: absolute;
    right: 4px;
    top: 4px;
`
