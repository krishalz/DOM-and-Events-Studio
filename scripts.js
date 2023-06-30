// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let imgObj = this.document.getElementById('rocket');
    imgObj.style.position= 'absolute';
    imgObj.style.left= '0px';
    imgObj.style.bottom= '0px'; //imgObj was spelled wrong
    let status = document.getElementById('flightStatus'); //element was spelled elements
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleWidth = document.getElementById('spaceShuttleWidth');
    let bg = document.getElementById('shuttleBackground');

    let right = this.document.getElementById('right');
    right.addEventListener("click", function () {
        if (shuttleWidth.innerHTML != "510000") {
            movement = parseInt(imgObj.style.left) + 10 + 'px';
            imgObj.style.left = movement;
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
        }
        else{
            console.log('right move')
        }
    });

    let left = this.document.getElementById('left');
    left.addEventListener("click", function () {
        if (shuttleWidth.innerHTML != "-20000") {
            movement = parseInt(imgObj.style.left) - 10 + 'px';
            imgObj.style.left = movement;
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
        }
    });

    let down = this.document.getElementById('down');
    down.addEventListener("click", function () {
        if (shuttleHeight.innerHTML != "0") {
            movement = parseInt(imgObj.style.bottom) - 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });
    let up = this.document.getElementById('up');
    up.addEventListener("click", function () {
        if (shuttleHeight.innerHTML != "250000") {
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    let takeoff = this.document.getElementById('takeoff');
    takeoff.addEventListener("click", function () {
        result = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result) {
            bg.style.backgroundColor = 'blue';
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = '10000';
            status.innerHTML = "Shuttle in flight";
        }
    });

let landing = this.document.getElementById('landing');
landing.addEventListener("click", function () {
    bg.style.backgroundColor = 'green';
    window.alert("The shuttle is landing. Landing gear engaged.");
    shuttleHeight.innerHTML = '0';
    shuttleWidth.innerHTML = '0';
    status.innerHTML = "Shuttle landed";
    imgObj.style.bottom = '0px';
    imgObj.style.left = '0px';
});

let missionAbort = this.document.getElementById('missionAbort');
missionAbort.addEventListener("click", function () {
    result = window.confirm("Are you sure you want to end the mission?");
    if (result) {
        bg.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        shuttleWidth.innerHTML = '0';
        status.innerHTML = "Mission aborted";
        imgObj.style.bottom = '0px';
        imgObj.style.left = '0px';
    }
});
});
