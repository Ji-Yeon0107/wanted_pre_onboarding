import React from "react";
import "../style/Toggle.css";

export const Toggle = () => {
  const toggleMainBg = () => {
    const bg = document.querySelector(".bg");
    const bgClasses = bg.classList;
    bgClasses.toggle("night");
    bgClasses.toggle("day");
  };
  const handleToggleBtn = () => {
    const bgToggleBox = document.querySelector(".toggle-box");
    const bgToggleBtn = document.querySelector(".toggle-btn");
    const bgToggleBtnClasses = bgToggleBtn.classList;
    const bgToggleBoxClasses = bgToggleBox.classList;
    bgToggleBtnClasses.toggle("toggle-btn__night");
    bgToggleBtnClasses.toggle("toggle-btn__day");
    bgToggleBoxClasses.toggle("toggle-box__day");
  };

  return (
    <>
      <h1>Toggle</h1>
      <div className="toggle-box" onClick={(e) => {
            toggleMainBg();
            handleToggleBtn(e);
          }}>
        <button className="toggle-btn toggle-btn__night"></button>
      </div>
      <section className="bg night"></section>
    </>
  );
};
