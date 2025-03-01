document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    const agentNumber = document.getElementById("agent-number").value
    const amount = document.getElementById("cashout-amount").value
    const pinNumber = document.getElementById("cashout-pin-number").value
    const balance = document.getElementById("balance").innerText;
    const transactionContainer = document.getElementById("transaction-container");
    const sum = Number(balance) - Number(amount);

    if (agentNumber.length >= 11) {
        if (Number(pinNumber) === 1234 && Number(amount) > 0) {
            document.getElementById("balance").innerText = sum;
            transactionContainer.innerHTML += `<li class="border-2 border-gray-300 shadow-xl p-4">${amount} cashed out from ${agentNumber}</li>`;
        }
        else {
            alert("Incorrect PIN or AMOUNT!");
        }
    }
    else {
        alert("Please enter a valid mobile number")
    }


})