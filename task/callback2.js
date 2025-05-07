// // var pin = 2410;
// // var avlbal = 50000;

// // function checkbalance()
// // {
// //     console.log("avlbal is:-"+avlbal);
// // }

// // function withdrow()
// // {
// //     let amount = parseInt(prompt("enter ur amount:-"));
// //     if(amount < avlbal)
// //     {
// //         console.log("succesfully withdrow."+amount);
// //         avlbal -= amount;
// //         console.log("rest balance");
// //         checkbalance()
// //     }
// //     else{
// //         console.log("insufficient balance");
// //     }
// // }

// // function deposit()
// // {
// //     let amount = parseInt(prompt("enter ur amount:-"));
// //     console.log("succesfully deposit"+amount);

// //     avlbal += amount;
// //     console.log("after deposit ur avlbal is:-");
// //     checkbalance() 
// // }


// // let enterATM = confirm("do u want to enter atm (yes / no):-");
// // if(enterATM == true)
// // {
// //     let accno = parseInt(prompt("enter your accno:-"));
// //     let upin = parseInt(prompt("enter your upin")); 
// //     if(pin == upin)
    
// //         {
// //             let choice =parseInt(prompt("1. Check balance\n2. Withdraw\n3. Deposit\nEnter your choice:"));
// //             switch(choice)
// //             {
// //                 case 1:
// //                     checkbalance();
// //                     break;

// //                 case 2:
// //                     withdrow();
// //                     break;

// //                 case 3:
// //                     deposit();
// //                     break;      
// //             }
// //         }else{
// //             console.log("password is incorrect");    
// //     }
// // }





// var products = [
//     {
//         id:101,
//         name:"Iphone",
//         category:"Mobile",
//         price:100000,
//         color:["red","black","blue","green","yellow"],
//         isAvailable:true,
//         details:{
//             description:"Apple iPhone 13 Pro Max",
//             weight:1500,
//             screenSize:6.1,
//             batteryLife:48,
//         }
//     },
//     {
//         id:102,
//         name:"Samsung Galaxy S21 Ultra",
//         category:"Mobile",
//         price:75000,
//         color:["white","black","blue","green"],
//         isAvailable:false,
//         details:{
//             description:"Samsung Galaxy S21 Ultra 5G",
//             weight:1600,
//             screenSize:6.7,
//             batteryLife:45,
//         }

//     },
//     {
//         id:103,
//         name:"Dell laptop",
//         category:"Laptop",
//         price:85000,
//         color:["white","black","blue","aqua"],
//         isAvailable:false,
//         details:{
//             description:"widows with tablets",
//             weight:1400,
//             screenSize:6.4,
//             batteryLife:42,
//         }

//     }
// ]


// // var x = products.filter((pro) =>{
// //     pro.category == "mobile"
// // })

// // console.log(x);


// var x = products.filter((pro) =>
// {
//     pro.color == "white"
// })

// console.log(x);




var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]



var findfemaleempinit = departments.find((depart) => depart.name === "it").filter((emp) => emp.gender === "female")

console.log(findfemaleempinit);