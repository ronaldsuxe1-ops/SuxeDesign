// ==========================
// VARIABLES GLOBALES
// ==========================

const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
// create a mobile overlay container for nav links
let navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
navOverlay.innerHTML = navLinks ? navLinks.innerHTML : '';
document.body.appendChild(navOverlay);
// add close button to overlay
const closeBtn = document.createElement('button');
closeBtn.className = 'close-btn';
closeBtn.innerHTML = '<i class="fas fa-times"></i>';
navOverlay.appendChild(closeBtn);

// close handlers
closeBtn.addEventListener('click', ()=>{
    navOverlay.classList.remove('active');
    document.body.classList.remove('nav-open');
    hamburger.classList.remove('open');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});

// close overlay when clicking a link inside overlay
navOverlay.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');
        hamburger.classList.remove('open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// close overlay when clicking outside the content (on overlay background)
navOverlay.addEventListener('click',(e)=>{
    if(e.target === navOverlay){
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');
        hamburger.classList.remove('open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
const contactForm = document.getElementById('contactForm');


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});


// ==========================
// MENU MOBILE
// ==========================

if (hamburger) {

    hamburger.addEventListener('click', () => {
        // toggle overlay instead of inline nav
        navOverlay.classList.toggle('active');
        // toggle body lock to prevent background scroll
        document.body.classList.toggle('nav-open');
        // toggle hamburger to X
        hamburger.classList.toggle('open');
        // swap icon
        if(hamburger.classList.contains('open')){
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

}


// Cerrar menú al seleccionar opción

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        // close overlay if open
        if(navOverlay) navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');

    });

});



// ==========================
// SECCION ACTIVA NAVBAR
// ==========================


const sections = document.querySelectorAll('section[id]');


window.addEventListener('scroll', () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 200;

        const sectionHeight = section.clientHeight;


        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute('id');

        }


    });



    document.querySelectorAll('.nav-links a').forEach(link => {


        link.classList.remove('active');


        if(link.getAttribute('href') === `#${current}`){

            link.classList.add('active');

        }


    });


});




// ==========================
// FORMULARIO CONTACTO
// ==========================


if(contactForm){


contactForm.addEventListener('submit',(e)=>{


    e.preventDefault();


    const name = document.getElementById('name').value;


    alert(
        `¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`
    );


    contactForm.reset();


});


}





// ==========================
// CONTADORES ANIMADOS
// ==========================


const counters = document.querySelectorAll('.counter');



function animateCounter(counter){


    const target = Number(counter.dataset.target);


    let count = 0;


    const speed = target / 100;



    function update(){


        if(count < target){


            count += speed;


            counter.innerText = Math.ceil(count);


            setTimeout(update,20);


        }else{


            counter.innerText = target + "+";


        }


    }



    update();


}




const counterObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            animateCounter(entry.target);


            counterObserver.unobserve(entry.target);


        }


    });



},
{
    threshold:0.5
});





counters.forEach(counter=>{

    counterObserver.observe(counter);

});





console.log("🚀 Suxe Studio Website cargado correctamente");
