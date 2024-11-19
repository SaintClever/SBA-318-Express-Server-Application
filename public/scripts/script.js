let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let submit = document.querySelector("#submit");
let userId = document.querySelector("#userId");
let deleteBtn = document.querySelector("#delete");


let addUser = async () => {
  let time = new Date();

  let data = {
    "firstName": firstName.value,
    "lastName": lastName.value,
    "email": email.value,
    "createTime": time.toLocaleString()
  };

  await axios.post('/api', data);
  location.reload();
}

let updateUsers = async () => {
  await axios.put('/api', {"userId": userId.value});
  location.reload();
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addUser();
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateUsers();
});