//get input

function getInputValue (fieldId){

    const inputField = document.getElementById(fieldId);
    const inputFieldString= inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

//set textValue

function setTextFieldValue (elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}