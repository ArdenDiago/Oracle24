import { useState, useEffect } from "react";
import "./Background2.css";
import Name from './Man/Name';

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
        <Name x="Welcome, Player" y = "Welcome, techno-travelers, to the digital nexus where bytes and beats converge. Behold the pulsating heart of the Techno Cultural Fest Oracle, where the city's rhythms are our code and innovation our creed. In this sprawling metropolis of endless possibilities, every keystroke echoes a revolution, every algorithm a prophecy. So, plug into the network, embrace the data stream, for here, in the neon-lit labyrinth of the future, we are the architects of our destiny. Welcome to the age of Techno Liberation!"></Name>
      </div>
    </>
  );
}
