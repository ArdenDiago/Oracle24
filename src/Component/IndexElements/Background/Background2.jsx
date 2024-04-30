import { useState, useEffect } from "react";
import "./Background2.css";
import Name from "./Name";

export default function Background() {
  const [command, setCommand] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      console.log("Down");
      setCommand(() => "");
    } else if (e.key === "ArrowUp") {
      setCommand(() => "man oracle");
      console.log("up");
    }
  };
  return (
    <>
      <div className="header-nav">
        <div>
          <h1>Terminal Logo</h1>
        </div>
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
        <h1>Pegasus@Localhost: </h1>
        <Name x="Name" y = "bue"></Name>
      </div>
    </>
  );
}
