#! /user/bin/env node

 import inquirer from "inquirer";

let myBalance = 20000;

let myPin =  2345;

let pinAns = await inquirer.prompt(
    
    {

        name : "pin",
        message : "Enter your number",
        type: "number"
    }
);

if(pinAns.pin === myPin){
    console.log("your pin is correct");
    
    let operationAns = await inquirer.prompt([{

        name: "operation",
        message: "Please selesct option",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"]
    }]);

    // if user select withdraw
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name : "amount",
                message: "Enter your amount",
                type: "number",

        }
    ]
);
        if(amountAns.amount <= myBalance){
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
    
    else{
        console.log('You have Insufficient balance');
        
    }
}
// if user select fast cash
   else if (operationAns.operation === "Fast Cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "list",
                choices: ["1000","3000","5000","22000"]

    }
]
);
if(fastCashAns.amount <= myBalance){
    let balance2 = myBalance - fastCashAns.amount;
    console.log(`the remaining balance is ${balance2}`);
    
}
   else{
    console.log('your have insufficient amount');
    
   }

   }
   else if (operationAns.operation === "check balance"){
    console.log(myBalance);
    
   }
         
         
   }

   else{
    console.log("your pin is wrong");
    
}


