# 구현 방법

## Modal
버튼 클릭 이벤트가 발생하면 class의 추가, 제거가 일어납니다.
이를 통해 display:none, block을 설정합니다.
모달창이 떠있는 동안은 body의 overflow hidden속성으로 모달창 이외의 상호작용을 막습니다.
## Tab
각 탭에 해당하는 내용을 Array로 저장해 놓습니다.
map을 이용해, 대응되는 순서의 탭버튼을 눌렀을 때 Array의 내용을 순서대로 가져옵니다.
## Tag
keyup이벤트로 Enter key가 눌린 것을 식별합니다.
Enter key가 눌리면 새 Element를 생성합니다.
## Toggle
class의 추가,제거를 이용합니다.
## Click To Edit
click이벤트 발생 시, input의 value를 innerText로 넣어줍니다.

# 어려웠던 점, 해결
- keydown 이벤트로 input value를 전달할 때 한글일 경우 마지막에 한글자씩 더 나오는 문제 
  -> keyup 이벤트로 교체
- 이벤트에 의해 새로 만들어지는 요소에 이벤트를 전달하려고 때 요소가 null이 되는 문제
  -> (기존)innerHTML로 class를 부여하는 방식
  -> (해결)createElement, setAttribute, appendChild로 요소를 추가해주었다.
