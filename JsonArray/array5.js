var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]



// 1.  Find the total number of employees in all companies.

//   var x = company.reduce((acc,com) => acc + com.employees.length,0)
//   console.log(x); 


// 2. Find the company where the employee named "riya" works.

// var x = company.find((com)=> com.employees.find((emp)=> emp.name==="riya"))
// console.log(x);


// 3. Calculate the average salary of employees across all companies.

// var x = company.reduce((acc,com)=> acc + com.employees .reduce((acc,emp)=> acc + emp.salary,0),0)    --------------------
// console.log(x);

// 4. Find the names of all employees who are married.


  
// 5. Count the total number of children across all employees

// var x = company.map((com)=>{
//     return com.employees;
// }).reduce((acc,emp)=>{
//     return acc+emp.child;
// },0);

// console.log(x);


// 7. List all female employees.

// var x = company.map((com)=>{
//     return com.employees.filter((emp)=> emp.gender === "female");
// });

// console.log(x);


// 8. Count how many employees are not married.

// var x = company.map((com)=>{
//     return com.employees.filter((emp)=>{
//         return!emp.IsMarried;
//     })
// })
// console.log(x);


// 9. Find the email addresses of all employees earning more than 30,000.

//   var x = company.map((com) =>{
//     return com.employees.filter((emp)=>{
//         return emp.salary > 30000;
//     }).map((employee)=>{
//         return employee.email;
//     });
//   });
//   console.log(x);
  

// 10. Identify the total number of employees for each company.

// var employeeCount = company.map(function(company) {
//     return {
//       companyName: company.name,
//       totalEmployees: company.employees.length
//     };
//   });

//   console.log(employeeCount);

