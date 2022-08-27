import { FieldContext } from "rc-field-form";
import React from "react";
import {Input} from "antd";
import useWidth from "../hooks/useWith";

const Cover = styled.article'
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    display: Flex;






    ';




const AppHEarder = () => {
    return (
        <Cover>
        <div>로고</div>
        <HearderInput = "small" allowClear placeholder="검색어를 입력하시오"/>
        <div>메뉴아이콘</div>
        </Cover>
    )
}