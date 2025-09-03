const display=document.getElementById("Input");
const operator=document.querySelectorAll(".operator");
const number=document.querySelectorAll(".number");
const clear=document.querySelector(".deleteAll");
const deletePrevious=document.querySelector(".deletePrevious");
const equal=document.querySelector(".equal");
const decimal=document.querySelector(".decimal")
let expression="";
let justCalculated="";
function updateDisplay(){
  display.value=expression;
 }  // Set the initial value of display to be expression meaning "".


number.forEach(button=>{
button.addEventListener("click",()=>{
handleNumber(button.textContent);
})
updateDisplay()
});

operator.forEach(button=>{
button.addEventListener("click",()=>{
handleOperator(button.textContent);
})
updateDisplay()
});

decimal.addEventListener("click",()=>{
 handleDecimal();
 updateDisplay()
});

equal.addEventListener("click",()=>{
 Calculate();
 updateDisplay()
});

clear.addEventListener("click",()=>{
  expression="";
  updateDisplay();
})

deletePrevious.addEventListener("click",()=>{
  if (expression.length>1){
    expression=expression.slice(0,-1) //0,-1 means that the last string is deleted.
  }
  else{
    expression="";
  }
  updateDisplay();
})

document.addEventListener("keydown",(event)=>{
const key=event.key;

if (!isNaN(key)){
  handleNumber(key);
  updateDisplay();
}
else if('+-/*'.includes(key)){
  handleOperator(key);
  updateDisplay()
}
else if (key==="."){
  handleDecimal();
  updateDisplay()
}
else if (key==="="|| key==="Enter"){
  event.preventDefault();
  Calculate();
  updateDisplay();
}
else if (key==="Escape" || key==="Delete"){
expression="";
updateDisplay();
}
else if (key==="Backspace"){
  
   if (expression.length>1){

expression=expression.slice(0,-1) //0,-1 means that the last string is deleted.
  }
  else{
    expression="";
  }
  updateDisplay();
}
})

//Handling functions.
function handleNumber(num){
  if (justCalculated) {
    // If a calculation just happened, reset expression
    expression = num;
    justCalculated = false;
  }
  if (expression==="0"){
    expression=num;
  }
  else{
    expression+=num;
  }
};

function handleOperator(op){
const lastChar=expression?.[expression.length -1]; //It is like saying, const char="James", const lastChar=char[char.length-1] where, char.length is 5 and deduct 1, it is 4. So, lastChar becomes char[4] meaning 's'. 

if ("+-*/".includes(lastChar)){ //Does our lastCharacter include any of the operators? 
  expression=expression.slice(0,-1)+op; //If yes, remove it and then join the operator you pick.
}
else{
  expression+=op;
}
}

function handleDecimal() {
  if (expression===""){
    expression="0."
  }
  else{
  const lastPart = expression.split(/[\+\-\*\/]/).pop(); //Split whenever it sees a character with "+-*/"
  

  if (!lastPart.includes(".")) {
    expression += ".";
    updateDisplay();
  }
}
}
function Calculate(){
  const divideByZero=/\/\s*0+(?!\d)/; //Regex to check if divide by 0 is here or not.
  try{
    if (divideByZero.test(expression)){ //Testing whether the condition's true or not.
    throw new Error("Error.");
    }
    expression=eval(expression).toString();
    justCalculated = true;
  }
  catch{
   expression="Error";
  }
  updateDisplay();
}
 updateDisplay();



