// Append Key Value Pairs
let appendBtn = document.querySelector("#append");
let pairs = document.querySelector("#pairs");

// iframe
let iframe = document.querySelector("iframe");

// CRUD Buttons
let create = document.querySelector("#create");
let read = document.querySelector("#read");
let update = document.querySelector("#update");
let deleteBtn = document.querySelector("#delete");

// Dialogs
let dialogUpdate = document.querySelector("#dialogUpdate");
let dialogUpdateBtn = document.querySelector("#dialogUpdateBtn");
let dialogUpdateCancel = document.querySelector("#dialogUpdateCancel");

let dialogDelete = document.querySelector("#dialogDelete");
let dialogDeleteBtn = document.querySelector("#dialogDeleteBtn");
let dialogDeleteCancel = document.querySelector("#dialogDeleteCancel");

let textarea = document.querySelector("#textarea");
let id = document.querySelector("#id");

// Create Pair
// For ID
let count = 2;

let appendPairs = () => {
  let key = document.createElement("input");
  let value = document.createElement("input");
  let space = document.createTextNode(" ");

  key.setAttribute("type", "text");
  key.setAttribute("name", `key${count}`);
  key.setAttribute("id", `key${count}`);
  key.setAttribute("placeholder", `key${count}`);

  value.setAttribute("type", "text");
  value.setAttribute("name", `value${count}`);
  value.setAttribute("id", `value${count}`);
  value.setAttribute("placeholder", `value${count}`);
  pairs.append(key, space, value);
  count++;
};

// Create
let createPair = async () => {
  let time = new Date();
  let inputFields = pairs.querySelectorAll("input");
  let data = {};

  // Add user input data
  for (let i = 0; i < inputFields.length; i++) {
    if (i % 2 == 0) {
      data[inputFields[i].value] = inputFields[i + 1].value;
    }
  };
  // Add time
  data["createTime"] = time.toLocaleString();
  await axios.post('/api', data);
  location.reload();
};

// Update
let updateData = async () => {
  dialogUpdate.style.display = "inherit";

  dialogUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let obj = JSON.parse(textarea.value);
    axios.put('/api', obj);
    dialogUpdate.style.display = "none";
    location.reload();
  });

  dialogUpdateCancel.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Canceled");
    dialogUpdate.style.display = "none";
  });
};

// Delete
let deleteData = async () => {
  dialogDelete.style.display = "inherit";

  dialogDeleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    axios.delete(`/api/${id.value}`);
    dialogDelete.style.display = "none";
    location.reload();
  });

  dialogDeleteCancel.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Canceled");
    dialogDelete.style.display = "none";
  });
};

// AddEventListeners
appendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  appendPairs();
});

create.addEventListener("click", (e) => {
  e.preventDefault();
  createPair();
});

read.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("/api", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
});

update.addEventListener("click", (e) => {
  e.preventDefault();
  updateData();
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteData();
});