var company = [
    {
      companyname: "Tech Solutions",
      employees: [
        {
          id: 1,
          name: "John Smith",
          age: 35,
          position: "Software Engineer",
          email: "john.smith@techsolutions.com",
          phone: "555-1234",
          salary: 85000
        },
        {
          id: 2,
          name: "Emily Davis",
          age: 29,
          position: "QA Engineer",
          email: "emily.davis@techsolutions.com",
          phone: "555-5678",
          salary: 62000
        }
      ],
    },
    {
      companyname: "Marketing Masters",
      employees: [
        {
          id: 1,
          name: "Sophia Brown",
          age: 32,
          position: "Marketing Manager",
          email: "sophia.brown@marketingmasters.com",
          phone: "555-2345",
          salary: 75000
        },
        {
          id: 2,
          name: "James Taylor",
          age: 28,
          position: "Social Media Analyst",
          email: "james.taylor@marketingmasters.com",
          phone: "555-6789",
          salary: 55000
        }
      ],
    },
    {
      companyname: "Data Dynamics",
      employees: [
        {
          id: 1,
          name: "Liam Wilson",
          age: 40,
          position: "Data Scientist",
          email: "liam.wilson@datadynamics.com",
          phone: "555-3456",
          salary: 95000
        },
        {
          id: 2,
          name: "Olivia Johnson",
          age: 27,
          position: "Data Analyst",
          email: "olivia.johnson@datadynamics.com",
          phone: "555-9876",
          salary: 67000
        }
      ],
    },
    {
      companyname: "Eco Innovations",
      employees: [
        {
          id: 1,
          name: "Noah Green",
          age: 38,
          position: "Sustainability Consultant",
          email: "noah.green@ecoinnovations.com",
          phone: "555-1111",
          salary: 87000
        },
        {
          id: 2,
          name: "Emma White",
          age: 30,
          position: "Environmental Analyst",
          email: "emma.white@ecoinnovations.com",
          phone: "555-2222",
          salary: 68000
        }
      ],
    },
    {
      companyname: "Healthcare Hub",
      employees: [
        {
          id: 1,
          name: "Ethan Martinez",
          age: 45,
          position: "Medical Researcher",
          email: "ethan.martinez@healthcarehub.com",
          phone: "555-3333",
          salary: 98000
        },
        {
          id: 2,
          name: "Ava Rodriguez",
          age: 34,
          position: "Clinical Specialist",
          email: "ava.rodriguez@healthcarehub.com",
          phone: "555-4444",
          salary: 79000
        }
      ],
    }
  ]


//   List all company names.

//(1) Extract and display only the companyName fields from the JSON array.
// Find employees earning more than $80,000.

/*
var companyname = company.map((com)=>{
    return com.companyname;
})
console.log(companyname);

var x = company.map((com)=>{
  return com.employees.filter((emp)=>{
    return emp.salary > 80000;
  })
})
console.log(x);   */



//(2) Search through all employees arrays and list employees with a salary greater than 80,000.
// Count the total number of employees in all companies.

// var x = company.reduce((acc, company)=> {
//   return acc + company.employees.length;
// }, 0);

// console.log(x);    


//(3) Count the total number of employee objects across all companies.
// Find the position of an employee named "Emily Davis".

// const findPosition = company.find((comp)=> comp.employees.find((emp)=> emp.name === "Emily Davis")).employees.find((emp)=> emp.name === "Emily Davis").position
//  console.log(findPosition);


//(4) Search for "Emily Davis" in the employees array and display her position.
// List all unique positions held by employees.




// (5) Extract and list all unique values from the position fields across all employees.
// Find which company "Liam Wilson" works for.

// const companyName = company.find((comp)=> comp.employees.find((emp)=> emp.name === "Liam Wilson")).companyname
//  console.log(companyName);


//(6) Search for "Liam Wilson" in the employees arrays and display the companyName he belongs to.
// Calculate the average salary of employees in "Tech Solutions".

//  const findTechSal = company.find((comp)=> comp.companyname === "Tech Solutions").employees.reduce((sum ,emp)=> sum + emp.salary/2,0);
// console.log(findTechSal);

//(7) Sum up the salary values of employees in "Tech Solutions" and divide by the number of employees in that company.
// Find employees who are older than 30.

// var x = company.map((com)=> com.employees.filter((emp)=> emp.age > 30))
// console.log(x);


// (8) Search through all employees arrays for employees with an age greater than 30 and list their details.
// Find the youngest employee in the dataset.

// var x = company.find((com)=> com.employees.filter((emp)=> emp.age < 30))
// console.log(x);


//(9) Identify the employee with the smallest age value across all companies.
// Count how many employees have an email domain of "datadynamics.com".

// const findEmail = company.map((comp)=> comp.employees.reduce((sum , emp)=> sum + emp.email.endsWith("datadynamics.com"),0))
// console.log(findEmail);


// (10) Check the email field of all employees and count how many contain "datadynamics.com" as the domain.

// var x = company.map((com)=> com.employees.filter((emp) => emp.email.includes("datadynamics.com")))
// console.log(x);