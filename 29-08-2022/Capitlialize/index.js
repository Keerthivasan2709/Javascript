var inputBox = document.getElementById('inputBox')
var text = document.getElementById('text')
function handleUsingDOM() {
    var a = inputBox.value;
    text.innerText = a;
}
//methodTwo
function handleUsingJs() {
    var a = inputBox.value;
    let String = '';
    let words = a.split(' ')
    for (let i in words) {
        String = String + words[i].charAt(0).toUpperCase() + words[i].slice(1);
        String += " "
    }
    text.innerText=String;

}




