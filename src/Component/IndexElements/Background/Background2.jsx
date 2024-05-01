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
      <div className="header-nav">
        <div>
          <h1>Terminal Logo</h1>
        </div>
        <div className="myTer">
          {/* <Name x="Name" y = "bue"></Name> */}
        <div className="header-nav-text">
          <h1>Pegasus</h1>
        </div>
        <div className="header-nav-buttons">
          <div className="circle-r"></div>
          <div className="circle-gr"></div>
          <div className="circle-g"></div>
        </div>
      </div>
      <div className="myTer">
        <h1>Pegasus@Localhost:</h1> <p>{command}</p>
        <div className="text"></div>
        <Name x="Name" y = "bue"></Name>
      </div>
    </>
  );
}
