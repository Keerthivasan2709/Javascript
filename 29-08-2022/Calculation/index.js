let calculation = "";
var inputBox = document.getElementById('inputBox');
function onClickNumber(a) {
    calculation += a;
    inputBox.value = calculation;
}
function handleSubmit() {
    try {
        var a = eval(calculation)
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