const emailInput1 = document.getElementById("email1");
const errorMessage1 = document.getElementById("error1");
const errorMessage2 = document.getElementById("error2");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const emailInput2 = document.getElementById("email2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

emailInput1.addEventListener("focus",()=>{
  emailInput1.value= "";
});
emailInput2.addEventListener("focus",()=>{
  emailInput2.value = "";
});

btn1.addEventListener("click",function(event){
  event.preventDefault();
  
  if((!emailInput1.value)){
    errorMessage1.style.display = "block";
    emailInput1.style.borderColor = "#EF4877";
  }
  const emailValue1 = emailInput1.value;
  if(!emailValue1.includes("@gmail.com")){
    emailInput1.style.borderColor = "#EF4877";
    errorMessage1.style.display = "block";
  }else{
    emailInput1.style.borderColor = "black";
    errorMessage1.style.display = "none"
  }

});
btn2.addEventListener("click",function(event){
  event.preventDefault();
  if((!emailInput2.value)){
    emailInput2.style.borderColor = "#EF4877";
    errorMessage2.style.display = "block";
  }
  const emailValue2 = emailInput2.value;
  if(!emailValue2.includes("@gmail.com")){
    emailInput2.style.borderColor = "#EF4877";
    errorMessage2.style.display = "block";
  }else{
    emailInput2.style.borderColor = "black";
    errorMessage2.style.display = "none";
  }
});