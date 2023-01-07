let rangeInput = document.querySelector(".range-input");

let resultInput = document.querySelector(".password-box input");

let slideText = document.querySelector(".slider-text");
let button = document.querySelector(".generate-button");
let copyIcon = document.getElementById("copyIcon");
let statusEl = document.querySelector(".status")
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = upperCase.toLowerCase();
let numbers = "1234567890";
let symbols = "!@#$%^&*(){}:<>?_";
let string = upperCase+lowerCase+numbers+symbols;
function check(){
    let value = rangeInput.value;
    //upate the slider text value
    slideText.textContent = value;
    //check the password status
    generate();
}
rangeInput.addEventListener("input",check)
//generating the password
function generate(){
    password =""
    resultInput.value =""
    for(let i=0;i<rangeInput.value;i++){
        let index = Math.floor(Math.random()*string.length)
        password+=string[index];
    }
    setTimeout(()=>resultInput.value = password,200)  
}
generate();
button.addEventListener("click",generate);


//copy the password
function copy(){
    resultInput.select()
    navigator.clipboard.writeText(resultInput.value);
    copyIcon.classList.replace("bi-clipboard","bi-check2");
    copyIcon.style.color = "green";
    setTimeout(function(){
        copyIcon.classList.replace("bi-check2","bi-clipboard")
        copyIcon.style.color  = "black";

    },2000)
}
copyIcon.addEventListener("click",copy)