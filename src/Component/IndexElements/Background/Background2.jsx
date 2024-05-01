import { useState, useEffect } from "react";
import "./Background2.css";
import Name from "./Man/Name";
import Line from "./Line/Line";
import image from "../../../assets/Images/Logo/DeptLogo.svg";

export default function Background() {
  // Setting States for Controling the Behavior
  const [command, setCommand] = useState("");
  const [enterValue, setEnter] = useState(0);
  const [pageValue, setPageValue] = useState(0);

  // Controlling the key function
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setCommand(() => "");
    } else if (e.key === "ArrowUp") {
      setCommand(() => "man oracle");
    } else if (e.key === "Enter") {
      setEnter(() => !enterValue);
    }
  };

  // Controling the Behavior for the pages
  useEffect(() => {
    if ((command === "man oracle") & enterValue) {
      setPageValue(() => !pageValue);
      setCommand("");
      setEnter(0);
    }
  });

  return (
    <>
      <div className="master-div">
        <div className="header-nav">
          <div className="header-nav-img">
            <img src={image} />
          </div>
          <div className="header-nav-text">
            <h1>Pegasus@localhost</h1>
          </div>
          <div className="header-nav-buttons">
            <div className="header-nav-buttons-align">
              <div className="header-nav-buttons-buttons">
                <div className="circle-r">
                  <span>-</span>
                </div>
                <div className="circle-g">
                  <span>X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="myTer">
          {/* <Line intruction={command} /> */}
          <Name x="Name" y = "bue"></Name>
        </div>
      </div>
    </>
  );
}
