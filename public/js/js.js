function myFunction(x) {
    if (x.matches) {

function dimensões2(){
    //infos eventos
    document.getElementById("infoMYD").style.marginTop=0+ 'px';
    document.getElementById("infoWDV").style.marginTop=0 + 'px';
    document.getElementById("infoP").style.marginTop=0+ 'px';
    //document.getElementById("infoR").style.marginTop=0+ 'px';
    document.querySelector(".quadrado:first-child").style.height='auto';
    document.querySelector(".quadrado:nth-child(2)").style.height='auto';
    document.querySelector(".quadrado:nth-child(3)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(4)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(5)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(6)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(7").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(8)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(9)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(10)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(11)").style.height= 'auto';
    document.querySelector(".quadrado:nth-child(12)").style.height= 'auto';
    document.querySelector(".quadrado1:nth-child(1)").style.height= 'auto';
    document.querySelector(".quadrado1:nth-child(2)").style.height= 'auto';
    document.querySelector(".quadrado1:nth-child(3)").style.height= 'auto';
    document.querySelector(".quadrado1:nth-child(4)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(1)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(2)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(3)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(4)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(5)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(6)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(7)").style.height= 'auto';
    document.querySelector(".quadrado2:nth-child(8)").style.height= 'auto';
    document.querySelector(".consulting .titulo").style.height='auto';
    document.querySelector(".training .titulo").style.height='auto';
    document.querySelector(".Data_Science .titulo").style.height='auto';
}
dimensões2();
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

        // If media query matches
        var prevScrollpos = window.pageYOffset;
        /*window.onscroll = function() {
            document.getElementById("navbar").style.top = "0";
        };*/
    } else {
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


document.getElementById("titulo3").addEventListener("click",function(){



    document.getElementById("CS").classList.toggle("descricao_show");
    document.getElementById("scroll").classList.toggle("scroll");
       document.getElementById("titulo").classList.toggle("back");


    document.getElementById("titulo1").classList.toggle("animação_serviços");
    document.getElementById("titulo2").classList.toggle("animação_serviços");

});
document.getElementById("titulo2").addEventListener("click",function(){
    document.getElementById("scroll1").classList.toggle("scroll");
    document.getElementById("tituloo").classList.toggle("back");
    document.getElementById("TR").classList.toggle("descricao_show");
    document.getElementById("titulo1").classList.toggle("animação_serviços");
    document.getElementById("titulo3").classList.toggle("animação_serviços");
});
document.getElementById("titulo1").addEventListener("click",function(){
    document.getElementById("scroll2").classList.toggle("scroll");
    document.getElementById("titulooo").classList.toggle("back");
    document.getElementById("DS").classList.toggle("descricao_show");
    document.getElementById("titulo3").classList.toggle("animação_serviços");
    document.getElementById("titulo2").classList.toggle("animação_serviços");

});
document.getElementById("contactus").addEventListener("click",function(){
    document.getElementById("menu").classList.toggle("menu2");
    document.getElementById("h1").classList.toggle("pequeno");

}
);


dimensoes();
function dimensoes(){

        /*altura janela*/
       var a=window.innerHeight;
       /*largura janela*/
       var c = window.innerWidth;
       var nav= document.querySelector(".stroke").clientHeight;
       //infos eventos
       document.getElementById("infoMYD").style.marginTop=nav + 'px';
    document.getElementById("infoWDV").style.marginTop=nav + 'px';
    document.getElementById("infoP").style.marginTop=nav + 'px';
    //document.getElementById("infoR").style.marginTop=nav + 'px';
       console.log(a);

document.getElementById("infoMYD").style.height= a +'px';
    document.getElementById("infoWDV").style.height= a +'px';
    document.getElementById("infoP").style.height= a +'px';
    //document.getElementById("infoR").style.height= a+'px';
       document.querySelector(".animação").style.height= a + 'px';
    document.querySelector(".animação1").style.height= a + 'px';
    document.querySelector(".animação1 div:nth-child(2)"). style.height= a/12 + 'px';
    document.querySelector(".animação1 div:nth-child(3)"). style.height= a/12 + 'px';
    document.querySelector(".animação1 div:nth-child(4)"). style.height= a/12 + 'px';
    document.querySelector(".animação1 div:nth-child(5)"). style.height= a/12 + 'px';
    document.querySelector(".animação1 div:nth-child(1)"). style.height= a/12 + 'px';
    var b=document.querySelector("nav").clientHeight;
    var d = c / 7;


    document.querySelector(".animação div:nth-child(2)"). style.width= d -2 + 'px';
    document.querySelector(".animação div:nth-child(3)"). style.width= d -2 + 'px';
    document.querySelector(".animação div:nth-child(4)"). style.width= d -2 + 'px';
    document.querySelector(".animação div:nth-child(5)"). style.width= d -2 + 'px';
    document.querySelector(".animação div:nth-child(6)"). style.width= d -2 + 'px';



    document.querySelector(".main").style.marginTop= 0+ 'px';
    var h=  document.querySelector(".Data_Science .titulo").clientWidth;
    console.log(h);



var k=document.querySelector(".img_1 img").clientHeight;
document.querySelector(".Our_Team").style.height= k+20 +'px';

    document.querySelector(".consulting .titulo").style.height=h+'px';
    document.querySelector(".training .titulo").style.height=h+'px';
    document.querySelector(".Data_Science .titulo").style.height=h+'px';
    var w=document.querySelector(".Data_Science .titulo").clientHeight;
    document.querySelector(".quadrado:first-child").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(2)").style.height= w/2.5+ 'px';
    document.querySelector(".quadrado:nth-child(3)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(4)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(5)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(6)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(7").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(8)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(9)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(10)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(11)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado:nth-child(12)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado1:nth-child(1)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado1:nth-child(2)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado1:nth-child(3)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado1:nth-child(4)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(1)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(2)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(3)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(4)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(5)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(6)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(7)").style.height= w/2.5 + 'px';
    document.querySelector(".quadrado2:nth-child(8)").style.height= w/2.5 + 'px';
    document.querySelector("#DS").style.height= w +'px';
    document.querySelector("#TR").style.height= w +'px';
    document.querySelector("#CS").style.height= w +'px';




}
let root= document.documentElement;

window.addEventListener('scroll', function(ev) {

    var someDiv = document.getElementById('about');
    var distanceToTop = someDiv.getBoundingClientRect().top;


    console.log(distanceToTop);
    if(distanceToTop <= 0){
        root.style.setProperty('--branco','#1c75bc');
        root.style.setProperty('--azul', 'white');
        document.getElementById("logo2").src="img/logoJest.png";

    }
    if(distanceToTop > 0){
        root.style.setProperty('--branco','white');
        root.style.setProperty('--azul', '#1c75bc');
        document.getElementById("logo2").src= "img/logoJest_Branco.png";
    }
});
/*function temporizador(){
    setTimeout("carrocel()", 5000);
}
function temporizador2()
{
    setTimeout("carrocel2()", 5000);

}

function temporizador3()
{
    setTimeout("carrocel3()", 5000);

}



function carrocel(){
 var a= document.querySelector(".consulting");
 var b=document.querySelector(".training");
 var c = document.querySelector(".Data_Science");
 b.style.zIndex= 0;
 a.style.zIndex= -2;
 c.style.zIndex= -1;
 temporizador2();
    function temporizador2()
    {
        setTimeout("carrocel2()", 5000);

    }

}
function carrocel2(){
    var a= document.querySelector(".consulting");
    var b=document.querySelector(".training");
    var c = document.querySelector(".Data_Science");
    b.style.zIndex= -2;
    a.style.zIndex= -1;
    c.style.zIndex= 0;
    temporizador3();
    function temporizador3()
    {
        setTimeout("carrocel3()", 5000);

    }

}

function carrocel3(){
    var a= document.querySelector(".consulting");
    var b=document.querySelector(".training");
    var c = document.querySelector(".Data_Science");
    b.style.zIndex= -1;
    a.style.zIndex= 0;
    c.style.zIndex= -1;
    temporizador();
    function temporizador(){
        setTimeout("carrocel()", 5000);
    }


}
temporizador();
*/

function temporizador4(){
    setTimeout("we_are_jest()", 2000);
}

who_are_we();
function we_are_jest(){

    document.querySelector(".we").style.color="#1c75bc";
    document.querySelector(".who_are").style.color="#1c75bc";
    document.querySelector(".who_are").innerHTML="We";
    document.querySelector(".we").innerHTML="are JEST";
    temporizador5();
    function temporizador5(){
        setTimeout("who_are_we()", 2000);
    }
}



function who_are_we(){

    document.querySelector(".who_are").style.color= "#5bd2ff";
    document.querySelector(".we").style.color= "#5bd2ff";
    document.querySelector(".who_are").innerHTML="Who are";
    document.querySelector(".we").innerHTML="we";

    temporizador4();
    function temporizador4(){
        setTimeout("we_are_jest()", 2000);
    }


}
temporizador4();
temporizador6();
function temporizador6(){
    setTimeout("Our_Family()",5000);
}

function Our_Family(){
    document.querySelector(".Our_Team span").innerHTML="Family";
    temporizador7();
    function temporizador7(){
        setTimeout("Our_Friends()",5000);
    }
}

function Our_Friends(){

    document.querySelector(".Our_Team span").innerHTML="Friends";
    temporizador8();
    function temporizador8(){
        setTimeout("Our_Team()",5000);
    }
}
function Our_Team(){
    document.querySelector(".Our_Team span").innerHTML="Team";
    temporizador6();
    function temporizador6(){
        setTimeout("Our_Family()",5000);
    }

}



/* eventos*/

/*eventos_info*/

document.getElementById("item2").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoMYD").classList.add("animação_info");

});
document.getElementById("fechar1").addEventListener("click", function(){
    console.log("fechar");
    document.getElementById("infoMYD").classList.remove("animação_info");
});

