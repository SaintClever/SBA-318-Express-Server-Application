let todo = document.querySelector("#todo");
let btn = document.querySelector("#btn");

// Data
let data = {
  "todo": todo.value
}

// Add todo
let add = () => {
  axios.post("/", data);
}

// Event Listners
btn.addEventListener("click", (e) => {
  add();
});