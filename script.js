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
const mobileMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

/* =========================================
   SEATING CHART - GUEST LOOKUP
========================================= */

const seatingGuests = {

    /* TABLE 1 */
    "claudia baeza": ["Table 1"],
    "maribel garza": ["Table 1"],
    "rolando garza": ["Table 1"],
    "darcy mae garza": ["Table 1"],
    "dakota lynn garza": ["Table 1"],
    "daleyza garza": ["Table 1"],
    "saul castillo": ["Table 1"],
    "rolando garza jr": ["Table 1"],

    /* TABLE 2 */
    "bernice ortiz": ["Table 2"],
    "dennis ortiz": ["Table 2"],
    "maribel carmona": ["Table 2"],
    "taylor sky carmona": ["Table 2"],
    "raul banda": ["Table 2"],
    "desiree calles": ["Table 2"],
    "juan sanchez": ["Table 2"],
    "cristina sanchez": ["Table 2"],
    "librada teneyuca": ["Table 2"],

    /* TABLE 3 */
    "martha olivo": ["Table 3"],
    "mariah olivo": ["Table 3"],
    "esmeralda olivo": ["Table 3"],
    "ricardo olivo": ["Table 3"],
    "albert olivo": ["Table 3"],
    "vanessa olivo": ["Table 3"],
    "daniel olivo": ["Table 3"],
    "brayden olivo": ["Table 3"],
    "veronica horanzy": ["Table 3"],
    "derek horanzy": ["Table 3"],

    /* TABLE 4 */
    "hailee dillard": ["Table 4"],
    "irene sanchez": ["Table 4"],
    "jacob escobedo": ["Table 4"],
    "lazaro carmona": ["Table 4"],
    "maria cadena": ["Table 4"],
    "jennefer navarro": ["Table 4"],
    "clemente navarro": ["Table 4"],
    "carlo navarro": ["Table 4"],
    "jesus ramirez": ["Table 4"],
    "dolores ramirez": ["Table 4"],

    /* TABLE 5 */
    "jaime olivo": ["Table 5"],
    "noemi olivo": ["Table 5"],
    "mauro olivo": ["Table 5"],
    "andrea olivo": ["Table 5"],
    "maite olivo": ["Table 5"],
    "paula olivo": ["Table 5"],

    /* TABLE 6 */
    "isabella olivo": ["Table 6"],
    "emma olivo": ["Table 6"],
    "agripina guerra": ["Table 6"],
    "melissa segars": ["Table 6"],
    "jon segars jr": ["Table 6"],
    "juanita z. castillo": ["Table 6"],
    "josie soto": ["Table 6"],
    "lloyd soto": ["Table 6"],
    "rebecca olivo plasencia": ["Table 6"],
    "david plasencia": ["Table 6"],

    /* TABLE 7 */
    "crystal gamez": ["Table 7"],
    "bryan vedarte": ["Table 7"],
    "sergio gamez": ["Table 7"],
    "miguel gamez": ["Table 7"],
    "adan gamez": ["Table 7"],
    "julian gamez": ["Table 7"],
    "april gamez": ["Table 7"],
    "ashley pena": ["Table 7"],

    /* TABLE 8 */
    "ana carmona": ["Table 8"],
    "sergio carmona": ["Table 8"],
    "adriana carmona": ["Table 8"],
    "fernanda carmona": ["Table 8"],
    "juliette carmona": ["Table 8"],
    "alejandra": ["Table 8"],
    "junior flores": ["Table 8"],
    "marina": ["Table 8"],

    /* TABLE 9 */
    "luis garza": ["Table 9"],
    "ana medellin": ["Table 9"],
    "gerardo garza sr": ["Table 9"],
    "gerardo garza jr": ["Table 9"],
    "eida garza": ["Table 9"],
    "aiden garza": ["Table 9"],
    "jaiden garza": ["Table 9"],
    "katelin garza": ["Table 9"],
    "jerry garza iii": ["Table 9"],
    "devyn lopez": ["Table 9"],

    /* TABLE 10 */
    "lourdes trevino": ["Table 10"],
    "hector hernandez": ["Table 10"],
    "autumn crow": ["Table 10"],
    "eric hernandez": ["Table 10"],
    "jax hernandez": ["Table 10"],
    "cadence crow": ["Table 10"],
    "chloe hernandez": ["Table 10"],
    "colton lopez": ["Table 10"],

    /* TABLE 11 */
    "cecilia flores": ["Table 11"],
    "alexes garcia": ["Table 11"],
    "cristobal": ["Table 11"],
    "jesse vasquez": ["Table 11"],
    "cely vasquez": ["Table 11"],
    "delilah vasquez": ["Table 11"],
    "destiny vasquez": ["Table 11"],
    "darlene vasquez": ["Table 11"],
    "desiree vasquez": ["Table 11"],

    /* TABLE 12 */
    "jose vasquez": ["Table 12"],
    "jennifer vasquez": ["Table 12"],
    "alyssa vasquez": ["Table 12"],
    "kalyssa vasquez": ["Table 12"],
    "melania vasquez": ["Table 12"],
    "adolio vasquez": ["Table 12"],

    /* TABLE 13 */
    "denise barco": ["Table 13"],
    "pablo barco": ["Table 13"],
    "brenda gonzalez": ["Table 13"],
    "david villarreal": ["Table 13"],
    "cristina villarreal": ["Table 13"],
    "eli lopez": ["Table 13"],
    "maria lopez": ["Table 13"],
    "alexsandra ferreira": ["Table 13"],
    "alberto ferreira": ["Table 13"],
    "sherie esparza": ["Table 13"],

    /* TABLE 14 */
    "jessica villarreal": ["Table 14"],
    "jackie flores": ["Table 14"],
    "jeralyn johnson": ["Table 14"],
    "amelia valdez": ["Table 14"],
    "patty perez": ["Table 14"],
    "daniel perez": ["Table 14"],
    "daniella perez": ["Table 14"],

    /* TABLE 15 */
    "brenda tamez": ["Table 15"],
    "jose tames": ["Table 15"],
    "katherine gonzalez": ["Table 15"],
    "priscilla trevino": ["Table 15"],
    "maricela rodriguez": ["Table 15"],

    /* TABLE 16 */
    "brian toste": ["Table 16"],
    "karla toste": ["Table 16"],
    "isabella toste": ["Table 16"],
    "adrian toste": ["Table 16"],
    "xarenii toste": ["Table 16"],
    "aurelia reyes": ["Table 16"],
    "lupe hernandez": ["Table 16"],
    "jasmine reyes": ["Table 16"],

    /* TABLE 17 */
    "claudia ramires": ["Table 17"],
    "k-lee ramires": ["Table 17"],
    "daniel ramires": ["Table 17"],
    "julio rubio": ["Table 17"],
    "sue ellen alcayde": ["Table 17"],
    "juan rocha": ["Table 17"],
    "juan juan rocha jr": ["Table 17"],
    "amber rocha": ["Table 17"],
    "hector soto": ["Table 17"],
    "gladys solis": ["Table 17"],

    /* TABLE 18 */
    "natalie molina": ["Table 18"],
    "stephanie trevino": ["Table 18"],
    "josio": ["Table 18"],
    "joshua": ["Table 18"],
    "joseph": ["Table 18"],
    "jovin": ["Table 18"],

    /* TABLE 19 */
    "carlos castro": ["Table 19"],
    "priscilla castro": ["Table 19"],
    "ramon salazar": ["Table 19"],
    "maribel salazar": ["Table 19"],
    "klarissa salazar": ["Table 19"],
    "nino hernandez": ["Table 19"],
    "malory hernandez": ["Table 19"],
    "mila hernandez": ["Table 19"],
    "christine hernandez": ["Table 19"],

    /* COURT */
    "roxanne romero": ["Court"],
    "mason gonzalez": ["Court"],
    "charlie navarro": ["Court"],
    "clemency navarro": ["Court"],
    "sophia caudillo": ["Court"],
    "sophia perez": ["Court"],
    "david gallegos": ["Court"],
    "andrea romagnoli": ["Court"],
    "alyza benavides": ["Court"],
    "destinee ramos": ["Court"]
};


/* FIND MY TABLE */

const guestSearchInput = document.getElementById("guest-search");
const searchSeatButton = document.getElementById("search-seat");
const seatingResult = document.getElementById("seating-result");

if (guestSearchInput && searchSeatButton && seatingResult) {

    function findGuestTable() {

        const guestName = guestSearchInput.value
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");

        if (!guestName) {
            seatingResult.innerHTML =
                "<p>Please enter your name.</p>";
            return;
        }

        const tables = seatingGuests[guestName];

        if (tables) {

            seatingResult.innerHTML = `
                <div class="seat-result-box">
                    <p>✨ <strong>${guestSearchInput.value.trim()}</strong> ✨</p>
                    <p>Your table is</p>
                    <h3>${tables.join(" & ")}</h3>
                </div>
            `;

        } else {

            seatingResult.innerHTML = `
                <div class="seat-result-box">
                    <p>We couldn't find that name.</p>
                    <p>Please check the spelling or try entering your first and last name.</p>
                </div>
            `;
        }
    }

    searchSeatButton.addEventListener("click", findGuestTable);

    guestSearchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            findGuestTable();
        }
    });
}
