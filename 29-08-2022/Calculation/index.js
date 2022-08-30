let calculation = "";
let inputBox = document.getElementById('inputBox');
let backspace = document.getElementById('backSpace');
backspace.addEventListener('click', () => {
    inputBox.value = inputBox.value.slice(0, -1)
    calculation=inputBox.value

})
function onClickNumber(a) {
    calculation += a;
    inputBox.value = calculation;
}
function handleSubmit() {
    try {
        let a = eval(calculation)
        inputBox.value = a.toString();
        calculation = a.toString()
    }
    catch (err) {
        alert("Enter the number properly")
        inputBox.value = calculation;
    }
}

function clearAll() {
    calculation = ''
    inputBox.value = calculation
}