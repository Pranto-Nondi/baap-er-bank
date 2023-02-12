document.getElementById("deposit-btn").addEventListener("click", function () {
    const inputDepositFieldValue = parseFloat(document.getElementById("input-deposit-field").value);
    document.getElementById("input-deposit-field").value = "";
    const depositAmountDisplay = parseFloat(document.getElementById("deposit-amount").innerText);
    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
    if (isNaN(inputDepositFieldValue)) {
        return alert("Plaese Provide Any Valid Amount")
    }
    const totalDeposit = inputDepositFieldValue + depositAmountDisplay;
    const totalMainBalance = inputDepositFieldValue + mainBalance;
    document.getElementById("deposit-amount").innerText = totalDeposit;
    document.getElementById("main-balance").innerText = totalMainBalance;

})