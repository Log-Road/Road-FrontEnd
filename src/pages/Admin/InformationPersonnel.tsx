import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors"
import Header from "../../components/HeaderAdmin";
import Search from "../../assets/Search.svg"
import Upload from "../../assets/Upload.svg"
import HandleButton from "../../components/Button/HandleButton";

/**
 * 
 * @returns 인원 정보 및 관리 페이지
 */

export default function InformationPersonnel() {
    return (
        <Container>
            <Header />
            <InnerContainer>
                <Contents>
                    
                    <Title>인원 정보 및 관리</Title>

                    <SearchWrap>
                        <SearchInput placeholder="Ex. 홍길동" />
                        <SearchIcon src={Search} />
                    </SearchWrap>

                    <FileUploadWrap>
                        <DocumentWrap>
                            <UploadIcon src={Upload} />
                            <DocumentText>인원 추가 문서</DocumentText>
                        </DocumentWrap>
                        <DocumentWrap>
                            <UploadIcon src={Upload} />
                            <DocumentText>인원 변경 문서</DocumentText>
                        </DocumentWrap>
                    </FileUploadWrap>

                    <InfoWrap>
                        <FlexWrap>
                            <StudentInfoWrap>
                                <Name>홍길동</Name>
                                <StudentID>1학년 1반 11번</StudentID>
                                <State>재학중</State>
                            </StudentInfoWrap>
                            <HandleButton text="수정"/>
                        </FlexWrap>
                    </InfoWrap>

                </Contents>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 1.25em;
`

const InnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 1.25em;
`

const SearchWrap = styled.div`
position: relative;
width: 37.5em;
height: 3.5em;
`

const FileUploadWrap = styled.div`
display: flex;
gap: 1.5em;
`

const DocumentWrap = styled.div`
display: flex;
align-items: center;
gap: 0.25em;
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.75em;
`

const FlexWrap = styled.div`
width: 35em;
display: flex;
justify-content: space-between;
`

const StudentInfoWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.75em;
`

const SearchInput = styled.input`
width: 100%;
height: 100%;
border: 0.1em solid ${colors.gray1};
border-radius: 1em;
padding: 1em 1.25em;
outline: none;
font-family: 'Pretendard-Medium';
font-size: 1em;
line-height: 150%;
`

const Title = styled.p`
font-family: 'Pretendard-Bold';
font-size: 2.25em;
line-height: 140%;
`

const DocumentText = styled.p`
font-family: 'Pretendard-Medium';
font-size: 0.81em;
line-height: auto;
color: ${colors.gray2};
`

const Name = styled.p`
font-family: 'Pretendard-Bold';
font-size: 1em;
line-height: 140%;
`

const StudentID = styled.p`
font-family: 'Pretendard-Regular';
font-size: 0.88em;
line-height: 140%;
`

const State = styled.p`
font-family: 'Pretendard-Regular';
font-size: 0.88em;
line-height: 140%;
color: ${colors.Main};
`

const SearchIcon = styled.img`
position: absolute;
top: 1.13em;
right: 1.25em;
color: ${colors.Gray["gray 300"]};
`

const UploadIcon = styled.img``