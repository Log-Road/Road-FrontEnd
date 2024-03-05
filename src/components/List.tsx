import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

/**
 * 
 * @returns 랭킹페이지 대회 리스트 컴포넌트
 */

export default function List() {
  return (
    <Container>
      <Content>
        <Text>뭐시깽이 대회</Text>
        <Text>2023.03.01 마감</Text>
      </Content>
      <Line />
    </Container>
  );
}

const Container = styled.div`
  width: 20.69em;
  height: 2.5em;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: PretendardRegular;
  font-size: 1em;
  line-height: 140%;
`;

const Line = styled.hr`
  width: 100%;
  height: 0.06em;
  color: ${colors.Gray["gray 100"]};
`;
