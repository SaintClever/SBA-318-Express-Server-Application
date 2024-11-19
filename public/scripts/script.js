// Append Key Value Pairs
let appendBtn = document.querySelector("#append");
let pairs = document.querySelector("#pairs");

// Crud Buttons
let create = document.querySelector("#create");
let read = document.querySelector("#read");
let update = document.querySelector("#update");
// let delete_ = document.querySelector("#delete");

// Update Dialog Buttons 
let dialogSubmit = document.querySelector("#dialogSubmit");
let deleteBtn = document.querySelector("#delete");

// NOTE: fixing
let userId = document.querySelector("#userId");

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


let updateData = async () => {
  dialog.style.display = "inherit";

  dialogSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Submited");
    dialog.style.display = "none";
  });

  // await axios.put('/api', {"userId": userId.value});
  // location.reload();
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

update.addEventListener("click", (e) => {
  e.preventDefault();
  updateData();
});