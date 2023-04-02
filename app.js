//seleccionar la clase
// luego crear la funcion
//crear la clase y colocarla con toogle
// crear el toogle

const dMode = document.querySelector(".btn");
const  divBox = document.querySelector(".container")

const keys = document.querySelectorAll(".key");
const display__input = document.querySelector(".display .input");
const display__output = document.querySelector(".display .output");
let input = "";

for (let key of keys) {
  const value = key.dataset.key;
  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      display__input.innerHTML = " ";
      display__output.innerHTML = " ";
    } else if (value == "backS") {
      input = input.slice(0, -1);
      display__output.innerHTML = input;
      const display__input = document.querySelector(".display . input");
    } else if (value == "=") {
      let result = eval(input);
      display__output.innerHTML = result;
    } else {
      input += value;
      display__input.innerHTML = input;
    }
  });
}

   dMode.addEventListener("click",
   function(){
     divBox.classList.toggle("mDark")
   }

   )
