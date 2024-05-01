import React, { useState, useEffect, useRef } from 'react';
import { colors } from '../../styles/colors';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Header from '../../components/Header';
import BottomBtn from '../../components/Button/BottomBtn';
import { useLocation } from "react-router-dom";

const formats: string[] = [
  'image',
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
  'code-block',
];

const MarkDown = () => {
  const location = useLocation();
  const editorRef = useRef<ReactQuill>(null);
  const [values, setValues] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [demoVideo, setDemoVideo] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'blockquote', 'code-block'],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
    ],
  };

  useEffect(() => {
    // 조건이 충족되면 버튼 활성화
    const isDisabled = (values && demoVideo);
    console.log(values);
    setBtnDisabled(!isDisabled);
  }, [values, demoVideo])


  return (
    <>
      <Header />
      <Box>
        <Container>
          <div>
            <Title>본문_작성칸</Title>
            <QuillWrapper
              ref={editorRef}
              value={values}
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="이미지를 첨부하거나 내용을 서술해주세요."
              onChange={setValues}
            />
          </div>

        </Container>
        <LinkBox>
          <LinkTitle>시연 영상</LinkTitle>
          <LinkInput
            placeholder='시연 영상 링크'
            onChange={(e) => setDemoVideo(e.target.value)}
          />
        </LinkBox>
      </Box>
      <BottomBtn text='승인 요청' disabled={btnDisabled} />

    </>
  );
};

export default MarkDown;


const Container = styled.div`
  background-color: ${colors.White};
  padding: 26px 24px;
  border-radius: 16px;
  width: 800px;
  overflow-y: scroll;
  height: 800px;


  @media (max-width: 648px) {
    & {
        width: 100%;
    }
  }
`;

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 130px;
  height: 100vh; 
  
`

const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 13px; // 바꾼 곳
    position: relative;
    @media (max-width: 648px) {
    & {
       font-size: 22px;
    }
    }
`;

const QuillWrapper = styled(ReactQuill)`

  .ql-toolbar.ql-snow {
    border: none;
    position: sticky;
    top: -26px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    z-index: 2;

  }
  .ql-container.ql-snow {
    border: none;
    font-size: 16px;
    z-index: 1;
  }

  .ql-editor.ql-blank::before {
    color: ${colors.gray2};
    font-style: normal;
    
  }
`;

const LinkBox = styled.div`
    background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LinkTitle = styled.div`
    font-size: 16px;
`
const LinkInput = styled.input`
    border: none;
    border-radius: 12px;
    background-color: #ededed;
    padding: 13px 16px;
    width: 88%;
    font-size: 16px;
    outline: none;
    &::placeholder {
        color: #a2a2a2;
    }
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`