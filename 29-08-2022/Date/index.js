let railway,normal;
function normalTime() {
    clearInterval(railway)

    var date = new Date()
    var day = findDay(date.getDay())
    var hrs, min, sec;
    normal = setInterval(() => {
        var date = new Date()
        hrs = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        if (hrs > 12) {
            hrs = `${hrs - 12} PM`;
        }
        else {
            hrs = `${hrs} AM`
        }
        document.getElementById('time').innerText = `${day} || ${hrs}:${min}:${sec} `;

    }, 1000)
}

function railWayTime() {
    clearInterval(normal)
    var date = new Date()
    var day = findDay(date.getDay())
    var hrs, min, sec;
    railway = setInterval(() => {
        var date = new Date()
        hrs = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        document.getElementById('time').innerText = `${day} || ${hrs}:${min}:${sec} `;

    }, 1000)
}

function findDay(day) {
    switch (day) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Sunday';
            break;
        case 7:
            return undefined;
    }
}
