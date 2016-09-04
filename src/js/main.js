document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("btnUpdateTime").onclick = showTime; 
	showTime();
});

function showTime(){
    var now = new Date();
    document.getElementById("pTime").innerHTML = now;
}
