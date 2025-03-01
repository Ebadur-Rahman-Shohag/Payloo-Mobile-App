document

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    const mobileNumber = document.getElementById("mobile-number").value
    const pinNumber = document.getElementById("pin-number").value
    if (mobileNumber.length === 11) {
        if (Number(pinNumber) === 1234) {
            window.location.href = "main.html";
        }
        else {
            alert("Incorrect PIN")
        }
    }
    else {
        alert("Please enter a valid mobile number")
    }

})