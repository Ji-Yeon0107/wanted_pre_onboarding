import React from "react";
import "../style/tab.css";

export const Tab = () => {
  const contentTextArr = [
    `
    <h1>첫 번째 탭</h1>
    <div>다음 탭을 클릭해보세요</div>
    `,
    `
    <h1>두 번째 탭</h1>
    <div>다음 탭을 클릭해보세요</div>

    `,
    `
    <h1>세 번째 탭</h1>
        <div>다음 탭을 클릭해보세요</div>

    `,
    `
    <h1>네 번째 탭</h1>
        <div>다음 탭을 클릭해보세요</div>

    `,
  ];
  const itemArr = [1, 2, 3, 4];
  function handleTab(e, i) {
    const content = document.querySelector(".content");
    const itemClass = e.target.classList;
    const tabItems = document.querySelectorAll(".tab-list-item");

    tabItems.forEach((item) => {
      item.classList = "tab-list-item";
    });

    if (tabItems[0] !== e.target) {
      tabItems[0].style.backgroundColor = "transparent";
    }

    itemClass.toggle("selected");
    content.innerHTML = contentTextArr[i];
  }

  return (
    <>
      <h1>Tab</h1>
      <ul className="tab-list">
        {itemArr.map((item, i) => {
          return (
            <li
              key={i}
              onClick={(e) => handleTab(e, i)}
              className="tab-list-item"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="content">
        <h1>첫 번째 탭</h1>
        <div>다음 탭을 클릭해보세요</div>
      </div>
    </>
  );
};
