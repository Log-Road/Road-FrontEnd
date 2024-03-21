import React, { useState, useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import Header from "../../components/Header";
import BottomBtn from "../../components/Button/BottomBtn";
import Add from "../../assets/Add.svg";
import Cancel from "../../assets/Cancel.svg";

export default function PersonalProject() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        adjustTextareaHeight();
    }, []);

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(inputValue);
        if (e.key === "Enter" && inputValue.trim() !== "") {

            e.preventDefault();
            handleAddTag();
        }
    };

    // 태그 생성
    const handleAddTag = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            setTags([...tags, inputValue]);
            setInputValue("");
        }
    };
    // 태그 지우기
    const handleRemoveTag = (index: number) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    };

    return (
        <>
            <Header />
            <Body>
                <Container>
                    <Title>요약 소개글</Title>
                    <Content>
                        <Label>제목</Label>
                        <Input placeholder="프로젝트 제목" />
                    </Content>
                    <Content>
                        <Label>썸네일 이미지</Label>
                        <form>
                            <ImgFileLabel>
                                <ImgFile type="file"  multiple accept="image/*"></ImgFile>
                            </ImgFileLabel>
                        </form>
                        

                    </Content>
                    <Content>
                        <Label>이름</Label>
                        <Input placeholder="이름" />
                    </Content>
                    <StackBox>
                        <Content>
                            <Label>기술 스택</Label>
                            <AddInputBox>
                                <AddBtn src={Add} onClick={handleAddTag} />
                                <AddInput
                                    placeholder="기술 스택 추가"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleInputKeyDown}
                                />
                            </AddInputBox>
                        </Content>
                        <TagBox>
                            {tags.map((tag, index) => (
                                <Tag key={index}>
                                    {tag}
                                    <CancelBtn src={Cancel} onClick={() => handleRemoveTag(index)} />
                                </Tag>
                            ))}
                        </TagBox>
                    </StackBox>
                    <Content>
                        <Label>간단한 소개글</Label>
                        <SubText
                            placeholder="프로젝트 내용을 간단히 서술(150자)"
                            rows={1}
                            maxLength={150}
                            onInput={adjustTextareaHeight}
                            ref={textareaRef}
                        ></SubText>
                    </Content>
                </Container>
            </Body>
            <BottomBtn text="다음" />
        </>
    );
}

const Body = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    background-color: ${colors.White};
    width: 45%;
    padding: 26px 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 595px;
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
}
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 648px) {
    & {
       font-size: 22px;
    }
    }
`;

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
`;

const Label = styled.p`
    font-size: 16px;
    @media (max-width: 648px) {
    & {
       font-size: 17px;
    }
    }
`;

const Input = styled.input`
    border: none;
    border-radius: 12px;
    background-color: ${colors.Gray["gray 50"]};
    padding: 13px 16px;
    width: 80%;
    font-size: 16px;
    outline: none;
    &::placeholder {
        color: ${colors.gray2};
    }
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`;

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
`;

const AddInput = styled.input`
    border: none;
    background-color: transparent;
    font-size: 16px;
    outline: none;
    &::placeholder {
        color: ${colors.gray2};
    }
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`;

const AddBtn = styled.img`
    width: 26px;
    margin-bottom: 2px;
    border-radius: 50%;

    &:hover {
        background-color: ${colors.Gray["gray 100"]};
    }
`;

const SubText = styled.textarea`
    border-radius: 12px;
    background-color: ${colors.Gray["gray 50"]};
    padding: 13px 16px;
    width: 80%;
    border: none;
    font-size: 16px;
    resize: none;
    outline: none;
    overflow-y: hidden;
    &::placeholder {
        color: ${colors.gray2};
    }
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`;

const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20%;
    gap: 10px;
    @media (max-width: 648px) {
    & {
        padding: 0;
    }
    }
`;

const Tag = styled.div`
    display: inline-block;
    padding: 8px 33px 8px 15px;
    color: ${colors.Main};
    border-radius: 12px;
    border: 1px solid ${colors.Main};
    background-color: ${colors.White};
    font-size: 16px;
    align-items: center;
    position: relative;
`;

const StackBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const CancelBtn = styled.img`
    width: 17px;
    position: absolute;
    right: 10px;
`;

const ImgFile = styled.input`
    display: none;
`
const ImgFileLabel = styled.label`
    width: 80px;
    background-color: red;
`