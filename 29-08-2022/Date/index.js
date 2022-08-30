let railway, normal;
let weeks=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function normalTime() {
    clearInterval(railway)

    let date = new Date()
    let day = weeks[date.getDay()];
    let hrs, min, sec;
    normal = setInterval(() => {
        let date = new Date()
        hrs = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        console.log(hrs, min, sec);
        if (hrs > 12) {
            hrs = `${hrs - 12} PM`;
        }
        else if (hrs == 12) {
            hrs = `${hrs} PM`;
        }
        else if (hrs < 12) {
            hrs = `${hrs} AM`
        }
        document.getElementById('time').innerText = `${day} || ${hrs}:${min}:${sec} `;

    }, 1000)
}

function railWayTime() {
    clearInterval(normal)
    let date = new Date()
    let day = weeks[date.getDay()]
    let hrs, min, sec;
    railway = setInterval(() => {
        let date = new Date()
        hrs = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        document.getElementById('time').innerText = `${day} || ${hrs}:${min}:${sec} `;
    }, 1000)
}
