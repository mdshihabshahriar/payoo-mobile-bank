document.getElementById("add-money-btn").addEventListener("click",function(){
    // get bank account
    const bankAccount = getValueFromInput("add-money-bank")
    if(bankAccount === "Select a Bank")
    {
        alert("Please Select A Bank");
        return;
    }

    // get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11)
    {
        alert("Invalid Account No.");
        return;
    }

    // get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    
    // get pin
    const pin = getValueFromInput("add-money-pin");
    if(pin === "1234")
    {
        alert(`Add Money Successfully From ${bankAccount} BANK At ${new Date()}`);
        setBalance(newBalance);
    }
    else
    {
        alert("Invalid Pin");
        return;
    }
})