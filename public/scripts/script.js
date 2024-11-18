let firstName = document.querySelector("#firstName");
let submit = document.querySelector("#submit");


submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  let data = {"firstName": firstName.value};
  axios.post('/api', data);
  location.reload();
});