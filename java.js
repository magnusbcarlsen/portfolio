function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var message = "Velkommen til Magnus Bergstrøm's portfolio"
var msgCount = 0;

var messageLabel = document.getElementById("messageLabel");

function textFunc() {
    messageLabel.innerHTML = message.substring(0, msgCount);

    if (msgCount == message.length) {
        // Stop Timer
        clearInterval(timer1);

        // Start blinking animation!
        timer2 = setInterval("blinkFunc()", 200);

    } else {
        msgCount++;
    }
}



timer1 = setInterval("textFunc()", 50); // Every 150 milliseconds
