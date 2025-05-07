// function printTxt(){
//     var name = document.getElementById("name");
//     var nameErr = document.getElementById("nameErr");

//     console.log(name.value);

//     if(name.value.length < 3)
//     {
//         nameErr.innerHTML = "Name should be at least 3 characters."
//         nameErr.style.color = "red";
//         name.style.outline="2px solid red";
//     }
//     else{
//         nameErr.innerHtml = name.value;
//         nameErr.style.outline="2px solid green";
//     }
    
// }


// function printlstTxt(){
//     var lastname = document.getElementById("lastname");
//     var lastnameErr = document.getElementById("lastnameErr");

//     console.log(lastname.value);

//     if(lastname.value.length < 3)
//     {
//         lastnameErr.innerHTML = "Lastname should be at least 3 characters."
//         lastnameErr.style.color = "red";
//         lastname.style.outline="2px solid red";
//     }
//     else{
//         lastnameErr.innerHtml = lastname.value;
//         lastnameErr.style.outline="2px solid green";
//     }
// }


// fuction printAge(){
//     var age = document.getElementById("age");
//     console.log(age.value);


//     if(age.value < 18)
//     {
//         AgeError.innerHTML="Age must be 18 above."
//         AgeError.style.color="red";
//         age.style.outline="2px solid red";
//     }
//     else{
//         AgeError.innerHTML = age.value;
//         AgeError.style.outline="2px solid green";

//     }
    
// }


function printAge() {
    var age = document.getElementById("age");
    var AgeError = document.getElementById("AgeError"); 
    console.log(age.value);

 
    var ageValue = parseInt(age.value, 10);

    if (ageValue < 18) {
        AgeError.innerHTML = "Age must be 18 or above.";
        AgeError.style.color = "red";
        age.style.outline = "2px solid red"; 
    } else {
        AgeError.innerHTML = age.value; 
        AgeError.style.color = "green"; 
        age.style.outline = "2px solid green"; 
    }
}

// function printemail(){
//     var email = document.getElementById("email");
//     console.log(email.value);

//     if(email.endswith(".com"))
//     {
//         emailError.innerHTML="Email must end with.com"
//         emailError.style.color="red";
//         email.style.outline="2px solid red";
//     }else{
//         emailError.innerHTML = email.value;
//         emailError.style.outline="2px solid green";
//     }
    
// }





