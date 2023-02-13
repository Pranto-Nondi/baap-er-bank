
document.getElementById("deposit-btn").addEventListener("click", function () {
    const getDepositInputValue = getInputValueById("input-deposit-field");
    const getDepositTextValue = getTextValueById("deposit-amount");
    if (getDepositInputValue >= 0) {
        const setTotalDeposit = getDepositInputValue + getDepositTextValue;
        setTextValue("deposit-amount", setTotalDeposit);
        const getMainTextBalance = getTextValueById("main-balance");
        const mainBalanceTotal = getMainTextBalance + getDepositInputValue;
        setTextValue("main-balance", mainBalanceTotal);
    }
    else {
        alert("Please provide Correct Value")
    }
})