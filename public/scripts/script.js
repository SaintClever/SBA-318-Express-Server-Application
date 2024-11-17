let todo = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("#tbody");

// Create todo
let create = async () => {
  // Time
  let time = new Date();
  let timeLocalString = time.toLocaleString();

  // Data to send
  let data = {
    "time": timeLocalString,
    "todo": todo.value
  }

  // Update frontend UI
  tbody.innerHTML += `
    <tr>
      <td>${data.time}</td>
      <td contenteditable="true">${data.todo}</td>
    </tr>`;

  await axios.post("/", data);
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

  // console.log(tableData);

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