function clock() {
    const d = new Date;
    var ind = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', });
    document.querySelector('#india h1').innerHTML = ind;
}
clock()
setInterval(clock, 1000)