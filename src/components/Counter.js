import "../components/PlayButton.css";
import { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button className="btn" onClick={handleClick}>
        Count
      </button>
    </>
  );
}

export default Counter;
