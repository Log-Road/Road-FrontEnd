import React, { useState, useEffect } from "react";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import BottomBtn from "../../components/Button/BottomBtn";
import TagInput from "../../components/PersonalProject/TagInput";
import ImgPreview from "../../components/PersonalProject/ImgPreview";
import SimpleIntroText from "../../components/PersonalProject/SimpleIntroText";
import Select from "react-select";


export default function PersonalProject() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryParamValue = queryParams.get('param');
    const [selectOnline, setSelectOnline] = useState<string | null>(null);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectImg, setProjectImg] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [TeamName, setTeamName] = useState<string>("");
    const [TeamMembers, setTeamMembers] = useState<boolean>(false);
    const [techStack, setTechStack] = useState<boolean>(false);
    const [simpleIntroText, setSimpleIntroText] = useState<string>("");
    
    // select 의 option 값
    const online = [
        { value: "DMS", label: "DMS" },
        { value: "대동여지도", label: "대동여지도" },
        { value: "그램", label: "그램" },
        { value: "LOG", label: "LOG" },
        { value: "은하", label: "은하" },
        { value: "Pick", label: "Pick" },
        { value: "QSS", label: "QSS" },
        { value: "NoNamed", label: "NoNamed" },
        { value: "Modeep", label: "Modeep" },
        { value: "리프트", label: "리프트" },
        { value: "어게인", label: "어게인" },
        { value: "Info", label: "Info" },
    ];

    useEffect(() => {
        // 조건이 충족되면 버튼 활성화
        if (projectTitle && projectImg && techStack && simpleIntroText) {
            const isDisabled =
                (queryParamValue === '개인' && userName) ||
                (queryParamValue === '팀' && TeamName && TeamMembers) ||
                (queryParamValue === '동아리' && selectOnline); 
                
                setBtnDisabled(!isDisabled);
        }
    }, [queryParamValue, projectTitle, projectImg, userName, TeamName, TeamMembers, selectOnline, techStack, simpleIntroText]);
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/markdown`);
    }

    return (
        <>
            <Header />
            <Body>
                <Container>
                    <MainTitle>요약 소개글</MainTitle>
                    <MainWrapper>
                        <Content>
                            <SubTitle>제목</SubTitle>
                            <Input 
                                placeholder="프로젝트 제목" 
                                value={projectTitle} 
                                onChange={(e) => setProjectTitle(e.target.value)} 
                            />

                        </Content>
                        <ThumbnailContent>
                            <ImgPreview
                                text="썸네일 이미지"
                                onChange={(imgData) => setProjectImg(imgData)}
                            />
                        </ThumbnailContent>
                        {queryParamValue === '개인' &&
                            (
                                <Content>
                                    <SubTitle>이름</SubTitle>
                                    <Input 
                                        placeholder="이름"
                                        value={userName} 
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </Content>
                            )
                        }
                        {queryParamValue === '팀' &&
                            (
                                <>
                                    <Content>
                                        <SubTitle>팀</SubTitle>
                                        <Input 
                                            placeholder="팀 이름" 
                                            value={TeamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                        />
                                    </Content>
                                    <TagInput
                                        text='팀원'
                                        placeholder='팀원 추가'
                                        onChange={(tags) => setTeamMembers(tags)}
                                    />
                                </>
                            )
                        }
                        {queryParamValue === '동아리' &&
                            (
                                <>
                                    <Content>
                                        <SubTitle>동아리</SubTitle>
                                        <GroupSelectBox>
                                            <StyledSelect
                                                options={online}
                                                onChange={(value: any) => setSelectOnline(value)}
                                                placeholder='동아리를 선택해주세요'
                                            />
                                        </GroupSelectBox>

                                    </Content>
                                </>
                            )
                        }
                        <TagInput
                            text='주요 기술 스택'
                            placeholder='기술 스택 추가'
                            onChange={(tags) => setTechStack(tags)}
                        />
                        <IntroContent>
                            <SimpleIntroText
                                text='간단한 소개글'
                                onChange={(value) => setSimpleIntroText(value)}
                            />
                        </IntroContent>
                    </MainWrapper>
                </Container>
            </Body>
            <BottomBtn text="다음" disabled={btnDisabled} onClick={handleButtonClick}/>



        </>
    );
}




const Body = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0 160px;
    @media (max-width: 648px) {
    & {
        padding-bottom: 120px;
    }
    }
`

const Container = styled.main`
    background-color: ${colors.White}; 
    width: 595px;
    padding: 26px 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`

const MainTitle = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    @media (max-width: 648px) {
    & {
    font-size: 1.4em;
    }
    }
`
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Content = styled.section`
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
    font-size: 1em;
    @media (max-width: 648px) {
    & {
    font-size: 1.07em;
    }
    }
`

const Input = styled.input`
    border: none;
    border-radius: 12px;
    background-color: ${colors.Gray["gray 50"]};
    padding: 13px 16px;
    width: 80%;
    font-size: 16px;
    outline: none;
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

const ThumbnailContent = styled.section`
    display: flex;
    align-items: center;
    gap: 21px;


    @media (max-width: 648px) {
    & {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    }
`

const IntroContent = styled.section`
    display: flex;
    justify-content: space-between;
    @media (max-width: 648px) {
    & {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    }
`

const StyledSelect = styled(Select).attrs({
    classNamePrefix: 'react-select',
})`
 
  .react-select__indicator-separator {
    background-color: ${colors.Gray["gray 50"]};
    
  }
    .react-select__control {
      background-color: ${colors.White};
      padding-left: 8px;
      border: 1px solid ${colors.Gray["gray 100"]};
      border-radius: 12px;
      display: flex;
      height: 45.5px;
      box-shadow: none;
      cursor: pointer;
      &:hover {
        border: 1px solid ${colors.Gray["gray 200"]};
      }
      
      
      
    }
    .react-select__single-value {
      font-size: 16px;
    }
    .react-select__menu {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 10px 10px 5px 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      box-shadow: none;
      color: ${colors.Gray["gray 900"]};
      border: 1px solid ${colors.Gray["gray 100"]};
      &::-webkit-scrollbar {
        border: none;
      }
    }
    .react-select__option {
        background-color: ${colors.White};
        border-radius: 4px;
 
        margin-bottom: 5px;
      &:hover {
        background-color: ${colors.Gray["gray 50"]};
        border:none;
      }
    }
    .react-select__option--is-selected {
      background-color: ${colors.Gray["gray 100"]}; //클릭된 option 배경색
      color: ${colors.Black};
      &:hover {
        background-color: ${colors.Gray["gray 100"]};
      }
    }
 `;



const GroupSelectBox = styled.div`
    width: 80%;
    @media (max-width: 648px) {
    & {
        width: 100%;
    }
    }
`