var date = document.getElementById('date');
var days=document.getElementById('days')
var heading=document.getElementById('heading')
function handleSubmit() {
    let arr = date.value.split('-');
    console.log(arr);
    let dateTime = new Date(+arr[0], +arr[1] - 1, +arr[2])
    let christmas;
    if (dateTime.getDate() >= 25 && dateTime.getMonth() == 11) {
        console.log("Entered");
        christmas = new Date(+arr[0]+1, 11, 25);
    }
    else{
        christmas = new Date(+arr[0], 11, 25);
    }
    heading.style.display="block"
    console.log(dateTime,christmas);
    let oneDay = 24 * 60 * 60 * 1000
    days.innerText=Math.ceil(christmas - dateTime) / oneDay
}