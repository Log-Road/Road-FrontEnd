import React from "react";
import styled from "styled-components";
import search from "../assets/Search.svg"
import Filter from "../assets/Filter.svg"
import Profile from "../assets/Profile.svg"
import {colors} from "../styles/colors"

export default function MainHeader() {

  return (
    <>
    <Container>
      <Contents>
          <Title>ROAD</Title>
          <SearchBox>
            <SearchIcon src={search} />
            <Search type="text" placeholder="제목, 내용, 키워드 등을 검색해보세요."/>
          </SearchBox>
          <FilterBox>
            <FilterIcon src={Filter}/>
            <FilterText>필터</FilterText>
          </FilterBox>
        </Contents>
        <Flex>
          <Text>랭킹</Text>
          <Text>글작성</Text>
          <ProfileImg src={Profile}/>
        </Flex>
    </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  background-color: ${colors.Gray["gray 50"]};
`

const Contents = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
`

const Title = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;
  margin: 2.5rem;
`

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const SearchIcon = styled.img`
  position: absolute;
  margin: 0 0 0 1rem;
`

const Search = styled.input`
  width: 32vw;
  height: 4.8vh;
  font-size: 1rem;
  overflow: auto;
  padding: 0 0 0 3.5rem;
  background-color: ${colors.Gray["gray 100"]};
  border: none;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`

const FilterBox = styled.div`
  width: 5.1vw;
  height: 4.8vh;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.Blue["main 50"]};
  margin: 0 0 0 20px;
`

const FilterIcon = styled.img``

const FilterText = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.Blue["main 500"]};
  
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5vw;
`

const Text = styled.p`
  font-size: 1.1rem;
  color: ${colors.Gray["gray 700"]};
`

const ProfileImg = styled.img``