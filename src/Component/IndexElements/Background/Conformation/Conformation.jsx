import { useState, useEffect } from "react";
import "./Conformation.css";

export default function Conformation() {
  const [keyValue, setKeyValue] = useState("");
  const [enterValue, setEnterValue] = useState(0);
  const [change, setChange] = useState(0);
  useEffect(() => {
    document.addEventListener("keypress", detectKey, true);
  });
  const detectKey = (e) => {
    const eKey = e.key;
    if (eKey !== "Enter") {
      setKeyValue(() => eKey);
    } else {
      setEnterValue(() => !enterValue);
      setValueChange();
    }
  };
  function setValueChange() {
  if ((enterValue && keyValue === "Y") || keyValue === "y") {
    setChange(() => !change);
  }}
  return (
    <>
        <div className="permission-declare">
          <p>
            :Do you want to Declare Oracle Open: y/n: {keyValue}
            <div className="text-control">|</div>
          </p>
        </div>
    </>
  );
}
