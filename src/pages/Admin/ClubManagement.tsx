import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/HeaderAdmin";
import PlusButton from "../../components/Button/PlusButton";
import HandleButton from "../../components/Button/ManagementButton";
import Checked from "../../assets/Checked.svg"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns 동아리 관리 페이지
 */

export default function ClubManagement() {

  const navigate = useNavigate()

  const [checkedItems, setCheckedItems] = useState({}); //체크된 항목 저장
  const ClubData = [ //동아리 이름
    "DMS", "Gram", "Info", "Lift", "Log", "Modeep", "NoNamed", "Pick", "TeamQSS", "대동여지도", "어게인", "은하"
  ];

  const toggleCheckbox = (value) => { //체크박스 상태 변경
    setCheckedItems(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }))
  }

  useEffect(() => { //체크된 항목 확인용
    console.log(checkedItems);
  }, [checkedItems]);

  const handleDelete = () => { //동아리 지우는 함수
    const updatedItems = Object.fromEntries(
      Object.entries(checkedItems).filter(([key, value]) => !value) 
      //체크되지 않은 항목만 선택하여 새로운 객체 반환
    );
    setCheckedItems(updatedItems);
  };

  const handleUpdate = () => {}

  return (
    <Container>
      <Header />

      <InnerContainer>
        <Contents>

          <TopWrap>
            <Title>동아리 관리</Title>
            <PlusButton text="동아리 추가" onClick={() => navigate("/clubAdd")}/>
          </TopWrap>

          <InfoWrap>
            {ClubData.map((value) => (
              <ClubWrap>

                <CheckWrap>
                  <Input
                    type="checkbox"
                    id="checkClub"
                    checked={checkedItems[value] || false}
                    onChange={() => toggleCheckbox(value)}
                  />
                  {checkedItems[value] && <Icon src={Checked} />}
                  <label htmlFor="checkClub">{value}</label>
                </CheckWrap>

                <ButtonWrap>
                  <HandleButton text="삭제" onClick={handleDelete}/>
                  <HandleButton text="수정" onClick={handleUpdate}/>
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
  height: 100vh;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  width: 40%;
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
  position: relative;
  display: flex;
  gap: 1em;
`;

const Input = styled.input`
zoom: 1.5;
`

const Icon = styled.img`
  position: absolute;
`

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 2.25em;
  line-height: 140%;
`;
