let todo = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("#tbody");


// Create todo
let create = async () => {
  // Time
  let time = new Date();
  let timeLocalString = time.toLocaleString();

  // Data to send
  let db = {
    "todos": [
      {
        "time": timeLocalString,
        "todo": todo.value
      }
    ]
  };

  // Update frontend UI
  for (let i in db.todos) {
    tbody.innerHTML += `
    <tr>
      <td>${db.todos[i].time}</td>
      <td contenteditable="true">${db.todos[i].todo}</td>
    </tr>`;
  };


  let tr = tbody.querySelectorAll("tr");
  for (let i in tr) {
    if (tr[i].innerText !== undefined) {
      let dic = {
        "time": tr[i].innerText.split("\t")[0],
        "todo": tr[i].innerText.split("\t")[1]
      }
      db.todos.push(dic);
    }
  }
  
  await axios.post("/", db.todos);
}


// Read todo
(async () => {
  let response = await axios.get("/api");
  let data = response.data;

  let tableData = [];

  data.todos.forEach((item) => {
    // console.log(item.time, item.todo);
    tableData.push(`
      <tr>
        <td>${item.time}</td>
        <td contenteditable="true">${item.todo}</td>
      </tr>`);
  });

  tbody.innerHTML = tableData.toString().replaceAll(",", "");
})();


// Event Listners
btn.addEventListener("click", (e) => {
  e.preventDefault();
  create();
});

// tbody.addEventListener("focusout", (e) => {
//   e.preventDefault();
//   create();
// });