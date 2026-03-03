document.getElementById("cashout-btn").addEventListener("click",function(){
    // get the agent number & validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber)
    if(cashoutNumber != "01234567890")
    {
        alert("Invalid Agent Number");
        return;
    }

    // get the amount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount)

    // get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance)

    // calculate balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0)
    {
        alert("Invalid Amount");
        return;
    }

    // get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;

    if(cashoutPin === "1234")
    {
        alert("Cashout Successfull");
        console.log(newBalance)
        balanceElement.innerText = newBalance;
    }
    else
    {
        alert("Invalid Pin");
        return;
    }
})