// write a simple atm js algo
// checkBalance
// withdrawAmount
// depositAmount
// checkPin

let balance = 5000
let pin = 1234
let attempts = 3

//checkPin

function checkPin (enteredPin) {
    while (attempts > 0) {
      if (enteredPin === pin) {
        attempts = 3
        startAtm()
        return "Start ATM";
      } else {
        attempts--;
        return `Incorrect Pin, ${attempts} attempts left`;
      }
    }
    return "Your card has been blocked"
}

console.log(checkPin(1234));

function startAtm(choice){
    if (choice === 1) {
        //withdrawal
        withdrawAmount(1000)
    } else if (choice ===2) {
        //depoist
        depoistAmount(3000)
    } else if (choice ===3) {
        // check balance
        checkBalance()
    } else if (choice ===4) {
        //exit
        return "Thank you for banking with us"
    } else {
        //invalid option
        return "Invalid option, try again"
    }
}

// function to check balance
function checkBalance () {
    return `Your current balance is $${balance}`
}
console.log(checkBalance());

function withdrawAmount (amount) {
    if (amount <= balance) {
        balance -= amount
        return "Withdrawal Successful"
    } else {
        return "Insufficient funds"
    }
}
console.log(withdrawAmount(1000));

function depoistAmount (amount) {
    balance += amount
    return "Deposit successful"
}
console.log(depoistAmount());


