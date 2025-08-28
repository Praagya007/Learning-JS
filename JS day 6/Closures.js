// Create account using IIFE
const account = (function () {
    let accBalance = 0;

    const depositAmt = (amount) => {
        accBalance += amount;
        return accBalance;
    };

    const withdrawAmt = (amount) => {
        if (amount > accBalance) {
            console.log("Insufficient funds!");
            return accBalance;
        }
        accBalance -= amount;
        return accBalance;
    };

    const getBalance = () => accBalance;
    const resetAccount = () => accBalance = 0;

    return {
        depositAmt,
        withdrawAmt,
        getBalance,
        resetAccount,
    };
})();

while (true) {
    let action = prompt("What would you like to do? \nType 'deposit', 'withdraw', 'reset', or 'exit':").toLowerCase();

    if (action === "exit") {
        console.log("Exiting... Final account balance: $" + account.getBalance());
        break;
    }

    if (action === "deposit") {
        let deposit = parseFloat(prompt("Enter deposit amount:"));
        if (isNaN(deposit) || deposit <= 0) {
            console.log("Invalid deposit amount.");
            continue;
        }
        let newBalance = account.depositAmt(deposit);
        console.log("Deposited $" + deposit + ". Current balance: $" + newBalance);
    } 
    
    else if (action === "withdraw") {
        let withdrawal = parseFloat(prompt("Enter withdrawal amount:"));
        if (isNaN(withdrawal) || withdrawal <= 0) {
            console.log("Invalid withdrawal amount.");
            continue;
        }
        let previousBalance = account.getBalance();
        let newBalance = account.withdrawAmt(withdrawal);
        if (newBalance !== previousBalance) {
            console.log("Withdrawn $" + withdrawal + ". Current balance: $" + newBalance);
        }
    } 
    
    else if (action === "reset") {
        account.resetAccount();
        console.log("Account balance has been reset to $0.");
    } 
    
    else {
        console.log("Unknown action. Please type 'deposit', 'withdraw', 'reset', or 'exit'.");
    }
}
