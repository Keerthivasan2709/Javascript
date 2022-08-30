var date = document.getElementById('date');
var days=document.getElementById('days')
var heading=document.getElementById('heading')
function handleSubmit() {
    let arr = date.value.split('-');
    let dateTime = getDate(+arr[0], +arr[1] - 1, +arr[2]);
    let christmas;
    if (dateTime.getDate() >= 25 && dateTime.getMonth() == 11) {
        console.log("Entered");
        christmas = getDate(+arr[0]+1, 11, 25);
    }
    else{
        christmas = getDate(+arr[0], 11, 25);
    }
    heading.style.display="block"
    let oneDay = 24 * 60 * 60 * 1000
    days.innerText=Math.ceil(christmas - dateTime) / oneDay
}
function getDate(year,month,date){
    return new Date(year,month,date);
}