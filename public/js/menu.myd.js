let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
}

function myFunction(y) {
    if (y.matches) {
        document.getElementById("icon").addEventListener("click", function() {
            console.log("clica");
            document.querySelector(".stroke").classList.toggle("transform");



        });

        document.getElementById("icon").addEventListener("click", function() {
            console.log("clica1");
            document.querySelector("#icon div:first-child").classList.toggle("active1");
            document.querySelector("#icon div:nth-child(2)").classList.toggle("active2");
            document.querySelector("#icon div:nth-child(3)").classList.toggle("active3");
        });

        /*// If media query matches
        var prevScrollpos = window.pageYOffset;
        /*window.onscroll = function() {
            document.getElementById("navbar").style.top = "0";
        };*/
        /*} else {
            var prevScrollpos = window.pageYOffset;
            /* window.onscroll = function() {
                 var currentScrollPos = window.pageYOffset;
                 if (prevScrollpos > currentScrollPos) {
                     document.getElementById("navbar").style.top = "0";
                 } else {
                     document.getElementById("navbar").style.top = "-360px";
                 }
                 prevScrollpos = currentScrollPos;
             };*/
    }
}

var z = window.matchMedia("(max-width: 830px)");
myFunction(z) ;// Call listener function at run time
z.addListener(myFunction); // Attach listener function on state changes
