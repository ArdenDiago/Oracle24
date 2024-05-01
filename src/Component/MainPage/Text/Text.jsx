import { useState } from "react";

import txt from "./Text.module.css";

export default function Text() {
  const [activeClass, setClass] = useState(0);
  const [functionClass, setFunctionClass] = useState(true);

  const classList = ["txt.sets", "txt.allRepeat", "txt.bliking", "txt.myspan"];
  const listLength = classList.length;

  function indexAppend() {
    setTimeout(() => {
      if (activeClass !== listLength - 1) {
        setClass((prevIsActive) => prevIsActive + 1);
      } else {
        setClass(() => listLength - 1)
      }
    }, 5000);
  }
  console.log(classList[activeClass]);
  return (
    <>
      {indexAppend()}
      <div className={txt.alignDiv}>
        <h1 className={classList[activeClass]}>
          <span>O</span>
          <span>R</span>
          <span>A</span>
          <span>C</span>
          <span>L</span>
          <span>E</span>
        </h1>
      </div>
    </>
  );
}
