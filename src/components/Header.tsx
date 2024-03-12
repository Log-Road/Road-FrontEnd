import React, { useState } from "react";
import styled from "styled-components";
import Search from "../assets/Search.svg"
import Profile from "../assets/Profile.svg"
import Filter from "../assets/Filter.svg"
import Cancel from "../assets/Cancel.svg";
import { colors } from "../styles/colors"

interface DataItem {
    title: string;
    contents: string[];
}

interface KeyProps {
    isFirst: boolean;
}

export default function Header() {

    const [searchBarOn, setSearchBarOn] = useState<Boolean>(false)
    const [selectedArr, setSelectedArr] = useState<string[]>([])

    const Data: DataItem[] = [
        { title: "구분", contents: ["전체", "개인", "팀", "동아리"] },
        { title: "연도", contents: ["2024", "2023", "2022", "2021"] },
        { title: "정렬 기준", contents: ["인기순", "최신순"] },
    ];

    const handleKeywordClick = (content: string) => {
        if (selectedArr.includes(content)) {
            setSelectedArr(selectedArr.filter(item => item !== content));
        } else {
            setSelectedArr([...selectedArr, content]);
        }
    }

    return (
        <Container>
            <Contents>
                <FlexWrap>
                    <Logo>ROAD</Logo>

                    <SearchWrap>
                        <InputBox onFocus={() => setSearchBarOn(true)}>
                            <SearchIcon src={Search} />
                            <Input type="text" placeholder="제목, 내용, 키워드 등을 검색해보세요."></Input>
                        </InputBox>

                        <FilterBox onClick={() => setSelectedArr([]) }>
                        <FilterIcon src={!searchBarOn && selectedArr.length === 0 ? Filter : Cancel} />
                        <FilterText>필터</FilterText>
                    </FilterBox>

                    <KeyWordBox>
                        {selectedArr.map((value, index) => (
                            <SelectedKeyWord>{value}</SelectedKeyWord>
                        ))}
                    </KeyWordBox>

                    {searchBarOn &&
                        <SearchBar>
                            {Data.map((value, index) => (
                                <Category key={index}>
                                    <Title>{value.title}</Title>
                                    <Wrap>
                                        {value.contents.map((content, id) => (
                                            <Button key={id} isFirst={id === 0} onClick={() => handleKeywordClick(content)}>
                                                {content}
                                            </Button>
                                        ))}
                                    </Wrap>
                                </Category>
                            ))}
                        </SearchBar>
                    }
                </SearchWrap>

            </FlexWrap>

            <ItemWrap>
                <HandleText>랭킹</HandleText>
                <HandleText>글작성</HandleText>
                <ProfileImg src={Profile} />
            </ItemWrap>
        </Contents>

            { searchBarOn && <Overlay onClick={() => setSearchBarOn(false)} /> }
        </Container >
    )
}

const Container = styled.div`
width: 100vw;
height: 8.15vh;
display: flex;
justify-content: center;
align-items: center;
padding: 1.5em;
`

const Contents = styled.div`
width: 84.375vw;
display: flex;
justify-content: space-between;
`

const FlexWrap = styled.div`
width: 65.88vw;
display: flex;
align-items: center;
gap: 2.50em;
`

const SearchWrap = styled.div`
display: flex;
align-items: center;
gap: 1.25em;
position: relative;
`

const InputBox = styled.div`
 position: relative;
 width: 32.39vw;
 z-index: 7;
`

const FilterBox = styled.div`
  width: 5.1vw;
  height: 4.8vh;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-radius: 1em;
  background-color: ${colors.Blue["main 50"]};
  gap: 0.13em;
  z-index: 7;
`

const KeyWordBox = styled.div`
display: flex;
gap: 1.25em;
`

const SelectedKeyWord = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  border-radius: 1em;
  background-color: ${colors.Main};
  color: #fff;
  padding: 0.75em 1.25em;
`

const ItemWrap = styled.div`
display: flex;
align-items: center;
gap: 2em;
`

const SearchBar = styled.div`
width: 41.04vw;
height: 22.13em;
background-color: #fff;
border-radius: 0 0 1.88em 1.88em;
box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
padding: 1.50em;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 1em;
position: absolute;
top: -1.5em;
left: -1.5em;
z-index: 5;
`

const Category = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;
`

const Wrap = styled.div`
width: 38.54vw;
height: 2.38em;
display: flex;
flex-direction: row;
gap: 0.75em;
`

const Button = styled.div<KeyProps>`
 padding: 0.5em 1.25em;
  background-color: ${({ isFirst }) => (isFirst ? colors.Main : "#fff")};
  color: ${({ isFirst }) => (isFirst ? "#fff" : colors.gray2)};
  border-radius: 0.75em;
  display: flex;
  align-items: center;
  font-family: PretendardRegular;
  font-size: 1em;
  line-height: 140%;
  cursor: pointer;
`

const Input = styled.input`
  width: 100%;
  height: 4.44vh;
  overflow: auto;
  font-family: PretendardRegular;
  font-size: 1em;
  line-height: 140%;
  padding: 0.75em 1em 0.75em 3.50em;
  background-color: ${colors.Gray["gray 100"]};
  border: none;
  border-radius: 1em;

  &:focus {
    outline: none;
  }
`

const Logo = styled.p`
font-family: PretendardSemiBold;
font-size: 1.5em;
line-height: 140%;
`

const FilterText = styled.p`
font-family: PretendardMedium;
  font-size: 1.125rem;
  color: ${colors.Blue["main 500"]};
`

const HandleText = styled.p`
font-family: PretendardMedium;
  font-size: 1.125rem;
  color: ${colors.gray2};
`

const Title = styled.p`
  font-family: PretendardRegular;
  font-size: 0.88em;
  line-height: 140%;
  color: ${colors.gray2};
`

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 1em;
  transform: translateY(-50%);
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
`

const FilterIcon = styled.img``

const ProfileImg = styled.img``