import { useState, useEffect } from "react";

import "./Text.css";

export default function Text() {
  const [activeClass, setClass] = useState(0);
  const classList = ["allRepeat", "sets", "bliking","text"];
  const listLength = classList.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClass((prevIsActive) =>
        prevIsActive === listLength - 1 ? 0 : prevIsActive + 1
      );
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="alignDiv">
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
