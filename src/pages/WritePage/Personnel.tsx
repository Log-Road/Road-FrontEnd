import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
// import { colors } from "../../styles/colors";
import BorderBtn from "../../components/Button/BorderBtn";
import { useNavigate } from "react-router-dom";

export default function Personnel() {

    const navigate = useNavigate();

    const handleButtonClick = (value: string) => {
        navigate(`/selectEvent?param=${value}`);
    };

    return (
        <>
        <Container>
            <Header />
            <div className="Content">
                <TextFlex>
                    <p className="Title">프로젝트 인원</p>
                    <p className="SubTitle">프로젝트를 진행한 인원의 규모를 알려주세요</p>
                </TextFlex>
                <BtnFlex>
                    <BorderBtn text="개인" onClick={() => handleButtonClick("개인")}></BorderBtn>
                    <BorderBtn text="팀" onClick={() => handleButtonClick("팀")}></BorderBtn>
                    <BorderBtn text="동아리" onClick={() => handleButtonClick("동아리")}></BorderBtn>
                </BtnFlex>
            </div>
        </Container>
        </>

    );
}

const Container = styled.div`
    height: 100vh;
    
    
    .Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        height: 75%;
        justify-content: center;
    }


`

const TextFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .Title {
        /* font-size: 30px; */
        font-size: 1.9em;
        font-weight: 500;
    }

    .SubTitle {
        font-size: 0.88em;
        justify-content: center;
    }

    @media (max-height: 456px) {
        display: none;
    }
`

const BtnFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 28%;
    justify-content: space-between;

    @media (max-height: 700px) {
        height:auto;
        gap: 8px;
    }
`