document.getElementById("item3").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoWDV").classList.add("animação_info");

});
document.getElementById("fechar2").addEventListener("click", function(){
    console.log("fechar");
    document.getElementById("infoWDV").classList.remove("animação_info");
});

document.getElementById("item4").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoP").classList.add("animação_info");

});
document.getElementById("fechar3").addEventListener("click", function(){
    console.log("fechar");
    document.getElementById("infoP").classList.remove("animação_info");
});

/*document.getElementById("item5").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoR").classList.add("animação_info");

});
document.getElementById("fechar4").addEventListener("click", function(){
    console.log("fechar");
    document.getElementById("infoR").classList.remove("animação_info");
});*/


document.querySelector(".item2_1").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoMYD").classList.add("animação_info");

});

document.querySelector(".item3_1").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoWDV").classList.add("animação_info");

});
document.querySelector(".item4_1").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoP").classList.add("animação_info");

});
/*document.querySelector(".item5_1").addEventListener("click", function () {
    console.log("animação_info");
    document.getElementById("infoR").classList.add("animação_info");

});
*/
var x = window.matchMedia("(max-width: 830px)");
myFunction(x) ;// Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes



/*temporizadorEvents();
function temporizadorEvents(){
    setTimeout("mudarEvent()", 5000);
}
var number=1;
var number2=2;
var number3=3;
var number4=4;
var number0=0;

function mudarEvent(){

    console.log(number);
    console.log(number2);
    console.log(number3);
    console.log(number4);
    console.log(number0);
    number= number+1;
    number2=number2+1;
    number3=number3+1;
    number4=number4+1;
    number0=number0+1;
    if(number0>4){
        number0=0;
    }
    if(number>4){
        number=0;
    }
    if(number2>4){
        number2=0;
    }
    if(number3>4){
        number3=0;
    }
    if(number4>4){
        number4=0;
    }



    divs[0].innerHTML=events[number0].innerHTML;
    divs[1].innerHTML=events[number].innerHTML;
    divs[2].innerHTML=events[number2].innerHTML;
    divs[3].innerHTML=events[number3].innerHTML;
    divs[4].innerHTML=events[number4].innerHTML;

temporizadorEvents();

}
var events=[
    document.getElementById("tituloEvents"),
    document.getElementById("MYD"),
    document.getElementById("WDataVisualization"),
    document.getElementById("WPython"),
    document.getElementById("WR")
];
var divs=[
    document.getElementById("item1"),
    document.getElementById("item2"),
    document.getElementById("item3"),
    document.getElementById("item4"),
    document.getElementById("item5")
];
*/

