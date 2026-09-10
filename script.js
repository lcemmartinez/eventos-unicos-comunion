/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll("[data-scroll]").forEach(button => {

    button.addEventListener("click", () => {

        const target = document.querySelector(
            button.getAttribute("data-scroll")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================
   ANIMACIONES
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   GOOGLE MAPS
========================= */

// CEREMONIA
const churchAddress =
    "Parroquia de Nuestra Señora de Juquila, Puebla, Mexico";


// RECEPCIÓN
const receptionAddress =
    "Privada Xaltonac 423, Colonia Indios Verdes, Puebla, Mexico";


/* =========================
   BOTÓN CEREMONIA
========================= */

const churchButton =
    document.getElementById("churchLocation");

if (churchButton) {

    churchButton.addEventListener("click", () => {

        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(churchAddress);

        window.open(url, "_blank");

    });

}


/* =========================
   BOTÓN RECEPCIÓN
========================= */

const receptionButton =
    document.getElementById("receptionLocation");

if (receptionButton) {

    receptionButton.addEventListener("click", () => {

        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(receptionAddress);

        window.open(url, "_blank");

    });

}


/* =========================
   SEGUNDO BOTÓN RECEPCIÓN
========================= */

const receptionButtonBottom =
    document.getElementById(
        "receptionLocationBottom"
    );

if (receptionButtonBottom) {

    receptionButtonBottom.addEventListener("click", () => {

        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(receptionAddress);

        window.open(url, "_blank");

    });

}


/* =========================
   WHATSAPP
========================= */

// Sustituir por el número real
const phone =
    "521XXXXXXXXXX";

const whatsappButton =
    document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        const message =
            "Hola, quiero confirmar mi asistencia a la celebración de la Primera Comunión de Alan Uriel y el Bautizo de Emmanuel Yassiel.";

        const url =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(message);

        window.open(url, "_blank");

    });

}