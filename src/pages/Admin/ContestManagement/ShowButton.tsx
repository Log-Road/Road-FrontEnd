import React from "react";
import Button from "../../../components/Button/ManagementButton"
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    text: string;
    route: string
}

const buttonMap = {
    "진행중": [
        { text: "글보기", route: "/" },
        { text: "수정", route: "/" }
    ],
    "시상 대기": [
        { text: "글보기", route: "/" },
        { text: "시상", route: "/" }
    ],
    "시상 완료": [
        { text: "결과", route: "/" }
    ]
};

const ShowButton = ({ state }) => {

    const navigate = useNavigate()
    const buttons = buttonMap[state] || [];

    const renderButtons = () => {
        return buttons.map(({ text, route }: ButtonProps, index: number) => (
            <Button key={index} text={text} onClick={() => navigate(route)} />
        ));
    };

    return <>{renderButtons()}</>;
}

export default ShowButton