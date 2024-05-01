import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BorderBtn from "../../components/Button/BorderBtn";
import { useLocation, useNavigate } from "react-router-dom";


export default function SelectEvent() {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('param') || '';

    const handleButtonClick = (contest: string) => {
        navigate(`/personnel?param=${paramValue}&contest=${contest}`);
    };
    return (
        <>
            <Container>
                <Header />
                <div className="Content">
                    <TextFlex>
                        <p className="Title">참여하는 대회</p>
                        <p className="SubTitle">참여할 대회를 골라주세요</p>
                    </TextFlex>
                    <BtnFlex>
                        <BorderBtn text="뭐시깽이1 대회" onClick={()=> handleButtonClick("뭐시깽이1_대회")} />
                        <BorderBtn text="뭐시깽이2 대회" onClick={()=> handleButtonClick("뭐시깽이2_대회")} />
                        <BorderBtn text="뭐시깽이3 대회" onClick={()=> handleButtonClick("뭐시깽이3_대회")} />
                    </BtnFlex>
                </div>
            </Container>


        </>
    )
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
        font-size: 1.9em;
        font-weight: 500;
    }

    .SubTitle {
        font-size: 0.88em;
        justify-content: center;
    }

    /* @media (max-height: 456px) {
        display: none;
    } */
`

const BtnFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 28%; */
    gap: 24px;
    /* justify-content: space-between; */

    /* @media (max-height: 700px) {
        height:auto;
        gap: 8px;
    } */
`
