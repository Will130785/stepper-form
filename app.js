//UI Variables
const selectStep = document.querySelectorAll(".step-text");
const formGroup = document.querySelectorAll(".form-group");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const nextBtn = document.querySelectorAll(".btn-cont");
const backBtn = document.querySelectorAll(".btn-back");
const iconOne = document.querySelector(".icon1");
const iconTwo = document.querySelector(".icon2");
const iconThree = document.querySelector(".icon3");

//Object to store input data
let inputData = {
  username: "",
  password: ""
};

//Function to test which steps have been carried out
testStep = (e, step, index) => {
 //Open step one and ensure others are currently not displayed
  if(e.target.parentElement.parentElement.classList.contains("step1")){
      formGroup[index].classList.toggle("active");
     formGroup[1].classList.remove("active");
     formGroup[2].classList.remove("active");
    } else if(e.target.parentElement.parentElement.classList.contains("step2")){
      //Check that step one has been completed before allowing user to open step 2
      if(inputData.username === ""){
        console.log(inputData);
        formGroup[0].classList.toggle("active");
      } else {
        //If step one has been completed open step 2 and close other steps
        formGroup[index].classList.toggle("active");
        formGroup[0].classList.remove("active");
        formGroup[2].classList.remove("active");
      }
 
    } else if(e.target.parentElement.parentElement.classList.contains("step3")){
      //Check that step 1 has been completed and if not open up step 1
      if(inputData.username === ""){
        formGroup[0].classList.toggle("active");
        formGroup[1].classList.remove("active");
        formGroup[2].classList.remove("active");
        //Check to see if step 1 has been completed but step 2 has not
      } else if(inputData.username && inputData.password === ""){
        formGroup[1].classList.toggle("active");
        formGroup[0].classList.remove("active");
        formGroup[2].classList.remove("active");
      } else {
        //If step 1 and 2 have been completed open step 3 and close others
        formGroup[index].classList.toggle("active");
        formGroup[0].classList.remove("active");
        formGroup[1].classList.remove("active");
      }
      
    }
}

//Select step
selectStep.forEach((step, index) => {
  //Add event listener to steps
  step.addEventListener("click", e => {
 
  //Test which step was clicked
    testStep(e, step, index);
  });
  
});

//Event listener for continue button
nextBtn.forEach((step, index) => {
  step.addEventListener("click", e => {
 //Check which button is clicked  
    if(e.target.parentElement.classList.contains("btn-step1")){
      //If username is empty alert user that they must enter one
      if(username.value === ""){
        alert("Please enter username");
      } else {
        //If user name is completed, store the value in inputData object and open up next step
        inputData.username = username.value;
        formGroup[0].classList.remove("active");
        formGroup[1].classList.add("active");
        iconOne.style.backgroundColor = "green";
        username.style.borderBottom = "2px solid green";
      }
    } else if(e.target.parentElement.classList.contains("btn-step2")){
      //Check password input value and alert user to enter password if empty
      if(password.value === ""){
        alert("Please enter a password");
      } else {
        //If password field has been completed, store value in inputData object and open up next step
        inputData.password = password.value;
        console.log(inputData)
        formGroup[1].classList.remove("active");
        formGroup[2].classList.add("active");
       iconTwo.style.backgroundColor = "green";
        password.style.borderBottom = "2px solid green";
      }
    } else if(e.target.parentElement.classList.contains("btn-step3")){
      //Alert user that form is submitted
      alert("You are about to submit the form");
      //Change 3rd icon to green
      iconThree.style.backgroundColor = "green";
      
      //After three seconds, reset everything back to its original state
      setTimeout(() => {
        formGroup[0].classList.remove("active");
        formGroup[1].classList.remove("active");
      formGroup[2].classList.remove("active");
      inputData.username = "";
      inputData.password = "";
      username.value = "";
      password.value = "";
      username.style.borderBottom = "2px solid rgb(11, 143, 224)";
      password.style.borderBottom = "2px solid rgb(11, 143, 224)";
      iconOne.style.backgroundColor = "rgb(11, 143, 224)";
      iconTwo.style.backgroundColor = "rgb(11, 143, 224)";
      iconThree.style.backgroundColor = "rgb(11, 143, 224)";
        alert("Form submitted");
        
      }, 3000);
    }
    
  });
});

//Event listener for back button
backBtn.forEach((step, index) => {
  step.addEventListener("click", e => {
    if(e.target.parentElement.classList.contains("btn-step2")){
      formGroup[0].classList.add("active");
      formGroup[1].classList.remove("active");
    } else if(e.target.parentElement.classList.contains("btn-step3")) {
      formGroup[1].classList.add("active");
        formGroup[2].classList.remove("active");
    }
    
  });
});