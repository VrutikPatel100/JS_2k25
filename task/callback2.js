var pin = 2410;
var avlbal = 50000;

function checkbalance()
{
    console.log("avlbal is:-"+avlbal);
}

function withdrow()
{
    let amount = parseInt(prompt("enter ur amount:-"));
    if(amount < avlbal)
    {
        console.log("succesfully withdrow."+amount);
        avlbal -= amount;
        console.log("rest balance");
        checkbalance()
    }
    else{
        console.log("insufficient balance");
    }
}

function deposit()
{
    let amount = parseInt(prompt("enter ur amount:-"));
    console.log("succesfully deposit"+amount);

    avlbal += amount;
    console.log("after deposit ur avlbal is:-");
    checkbalance() 
}


let enterATM = confirm("do u want to enter atm (yes / no):-");
if(enterATM == true)
{
    let accno = parseInt(prompt("enter your accno:-"));
    let upin = parseInt(prompt("enter your upin")); 
    if(pin == upin)
    
        {
            let choice =parseInt(prompt("1. Check balance\n2. Withdraw\n3. Deposit\nEnter your choice:"));
            switch(choice)
            {
                case 1:
                    checkbalance();
                    break;

                case 2:
                    withdrow();
                    break;

                case 3:
                    deposit();
                    break;      
            }
        }else{
            console.log("password is incorrect");    
    }
}



