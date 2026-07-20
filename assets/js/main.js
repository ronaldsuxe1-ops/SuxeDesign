// ==========================
// VARIABLES GLOBALES
// ==========================

const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
// (mobile overlay removed) use existing `.nav-links` element for mobile menu
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
        // toggle the mobile nav links
        if(navLinks){
            navLinks.classList.toggle('active');
        }
        // toggle body lock to prevent background scroll
        document.body.classList.toggle('nav-open');
        // toggle hamburger icon
        hamburger.classList.toggle('open');
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

        // close mobile nav if open
        if(navLinks) navLinks.classList.remove('active');
        document.body.classList.remove('nav-open');
        // reset hamburger icon
        if(hamburger){ hamburger.classList.remove('open'); hamburger.innerHTML = '<i class="fas fa-bars"></i>'; }

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


// ==========================
// TABS SERVICIOS
// ==========================

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

if(tabButtons.length){
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}






console.log("🚀 Suxe Studio Website cargado correctamente");