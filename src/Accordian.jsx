import React , { useState } from "react";
import "./index.css";
import {questions} from "./api";
import MyAccordion from "./Myaccordion";

const Accordian = () => {

    const [data, setData] = useState(questions);

    return (
        <>
            <div className="main_div">
            <h1 className="interview_ques">React JS Interview Questions</h1>
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordion key={id} {...curElem} />
                })
            }
            </div>
        </>
    );
};

export default Accordian;