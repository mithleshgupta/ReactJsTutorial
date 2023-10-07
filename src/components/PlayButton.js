import { useState } from "react";
import "../components/PlayButton.css";
function PlayButton({ children, onSmash, onPause }) {
  const [status, setStatus] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    if (status) {
      onPause();
    } else {
      onSmash();
    }
    setStatus(!status);
  }
  return (
    <>
      <button onClick={handleClick}>
        {children} : {status ? "▶️" : "⏸️"}
      </button>
    </>
  );
}

export default PlayButton;
