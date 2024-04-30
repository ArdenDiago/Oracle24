import { useEffect } from "react";
import "./Background2.css";

export default function Background() {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        console.log('Down');
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
        <h1>Pegasus@Localhost: </h1>
      </div>
    </>
  );
}
