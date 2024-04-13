import React from "react";
import styled from "styled-components";
import Header from "../../components/HeaderAdmin";
import PlusButton from "../../components/Button/PlusButton";
import HandleButton from "../../components/Button/HandleButton";
import { colors } from "../../styles/colors";

interface Props{
  state: string;
}

/**
 * 
 * @returns 대회 관리 리스트 페이지
 */

export default function ContestManagement() {

    const ContestData = [ //백엔드에서 받아올 값
        { title: "뭐시깽이 대회", startDate: "2023.3.14", overDate: "2023.04.14", state: "진행중" },
        { title: "무슨무슨 대회", startDate: "2023.2.14", overDate: "2023.03.14", state: "시상 대기" },
        { title: "해커톤", startDate: "2023.2.14", overDate: "2023.03.14", state: "시상 완료" },
    ];

    const showButton = (state) => { //대회 상태 (진행중/대기/완료)에 따라 나타나는 버튼 지정
      if(state === "진행중") return <><HandleButton text="글쓰기" /><HandleButton text="수정" /></>;
      else if(state === "시상 대기") return <><HandleButton text="글보기" /><HandleButton text="시상" /></>;
      else if(state === "시상 완료") return <HandleButton text="결과" />;
    } 

    return (
        <Container>
            <Header />

            <InnerContainer>
                <Contents>

                    <TopWrap>
                        <Title>대회 관리</Title>
                        <PlusButton text="대회 추가" />
                    </TopWrap>

                    <InfoWrap>

                        {ContestData.map((value, index) => (
                            <ContestWrap>
                                <FlexWrap>
                                    <Name>{value.title}</Name>
                                    <Date>{value.startDate} ~ {value.overDate}</Date>
                                    <State state={value.state}>{value.state}</State>
                                </FlexWrap>
                                <FlexWrap>
                                    {showButton(value.state)}
                                </FlexWrap>
                            </ContestWrap>
                        ))}

                    </InfoWrap>

                </Contents>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75em;
`;

const ContestWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 28px;
`

const FlexWrap = styled.div`
display: flex;
gap: 12px;
`

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 2.25em;
  line-height: 140%;
`;

const Name = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 1em;
  line-height: 140%;
`

const Date = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 140%;
  color: ${colors.gray2};
`

const State = styled.p<Props>`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 140%;
  color: ${(props) => {
    if (props.state === "진행중") return colors.gray2;
    else if (props.state === "시상 대기") return colors.Error;
    else if (props.state === "시상 완료") return colors.Main;
  }};
`;
