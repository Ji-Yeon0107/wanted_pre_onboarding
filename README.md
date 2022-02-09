# wanted_pre_onboarding

- 구현한 방법과 이유에 대한 간략한 내용
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
- - rendering이 되기 전에 함수를 불러와서 해당 요소를 찾지 못하는 점..
- - 이벤트에 의해 새로 만들어지는 요소에 이벤트를 줄 때->innerHTML로 class를 부여하니까 찾지 못했다..!
-         newTag.innerHTML = `${e.target.value} <button className="tag-remove-btn">x</button>`;
                const removeBtn = document.querySelector(".tag-remove-btn");
- - keyboard down 한글 한글자씩 더 나오는 문제 -> keyUp
- 자세한 실행 방법
