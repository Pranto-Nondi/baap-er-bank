function getInputValueById(elementId) {

    const inputFieldValue = parseFloat(document.getElementById(elementId).value);
    document.getElementById(elementId).value = "";
    if (isNaN(inputFieldValue)) {
        alert("Provide Valid Amount");
        return 0;
    }
    else {
        return inputFieldValue;
    }
}

function getTextValueById(elementId) {
    const textElementValue = parseFloat((document.getElementById(elementId).innerText));
    return textElementValue;
}
function setTextValue(elementId, amount) {
    document.getElementById(elementId).innerText = amount;
}