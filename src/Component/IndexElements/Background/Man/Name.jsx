import "./Name.css"
export default function Name({x,y}){
    return(
    <div >
        
        <div className="Name">
            {x}
        </div>
        <div className="ls">
            {y}
        </div>
       

import { useState, useEffect } from "react";

export default function Name({ x, y }) {
  const [textValue, setTextValue] = useState("");
  const lenOfText = y.length;
  const timeout = 50;

  useEffect(() => {
    setTimeout(() => {
      if (textValue.length !== lenOfText) {
        setTextValue((prevText) => prevText + y[textValue.length]); // Append character at the current length of textValue
      }
    }, timeout);
  }, [textValue, lenOfText, y]);
  return (
    <>
      <div className="background-width">
        <div className="header-name">
          <div className="header-command-name">{x}</div>
          <div className="header-command-name">
            <p>INTRA DEPARTMENT TECHNO-CULTURAL FEST</p>
          </div>

          <div className="header-command-name left">{x}</div>
        </div>
        <div>
          <div className="Name">{x}</div>
          <div className="ls">
            <p>
              {textValue}
              <div className="text-control-parent">
                <div className="text-control">|</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
