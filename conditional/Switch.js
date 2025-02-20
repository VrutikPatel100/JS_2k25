var a = parseInt(prompt("enter first number"));
var b = parseInt(prompt("enter second number"));

var choice = prompt("1 for Addition \n2 for subtraction \n3 multiplication \n4 divition \n\n enter your choice :- ");

switch(choice){
    case "1":
        console.log("Addition :- " , parseInt(a) + parseInt(b));
        break;

    case "2":
        console.log("subtraction :- " , a-b);
        break;

    case "3":
        console.log("multiplication :- " , a*b);
        break;

    case "4":
        console.log("divition :- " , a/b);
        break;

    default:
        console.log("invalid choice!:-");
        break;
}

// var a = "royal";
// var b = "technosoft";

// console.log(a+b);