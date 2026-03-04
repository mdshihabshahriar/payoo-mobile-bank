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

        // history container ke niye aslam
        const history = document.getElementById("history-container");

        // new div create korbo
        const newHistory = document.createElement("div");

        // new div inner HTML e add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Successfully From ${bankAccount} BANK, Acc No. ${accno} At ${new Date()}
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