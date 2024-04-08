import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import PlusButton from "../../components/Button/PlusButton";
import DeleteButton from "../../components/Button/DeleteButton";
import UpdateButton from "../../components/Button/UpdateButton";

export default function ClubManagement() {
  return (
    <Container>
      <Header />

      <InnerContainer>
        <Contents>
         
          <TopWrap>
            <Title>동아리 관리</Title>
            <PlusButton />
          </TopWrap>

          <InfoWrap>
            <ClubWrap>
              <CheckWrap>
                <input type="checkbox" />
                <label>뭐시깽이 동아리</label>
              </CheckWrap>

              <ButtonWrap>
                <DeleteButton />
                <UpdateButton />
              </ButtonWrap>
            
            </ClubWrap>
          </InfoWrap>
        </Contents>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ClubWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const CheckWrap = styled.div`
  display: flex;
  gap: 16px;
`;

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 2.25em;
  line-height: 140%;
`;
