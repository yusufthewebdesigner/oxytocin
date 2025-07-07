import React, { useEffect, useRef, useState } from "react";
import "../CSS/SliderPara.css";

const SliderPara = () => {
  const [speed, setSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const textRef = useRef(null);
  const utteranceRef = useRef(null);

  function readFunc() {
    speechSynthesis.cancel();
    const text = textRef.current.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }

  function playPauseFunc() {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  }

  function cancelFunc() {
    speechSynthesis.cancel();
  }

  useEffect(() => {
    speechSynthesis.cancel();
    const ua = navigator.userAgent.toLowerCase();
    const isOpera = ua.includes("opr") || ua.includes("opera");
    if (isOpera) {
      alert("Reading may not be compatible with Opera. Use Chrome.");
    }
  }, []);

  return (
    <div>
      <div className="mainBox">
        <h1 className="paraTitle">About US</h1>
        <p id="text" ref={textRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ducimus aperiam voluptatum, exercitationem
          quia nihil. Harum commodi
        </p>
        <div className="buttons">
          <button id="read" onClick={readFunc}>
            <span className="hidden sm:inline">Read</span>
            <i className="bi bi-volume-up"></i>
          </button>

          <button id="playPause" onClick={playPauseFunc}>
            <span className="hidden sm:inline">{isPaused ? "Resume" : "Pause"}</span>
            {isPaused ? <i className="bi bi-play-circle"></i> : <i className="fa-regular fa-circle-pause"></i>}
          </button>

          <button id="cancel" onClick={cancelFunc}>
            <span className="hidden sm:inline">Cancel</span>
            <i className="bi bi-x-circle"></i>
          </button>

          <div className="speed">
            <p className="showSpeed">{speed}X</p>
            <div className="range">
              <label>Speed: </label>
              <input
                type="range"
                id="speed"
                min="0.5"
                max="2"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(+e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPara;
