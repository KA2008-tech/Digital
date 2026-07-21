// ===============================
// PAGE SWITCHING SYSTEM
// ===============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}




// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function(){

    const loader = document.querySelector(".loader");


    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";


            setTimeout(function(){

                loader.style.display = "none";

            },500);


        },1500);

    }

});







// ===============================
// TYPING EFFECT
// ===============================

const text = "Welcome To My Digital Profile";

let index = 0;


function typingEffect(){

    const element = document.querySelector("h3");


    if(element && index <= text.length){

        element.innerHTML = text.substring(0,index);

        index++;

        setTimeout(typingEffect,100);

    }

}


window.addEventListener("load", function(){

    typingEffect();

});







// ===============================
// SAFE CURSOR GLOW EFFECT
// ===============================

let lastGlowTime = 0;


document.addEventListener("mousemove", function(e){


    // Disable on phones

    if(window.innerWidth <= 768){

        return;

    }


    let currentTime = Date.now();


    // Limit creation speed

    if(currentTime - lastGlowTime < 100){

        return;

    }


    lastGlowTime = currentTime;



    const glow = document.createElement("div");


    glow.className = "cursor-glow";


    glow.style.left = e.pageX + "px";

    glow.style.top = e.pageY + "px";



    document.body.appendChild(glow);



    setTimeout(function(){

        glow.remove();

    },400);


});







// ===============================
// CURSOR STYLE
// ===============================

const style = document.createElement("style");


style.innerHTML = `

.cursor-glow {

position:absolute;

width:20px;

height:20px;

border-radius:50%;

background:cyan;

pointer-events:none;

box-shadow:
0 0 20px cyan,
0 0 40px cyan;

transform:translate(-50%, -50%);

animation:cursorFade .4s forwards;

z-index:9999;

}



@keyframes cursorFade {

from {

opacity:1;

transform:translate(-50%, -50%) scale(1);

}


to {

opacity:0;

transform:translate(-50%, -50%) scale(3);

}

}

`;

document.head.appendChild(style);