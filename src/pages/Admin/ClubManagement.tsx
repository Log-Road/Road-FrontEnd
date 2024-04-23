import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Header from "../../components/HeaderAdmin";
import PlusButton from "../../components/Button/PlusButton";
import HandleButton from "../../components/Button/ManagementButton";
import Checked from "../../assets/Checked.svg"
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns 동아리 관리 페이지
 */

interface Props {
  checked: boolean;
}

export default function ClubManagement() {

  const navigate = useNavigate()

  const [checkedItems, setCheckedItems] = useState<string[]>([]); //체크된 항목 저장
  const ClubData = [ //동아리 이름
    "DMS", "Gram", "Info", "Lift", "Log", "Modeep", "NoNamed", "Pick", "TeamQSS", "대동여지도", "어게인", "은하"
  ];

  const toggleCheckbox = (value) => {
    if (checkedItems.includes(value)) {
      return setCheckedItems(prevItems => prevItems.filter(item => item !== value));
    } 
    return setCheckedItems(prevItems => [...prevItems, value]);
  };
  
  useEffect(() => {
    console.log(checkedItems)
  }, )

  const handleDelete = () => {}
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
              <ClubWrap key={value}>

                <CheckWrap checked={checkedItems.includes(value)} >
                  <Input
                    type="checkbox"
                    id="checkClub"
                    onChange={() => toggleCheckbox(value)}
                  />
                  {checkedItems.includes(value) && <Icon src={Checked} />}
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

const CheckWrap = styled.label<Props>`
  position: relative;
  display: flex;
  gap: 1em;
  ${({ checked }) => checked ? "text-decoration: line-through;" : ""}
  ${({ checked }) => checked ? `color: ${colors.gray2};` : ""}
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
