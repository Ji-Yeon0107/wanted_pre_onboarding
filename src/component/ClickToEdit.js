import React from "react";
import "../style/ClickToEdit.css";

export const ClickToEdit = () => {
  function onSubmit(event) {
    event.preventDefault();
    const nameInput = document.querySelector(".input__name");
    const ageInput = document.querySelector(".input__age");
    const name = document.querySelector(".name");
    const age = document.querySelector(".age");
    name.innerText = nameInput.value;
    age.innerText = ageInput.value;
  }
  return (
    <div class="submit" onClick={onSubmit}>
      <h1>Click To Edit</h1>
      <form>
        <label>이름</label>
        <input
          type="text"
          className="input__name"
          id="name"
          placeholder="이름"
          required
        />
        <label>나이</label>
        <input type="number" className="input__age" required />
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
