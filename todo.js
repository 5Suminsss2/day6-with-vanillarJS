const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'todo';

let toDos = [];

/*todo 지우기*/
function deleteToDo(event) {
  /*localStorage의 todo지우기*/
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  /*지워진 todo제외한 todo들을 반환함*/
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });

  /*cleanToDos를 toDos 배열에 넣고 저장함*/
  toDos = cleanToDos;
  saveToDos();
}

/*toDos 저장*/
function saveToDos() {
  /*toDos라는 key와 toDos의 배열을 value값을 넣는다.*/
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
  // toDos는 앞에서 설정한 toDos배열인가?
}

/*todo 입력한거 html에 그리기*/
function paintToDo(text) {
  /*li, button, span을 js에서 생성하기*/
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  /*새로운 id의 값 생성*/
  const newId = toDos.length + 1;

  /*delBtn, span에 들어갈 말과 action 적기*/
  delBtn.innerText = "😣";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = " " +text;

  /*li에 생성한 delBtn, sapn을 넣고 그 li를 toDoList에 넣는다 */
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  /*todo에 대한 객체를 생성함*/
  const toDoObj = {
    text: text,
    id: newId
  }

  /*todos 배열에 만든 toDoObj넣기*/
  toDos.push(toDoObj);

  /*그린 todo를 저장*/
  saveToDos();
}

/*form 제출하기*/
function handleSubmit(event) {
  /*제출 이벤트 없애기 == 만약 너가 form을 갖고 있는 것을 계속 원한다면
  그 페이지를 리프레싱해서 form이 사라지는 것을 막기 위해??*/
  event.preventDefault();
  /*그리기*/
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  /*제출 후 form에 쳤던 값을 사라지게 함*/
  toDoInput.value="";
}

/*todo 로딩하기*/
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    /*값을 객체로 바꿔 준 후 그 객체의 todo 하나하나씩 text로 그려주기*/
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (todo){
      paintToDo(todo.text);
    })
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
