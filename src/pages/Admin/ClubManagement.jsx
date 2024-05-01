import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import PlusButton from "../../components/Button/PlusButton";
import HandleButton from "../../components/Button/HandleButton";

/**
 * 
 * @returns 동아리 관리 페이지
 */

export default function ClubManagement() {

  const ClubData = [
    { name: "Log" },
    { name: "대동여지도" },
    { name: "노네임드" },
  ];

  return (
    <Container>
      <Header />

      <InnerContainer>
        <Contents>
          <TopWrap>
            <Title>동아리 관리</Title>
            <PlusButton text="동아리 추가"/>
          </TopWrap>

          <InfoWrap>
            {ClubData.map((value, index) => (
              <ClubWrap id={index}>
                <CheckWrap>
                  <input type="checkbox" />
                  <p>{value.name}</p>
                </CheckWrap>

                <ButtonWrap>
                  <HandleButton text="삭제"/>
                  <HandleButton text="수정"/>
                </ButtonWrap>
              </ClubWrap>
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
  width: 34.375%;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
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

const ClubWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.63em;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 0.75em;
`;

const CheckWrap = styled.label`
  display: flex;
  gap: 1em;
`;

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 2.25em;
  line-height: 140%;
`;
