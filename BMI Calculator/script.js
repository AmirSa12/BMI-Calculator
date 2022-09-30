const male = document.querySelector(".male");
const female = document.querySelector(".female");
const slider = document.querySelector("#myRange");
const sliderOutput = document.querySelector("#demo");
const textAreaWeight = document.querySelector("#textarea-weight");
const textAreaAge = document.querySelector("#textarea-age");
const submitButton = document.querySelector("#submit-button");
const resultPage = document.querySelector(".blur-result");
const userCondition = document.querySelector("#condition");
const userBmi = document.querySelector("#bmi-int");
const message = document.querySelector("#motive-txt");
const closeButton = document.querySelector("#close");

let gender = undefined;
let userHeight = undefined;
let userWeight = undefined;
let userAge = undefined;
let result = undefined;
let userName = undefined;
let category = undefined;

sliderOutput.innerHTML = slider.value + "cm";

// .................................................. // 

male.addEventListener('click', (e) => {
    gender = 'male';
    // male.style.border = "#eb1455 1px solid"
    female.classList.remove("selecting");
    male.classList.add("selecting");
    resetValues();
    // console.log(gender);
})

female.addEventListener('click', (e) => {
    gender = 'female';
    male.classList.remove("selecting");
    female.classList.add("selecting");
    resetValues();
    // console.log(gender);
})

slider.oninput = (e) => {
    if (gender == undefined){
        alert("Please Choose Gender");
        resetValues(); // fixes the bug of moving the thumb
    } else {
    sliderOutput.innerHTML = slider.value + "cm" ;
    userHeight = slider.value;
    }
    // console.log(gender);
    // console.log(userHeight);
}

textAreaWeight.addEventListener('input', (e)=>{
    userWeight = textAreaWeight.value;
    // console.log(userWeight);
})

textAreaAge.addEventListener('input', (e)=>{
    userAge = textAreaAge.value;
    // console.log(userAge);
})

submitButton.addEventListener('click', (e) =>{
    if (userHeight === undefined,
        userWeight === undefined,
        userAge === undefined){    // checking if there is any missing info.
        alert("Missing Information, Try Again");
    } else {
        operation()
        resultPage.style.display = "block";
        userCondition.innerHTML = category;
        userBmi.innerHTML = result;
    }
})

closeButton.addEventListener("click",(e) =>{
    resultPage.style.display = "none";
    resetValues();
    male.classList.remove("selecting");
    female.classList.remove("selecting");
})




// .......... Functions ........... //



function resetValues(){
    slider.value = 0;
    sliderOutput.innerHTML = slider.value + "cm";
    textAreaAge.value = "";
    textAreaWeight.value = "";
    userHeight = undefined;
    userWeight = undefined;
    userAge = undefined;
    result = undefined;
    userName = undefined;
    category = undefined;
};

function operation(){
    userHeight = userHeight/100; // changes cm to m for the formula
    result = userWeight/(userHeight * userHeight); // the formula
    result = Math.round(result * 1e1) / 1e1; // to show one decimal, toFixed returns string, which is bad.
    // console.log(result);
    if (result <= 18.5){
        category = "Underweight";
        userCondition.style.color = "yellow";
        message.innerHTML = "Eat more!";
        message.style.fontSize = "28px";
    } else if (18.5 <= result && result <= 24.9) {
        category = "Normal";
        userCondition.style.color = "green";
        message.innerHTML = "You are in good shape!";
        message.style.fontSize = "28px";
    } else if (25 <= result && result <= 29.5){
        category = "Overweight";
        userCondition.style.color = "orange";
        message.innerHTML = "You are about to cross the line!";
        message.style.fontSize = "28px";
    } else {
        category = "Obesity";
        userCondition.style.color = "red";
        message.innerHTML = "Coach Potato, move your ass sometimes";
        message.style.fontSize = "28px";
    }
}
// function nameTaker(){
//     userName = window.prompt("enter name");
//     return userName;
// }

// userName = nameTaker();
// console.log(nameTaker());