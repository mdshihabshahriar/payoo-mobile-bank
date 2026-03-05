document.getElementById("send-money-btn").addEventListener("click",function(){
    const sendMoneyNumber = getValueFromInput("send-money-number");
    if(sendMoneyNumber.length != 11)
    {
        alert("Invalid Number");
        return;
    }

    const sendMoneyAmount = getValueFromInput("send-money-amount");
    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(sendMoneyAmount);
    console.log(newBalance)

    if(newBalance < 0)
    {
        alert("Invalid Amount");
        return;
    }

    const sendMoneyPin = getValueFromInput("send-money-pin")
    if(sendMoneyPin === "1234")
    {
        alert("Send Money Successfull");
        console.log(newBalance);
        setBalance(newBalance);

        // history container ke niye aslam
        const history = document.getElementById("history-container");

        // new div create korbo
        const newHistory = document.createElement("div");

        // new div inner HTML e add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Send $${sendMoneyAmount} Successfully To ${sendMoneyNumber},  At ${new Date()}
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