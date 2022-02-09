import React, { useEffect } from "react";
import "../style/Tag.css";

export const Tag = () => {
  const tagInput = document.querySelector(".tag-input");
  function addTag(e) {
    const tags = document.querySelector(".tags");
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      // if (e.isComposing === true) return;
      if (e.key === "Enter") {
        const newTag = document.createElement("div");
        newTag.setAttribute("class", "tag");
        newTag.textContent = e.target.value;
        tags.appendChild(newTag);

        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "tag-remove-btn");
        removeBtn.textContent = "x";
        newTag.appendChild(removeBtn);
        e.target.value = "";

        removeBtn.addEventListener("click", (e) => {
          e.target.parentNode.remove();
        });
      }
    }
  }
  return (
    <div>
      <h1>Tag</h1>
      <div className="tag-box">
        <div className="tags">
          <div className="tag">
            태그를
            <button
              onClick={(e) => {
                e.target.parentNode.remove();
              }}
              className="tag-remove-btn"
            >
              x
            </button>
          </div>
          <div className="tag">
            추가해보세요
            <button
              onClick={(e) => {
                e.target.parentNode.remove();
              }}
              className="tag-remove-btn"
            >
              x
            </button>
          </div>
        </div>
        <input
          className="tag-input"
          type="text"
          placeholder="press enter to add tags"
          autoFocus
          onKeyUp={(e) => {
            addTag(e);
          }}
        />
      </div>
    </div>
  );
};
