
// function create korbo fast ---
const loadTodo = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url);
  const data = await res.json();
  displayTodo(data);
};
// ----------------------
// inspact theke todo object copy kore rakhlam 
// {
//     "userId": 4,
//     "id": 65,
//     "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
//     "completed": false
// }
// ------------------------
// ekhon Todo k display korar jonno fuction create korbo 
const displayTodo = (todos) => {
  // console.log(todos)

  // now step 1: get the container
  const todoContainer = document.getElementById("todo-container");
  // todoContainer e jodi kichu thake ta empty kore felow
  todoContainer.innerHTML = "";

  // ekhon todo er each element dhore dhore card kore felbo

  todos.forEach(todo => {
    console.log(todo);

    // todo Card create korchi
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
<div class="todo-card">
<p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}
</p>
<h4>${todo.title}</h4>
</div>
`;
    // ekhon todoContainer er vitor todoCard k append kore debo
    todoContainer.append(todoCard);
  });

};
loadTodo();