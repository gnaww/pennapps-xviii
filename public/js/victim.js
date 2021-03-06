const socket = io();

// const sosSignal = () => {
//     socket.emit('sos', victimInfo);
// }
socket.on('helpOnTheWay', () => {
    console.log('recived help');
    $("#rescue-form").hide();
    $("#rescue-waiting").hide();
    $("#rescue-recieved").show();
    $("body").css("background-color", "whitesmoke");
});

if (window.location.search) {
    let id = window.location.search.substr(1).slice(3);
    socket.emit('joinChannel', { channelId: id });
    console.log('joined channel', id);
    $("#rescue-form").hide();
    $("#rescue-recieved").hide();
    $("#rescue-waiting").show();
    $("body").css("background-color", "whitesmoke");
}

let victimInfo = {};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
        let lat = location.coords.latitude;
        let lng = location.coords.longitude;
        document.getElementById("locationAuto").value = `${lng}, ${lat}`;
        // victimInfo = {
        //     id:  id,
        //     name: "Test User",
        //     phone: "" + id,
        //     emergencyLevel: 4,
        //     info: "my arm is broken please help me",
        //     numPeople: Math.floor(Math.random() * 5) + 1,
        //     location: {
        //         "type": "Point",
        //         "coordinates": [
        //             lat,
        //             lng
        //         ]
        //     }
        // }
    });
} else {
    alert('geolocation not supported');
}
