import Second from "./Component/Second";
import { useState, useEffect } from "react";
import "./Component/Background2.css";
import "./Component/Name.css";
import "./Component/Conformation.css";

import Line from "./Component/Line/Line";

import image from "./assets/Images/Logo/DeptLogo.svg";

function App() {
  const [page, setPage] = useState(0);
  function myFunction() {
    setPage(() => !page);
  }
  // -------------------------------

  function Background() {
    // Setting States for Controling the Behavior
    const [command, setCommand] = useState("");
    const [enterValue, setEnter] = useState(0);
    const [pageDone, setPageDone] = useState(0);

    // data
    let x = "Name";
    let y =
      "Enter the digital playground, where the city's heartbeat syncs with the pulse of innovation. Welcome to the Techno Cultural Fest Oracle, where every pixel holds a secret and every line of code whispers prophecy. In this realm of digital liberation, where information is power and connection is key, we harness the power of technology to unlock the mysteries of tomorrow. So, fellow hackers, gear up, plug in, and let the revolution begin. Welcome to the  Oracle, where freedom reigns supreme in the digital age";

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
        if ((command === "man oracle") & enterValue) {
          setTimeout(() => {
            setCommand("");
            setEnter(0);
          }, 1000);
        }
      }
    };
    // Second
    const [textValue, setTextValue] = useState("");
    const [lengthTargetFulfilled, setLengthTargetFulfilled] = useState(0);
    const lenOfText = y.length;
    const timeout = 5;

    useEffect(() => {
      setTimeout(() => {
        if (textValue.length !== lenOfText) {
          setTextValue((prevText) => prevText + y[textValue.length]); // Append character at the current length of textValue
        } else {
          setLengthTargetFulfilled(() => !lengthTargetFulfilled);
        }
      }, timeout);
    }, [textValue, lenOfText, y]);
    // Third
    const [keyValue, setKeyValue] = useState("");
    const [enterValueFinal, setEnterValueFinal] = useState(0);
    const [change, setChange] = useState(0);

    useEffect(() => {
      document.addEventListener("keypress", detectKey, true);
    });
    const detectKey = (e) => {
      const eKey = e.key;
      if (eKey !== "Enter") {
        setKeyValue(() => eKey);
      } else {
        setEnterValueFinal(() => !enterValueFinal);
        setValueChange();
      }
    };

    function setValueChange() {
      if ((enterValueFinal && keyValue === "Y") || keyValue === "y") {
        setChange(() => !change);
      }
    }

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
            {!enterValueFinal ? (
              <Line intruction={command} />
            ) : (
              <div className="background-width">
                <div className="header-name">
                  <div className="header-command-name">{x}</div>
                  <div className="header-command-name">
                    <p>INTRA DEPARTMENT TECHNO-CULTURAL FEST</p>
                  </div>

                  <div className="header-command-name left">{x}</div>
                </div>
                <div>
                  <div className="Name">SYNOPSIS</div>
                  <div className="ls">
                    <p>
                      {textValue}
                      <div className="text-control-parent">
                        {!lengthTargetFulfilled ? (
                          <div className="text-control">|</div>
                        ) : undefined}
                      </div>
                    </p>
                  </div>
                </div>
                <div className="permission-declare">
                  {lengthTargetFulfilled ? (
                    <p>
                      :Do you want to Declare Oracle Open: y/n: {keyValue}
                      <div className="text-control">|</div>
                    </p>
                  ) : undefined}
                </div>
                {((enterValueFinal && keyValue === "Y") || keyValue === "y") &&
                  myFunction()}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------
  return <>{!page ?<Background />  : <Second renderEFX={1}/>}</>;
}

export default App;
