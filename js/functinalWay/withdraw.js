
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const getWithdrawInputValue = getInputValueById("input-withdraw-field");
    const getMainTextValue = getTextValueById("main-balance");
    if (getWithdrawInputValue <= getMainTextValue) {

        const setTotalMainBalance = getMainTextValue - getWithdrawInputValue;
        setTextValue("main-balance", setTotalMainBalance);
        const getWithdrawTextValue = getTextValueById("withdraw-display");
        const setTotalWithdraw = getWithdrawInputValue + getWithdrawTextValue;
        setTextValue("withdraw-display", setTotalWithdraw);
    }
    else {
        alert("Sorry ! You Have Insufficient Balance");
    }

})