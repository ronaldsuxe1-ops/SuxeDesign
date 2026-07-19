// ==========================
// VARIABLES GLOBALES
// ==========================

const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
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

        navLinks.classList.toggle('active');

    });

}


// Cerrar menú al seleccionar opción

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

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