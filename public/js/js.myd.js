/*// Set the date we're counting down to
var countDownDate = new Date("Feb 29, 2020 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("relogio").innerHTML = "<span>Faltam </span> <br> " + days +"<span class='mini'>dias </span> " + hours + "<span class='mini'>horas </span> "
        + minutes + "<span class='mini'>minutos </span> " + seconds + "<span class='mini'>segundos </span> <br>" +"<span> para o </span><br> <span class='MYD'>MYD'20</span>";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("relogio").innerHTML = "Estamos a preparar o MYD do próximo ano!";
    }
}, 1000);*/

dimensoes();
function dimensoes() {

    /*altura janela*/
    var a = window.innerHeight;
    //console.log(a);
    /*largura janela*/
    var c = window.innerWidth;
    //console.log(c);



}
