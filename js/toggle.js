document.getElementById("cashout").style.display = "none";
document.getElementById("transaction").style.display = "none";

document.getElementById("add-money-card").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cashout").style.display = "none";
    document.getElementById("add-money").style.display = "block";
    document.getElementById("transaction").style.display = "none";

});

document.getElementById("cashout-card").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cashout").style.display = "block";
    document.getElementById("transaction").style.display = "none";

});

document.getElementById("transaction-card").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transaction").style.display = "block";

});