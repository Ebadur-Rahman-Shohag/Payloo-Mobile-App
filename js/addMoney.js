document.getElementById("addMoney-btn").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    const accountNumber = document.getElementById("account-number").value
    const amount = document.getElementById("amount").value
    const pinNumber = document.getElementById("pin-number").value
    const balance = document.getElementById("balance").innerText;
    const transactionContainer = document.getElementById("transaction-container");

    const sum = Number(balance) + Number(amount);

    if (accountNumber.length >= 11) {
        if (Number(pinNumber) === 1234 && Number(amount) > 0) {
            document.getElementById("balance").innerText = sum;
            transactionContainer.innerHTML += `<li class="border-2 border-gray-300 shadow-xl p-4">${amount} added from ${accountNumber}</li>`;
        }
        else {
            alert("Incorrect PIN or AMOUNT!");
        }
    }
    else {
        alert("Please enter a valid mobile number")
    }


})