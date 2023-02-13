function getInputValueById(elementId) {
    const inputFieldValue = parseFloat(document.getElementById(elementId).value);
    document.getElementById(elementId).value = "";
    return inputFieldValue;
}
function getTextValueById(elementId) {
    const textElementValue = parseFloat((document.getElementById(elementId).innerText));
    return textElementValue;
}
function setTextValue(elementId, amount) {
    document.getElementById(elementId).innerText = amount;
}