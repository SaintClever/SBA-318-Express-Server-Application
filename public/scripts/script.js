let firstName = document.querySelector("#firstName");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("#tbody");


btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(firstName.value);
  axios.post('/api', 
    {"firstName": firstName.value}
  );
  console.log('BTN script');
  location.reload();
});