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

  await axios.post("/", data);
}


// Read todo
let read = async () => {
  let response = await axios.get("/api");
  let data = response.data;

  let tableData = [];

  data.forEach((item) => {
    console.log(item.time, item.todo);
    tableData.push(`
      <tr>
        <td>${item.time}</td>
        <td contenteditable="true">${item.todo}</td>
      </tr>`);
  });

  console.log(tableData);

  tbody.innerHTML = tableData.toString().replaceAll(",", "");;
}


// Event Listners
btn.addEventListener("click", (e) => {
  e.preventDefault();
  create();
  read();
});