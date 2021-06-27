import React from "react";
import img from "./scc_img01.png";
import './start.css';

const Start = (props) => {
	return (
    <div className="wrapper">
      <div className="outter">
        <img className="img" src={img} />
        <h1 className="h1">나는 {" "}<span className="span">{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
        <input type="text" placeholder="내 이름"/>
        <button>시작하기</button>
      </div>
    </div>
  );
};

export default Start;