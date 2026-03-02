document.getElementById("login-btn").addEventListener("click",function(){
    // get input mobile number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // get input pin
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin);

    // match pin & mobile number
    if(contactNumber === "01234567890" && pin === "1234")
    {
        alert("Login Successfully");
        // window.location.replace("/home.html");
        window.location.assign("/home.html");
    }
    else
    {
        alert("Login Failed");
        return;
    }
});