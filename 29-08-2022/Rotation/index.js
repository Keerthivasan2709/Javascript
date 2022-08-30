var heading = document.getElementById('heading')
var input = document.getElementById('inputBox')
function handleSubmit() {
    var text = input.value;
    var lengthOfText=text.length-1;
    setInterval(function () {
        text = text[lengthOfText] + text.substring(0,lengthOfText);
        heading.innerText = text
    }, 1000);
}