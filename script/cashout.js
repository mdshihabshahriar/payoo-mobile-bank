document.getElementById("cashout-btn").addEventListener("click",function(){
    // get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    // console.log(cashoutNumber)
    if(cashoutNumber.length != 11)
    {
        alert("Invalid Agent Number");
        return;
    }

    // get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");

    // get the current balance
    const currentBalance = getBalance();

    // calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance)
    if(newBalance < 0)
    {
        alert("Invalid Amount");
        return;
    }

    // get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin")
    if(cashoutPin === "1234")
    {
        alert("Cashout Successfull");
        console.log(newBalance);
        setBalance(newBalance);

        // history container ke niye aslam
        const history = document.getElementById("history-container");

        // new div create korbo
        const newHistory = document.createElement("div");

        // new div inner HTML e add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout $${cashoutAmount} Successfully From ${cashoutNumber},  At ${new Date()}
        </div>
        `;

        // history container e new div append korbo
        history.append(newHistory);
    }
    else
    {
        alert("Invalid Pin");
        return;
    }
})





// document.getElementById("cashout-btn").addEventListener("click",function(){
//     // get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber)
//     if(cashoutNumber != "01234567890")
//     {
//         alert("Invalid Agent Number");
//         return;
//     }

//     // get the amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     // get the current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // calculate balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0)
//     {
//         alert("Invalid Amount");
//         return;
//     }

//     // get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;

//     if(cashoutPin === "1234")
//     {
//         alert("Cashout Successfull");
//         console.log(newBalance)
//         balanceElement.innerText = newBalance;
//     }
//     else
//     {
//         alert("Invalid Pin");
//         return;
//     }
// })