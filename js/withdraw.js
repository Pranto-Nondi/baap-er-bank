document.getElementById("withdraw-btn").addEventListener("click", function () {
    const inputWithdrawValue = parseFloat(document.getElementById("input-withdraw-field").value);
    const displayWithdrawAmount = parseFloat(document.getElementById("withdraw-display").innerText);
    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
    document.getElementById("input-withdraw-field").value = "";
    if (isNaN(inputWithdrawValue)) {
        return alert("Plaese Provide Any Valid Amount")
    }
    const withdrawDisplay = inputWithdrawValue + displayWithdrawAmount;
    const totalMainBalance = mainBalance - inputWithdrawValue;
    document.getElementById("withdraw-display").innerText = withdrawDisplay;
    document.getElementById("main-balance").innerText = totalMainBalance;




})