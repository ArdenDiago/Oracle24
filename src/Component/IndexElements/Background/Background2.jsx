import { useState, useEffect } from "react";
import "./Background2.css";
import Name from "./Man/Name";
import image from "../../../assets/Images/Logo/DeptLogo.svg";

export default function Background() {
  const [command, setCommand] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setCommand(() => "");
    } else if (e.key === "ArrowUp") {
      setCommand(() => "man oracle");
    } else if (e.key === 'Enter') {
      if (command === "man oracle") {
        // pass
      }
    }
    console.log(e.key);
  };
  return (
    <>
      <div className="master-div">
        <div className="header-nav">
          <div className="header-nav-img">
            <img src={image}/>
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
          {/* <Name x="Name" y = "bue"></Name> */}
        </div>
      </div>
    </>
  );
}
