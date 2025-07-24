//DOM
// darck mode button
const dMode = document.querySelector(".btn");
//container
const divBox = document.querySelector('.container');
const containerButtons= document.querySelector(".keys");
const display__input = document.querySelector(".display .input");
const display__output = document.querySelector(".display .output");

//operator buttons
const buttons = [ "<"  ,"AC" ,"0", "+", "9", "8", "7", "-", "5", "6", "4", "/", "3" ," 2" , " 1" , "%" ,"="]
//calculator State
let outputCalculo = "";


// start logic for buttons
buttons.forEach( text => {
  const btn = document.createElement("button");
  btn.textContent = text;
  if(text=="="){
    btn.classList.add("operadors");
    btn.classList.add("equal");
  }
  //logic for operadors
if(text == "+" || btn.textContent =="-" || btn.textContent == "%" || btn.textContent == "/" || btn.textContent == "<" || btn.textContent == "AC"){
  btn.classList.add("operadors")
  
}

//intruducing text in input for every cliclk
  btn.addEventListener("click", () => pushButtonCalc(text))
  btn.classList.add("key");
  containerButtons.appendChild(btn);
});
// end logic buttons


//start logic calculator
function  pushButtonCalc(text){
    if(text === "AC"){
      display__input.innerHTML = "";
      display__output.innerHTML = "";
      outputCalculo = "";
  return;
    }

  if(text ==="<"){
   let back = display__input.textContent.slice(0, -1)
   display__input.innerHTML = back;
   outputCalculo = outputCalculo.slice(0, -1);
   
return;
  }

 //funtion try and ctach error logic
  if(text === "="){
 
    try {
        if(outputCalculo){
          const result = new Function( `return ${outputCalculo}`,  )();
          display__output.textContent = result;
          outputCalculo = result.toString()
          display__input.textContent = outputCalculo;

        };
             
    } catch (error) {
      display__input.innerHTML = "";
      outputCalculo = "";
      display__output .innerHTML = "ERROR"
      console.log("ERROR DE CALCULO");
            
      
    }
    return;
  }
  display__input.textContent += text;
  outputCalculo += text;
  display__output.textContent = "";
   
} 

//end try catch


//logic for dark mode
dMode.addEventListener("click", function () {
  divBox.classList.toggle("mDark");
});


