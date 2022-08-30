var heading = document.getElementById('heading')
var input = document.getElementById('inputBox')
function handleSubmit() {
    var text = input.value;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        heading.innerText = text
    }, 1000);
}