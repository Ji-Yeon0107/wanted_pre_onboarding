import React, { useEffect, useState } from "react";
import "../style/ClickToEdit.css";

export const ClickToEdit = () => {
  const [nameValue, setNameValue] = useState("갓오복");
  const [ageValue, setAgeValue] = useState(10);
  function onSubmit(event) {
    const nameInput = document.querySelector(".input__name");
    const ageInput = document.querySelector(".input__age");
    const name = document.querySelector(".name");
    const age = document.querySelector(".age");
    name.innerText = nameInput.value;
    age.innerText = ageInput.value;
  }
  function onChange(event, setInputValue) {
    const {
      target: { value },
    } = event;
    setInputValue(value);
  }

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div
      className="submit"
      onClick={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <h1>Click To Edit</h1>
      <form>
        <label>이름</label>
        <input
          type="text"
          className="input__name"
          id="name"
          placeholder="이름"
          maxLength="7"
          value={nameValue}
          onChange={(e) => {
            onChange(e, setNameValue);
          }}
          required
        />
        <label>나이</label>
        <input
          type="number"
          className="input__age"
          value={ageValue}
          onChange={(e) => {
            onChange(e, setAgeValue);
          }}
          required
        />
      </form>
      <div className="form-confirm">
        <div>
          이름:<span className="name"> </span>
        </div>
        <div>
          나이:<span className="age"></span>
        </div>
      </div>
    </div>
  );
};
