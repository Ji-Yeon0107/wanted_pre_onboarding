import React from "react";
import "../style/Modal.css";

export const Modal = () => {
  const itemArr = [1, 2, 3];
  const modalBoxArr = [1, 2, 3];
  function openModal(i) {
    document.querySelector("body").style.overflow = "hidden";
    const modalBoxes = document.querySelectorAll(".modal-box");
    modalBoxes[i].classList.toggle("modal__off");
    modalBoxes[i].classList.toggle("modal__on");
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("modal__off");
    modalContainer.classList.toggle("modal__on");
  }
  function closeModal(e) {
    document.querySelector("body").style.removeProperty("overflow");
    e.target.parentNode.classList.toggle("modal__off");
    e.target.parentNode.classList.toggle("modal__on");
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("modal__off");
    modalContainer.classList.toggle("modal__on");
  }

  return (
    <>
      <h1>Modal</h1>
      <div className="article-box">
        {itemArr.map((item, i) => {
          return (
            <div key={i} className="article">
              <button
                className="detail-btn"
                onClick={() => {
                  openModal(i);
                }}
              >
                자세히 보기{item}
              </button>
            </div>
          );
        })}
      </div>
      <div className="modal-container modal__off">
        {modalBoxArr.map((box, i) => {
          return (
            <div key={i} className="modal-box modal__off">
              <button
                className="modal-exit-btn"
                onClick={(e) => {
                  closeModal(e);
                }}
              >
                X
              </button>
              <div className="modal-text">상세설명{box}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
