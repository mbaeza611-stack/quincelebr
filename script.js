/*=========================================
    THE BLACK BALL
    DESTINEE KAYLEEN
==========================================*/

/*=========================================
    COUNTDOWN
==========================================*/

const eventDate = new Date("September 18, 2026 17:30:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    minutes.textContent = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    seconds.textContent = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
    STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(5,5,5,.95)";

    }else{

        navbar.style.background="rgba(5,5,5,.88)";

    }

});

/*=========================================
    SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });
});
/*=========================================
    FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        const open = answer.style.display === "block";

        document.querySelectorAll(".faq-item p").forEach(p => {
            p.style.display = "none";
        });

        if (!open) {
            answer.style.display = "block";
        }

    });

});

/*=========================================
    FADE IN ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/*=========================================
    ACTIVE NAVIGATION LINK
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
    MOBILE MENU
=========================================*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