var departamentos= document.getElementById("departamentos");
var seta= document.getElementById("seta");
var seta_cima=document.getElementById("seta_cima");
seta.addEventListener("click",function(){
    departamentos.classList.remove("desaparecer");
    departamentos.classList.add("aparecer");
    seta.classList.remove("aparecer");
    seta.classList.add("desaparecer");
});
seta_cima.addEventListener("click", function(){
    departamentos.classList.remove("aparecer");
    departamentos.classList.add("desaparecer");
    seta.classList.remove("desaparecer");
    seta.classList.add("aparecer");
});
var descricao1=document.getElementById("descricao1");
var seta1=document.getElementById("seta1");
var seta_cima1=document.getElementById("seta_cima1");
seta1.addEventListener("click",function(){
    descricao1.classList.remove("desaparecer");
    descricao1.classList.add("aparecer");
    seta1.classList.remove("aparecer");
    seta1.classList.add("desaparecer");
    seta_cima1.classList.remove("desaparecer");
    seta_cima1.classList.add("aparecer");
});
seta_cima1.addEventListener("click", function(){
    descricao1.classList.remove("aparecer");
    descricao1.classList.add("desaparecer");
    seta1.classList.remove("desaparecer");
    seta1.classList.add("aparecer");
    seta_cima1.classList.remove("aparecer");
    seta_cima1.classList.add("desaparecer");
});
var descricao2=document.getElementById("descricao2");
var seta2=document.getElementById("seta2");
var seta_cima2=document.getElementById("seta_cima2");
seta2.addEventListener("click",function(){
    descricao2.classList.remove("desaparecer");
    descricao2.classList.add("aparecer");
    seta2.classList.remove("aparecer");
    seta2.classList.add("desaparecer");
    seta_cima2.classList.remove("desaparecer");
    seta_cima2.classList.add("aparecer");
});
seta_cima2.addEventListener("click", function(){
    descricao2.classList.remove("aparecer");
    descricao2.classList.add("desaparecer");
    seta2.classList.remove("desaparecer");
    seta2.classList.add("aparecer");
    seta_cima2.classList.remove("aparecer");
    seta_cima2.classList.add("desaparecer");
});
var descricao3=document.getElementById("descricao3");
var seta3=document.getElementById("seta3");
var seta_cima3=document.getElementById("seta_cima3");
seta3.addEventListener("click",function(){
    descricao3.classList.remove("desaparecer");
    descricao3.classList.add("aparecer");
    seta3.classList.remove("aparecer");
    seta3.classList.add("desaparecer");
    seta_cima3.classList.remove("desaparecer");
    seta_cima3.classList.add("aparecer");
});
seta_cima3.addEventListener("click", function(){
    descricao3.classList.remove("aparecer");
    descricao3.classList.add("desaparecer");
    seta3.classList.remove("desaparecer");
    seta3.classList.add("aparecer");
    seta_cima3.classList.remove("aparecer");
    seta_cima3.classList.add("desaparecer");
});
var descricao4=document.getElementById("descricao4");
var seta4=document.getElementById("seta4");
var seta_cima4=document.getElementById("seta_cima4");
seta4.addEventListener("click",function(){
    descricao4.classList.remove("desaparecer");
    descricao4.classList.add("aparecer");
    seta4.classList.remove("aparecer");
    seta4.classList.add("desaparecer");
    seta_cima4.classList.remove("desaparecer");
    seta_cima4.classList.add("aparecer");
});
seta_cima4.addEventListener("click", function(){
    descricao4.classList.remove("aparecer");
    descricao4.classList.add("desaparecer");
    seta4.classList.remove("desaparecer");
    seta4.classList.add("aparecer");
    seta_cima4.classList.remove("aparecer");
    seta_cima4.classList.add("desaparecer");
});

