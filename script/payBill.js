document.getElementById("pay-bill-btn").addEventListener("click",function(){
    const payOption = getValueFromInput("pay-bill-opt");
    if(payOption === "Select")
    {
        alert("Select The Name Of The Bill Or Organization.");
        return;
    }

    const accno = getValueFromInput("pay-bill-number");
    if(accno.length != 11)
    {
        alert("Invalid Account No.");
        return;
    }

    const amount = getValueFromInput("pay-bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);

    if(newBalance < 0)
    {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput("pay-bill-pin");
    if(pin === "1234")
    {
        alert(`Paid Money Successfully To ${payOption} At ${new Date()}`);
        setBalance(newBalance);

        // history container ke niye aslam
        const history = document.getElementById("history-container");

        // new div create korbo
        const newHistory = document.createElement("div");

        // new div inner HTML e add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Paid Money Successfully From ${payOption}, Acc No. ${accno} At ${new Date()}
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