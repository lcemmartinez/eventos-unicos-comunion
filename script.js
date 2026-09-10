/* =========================================
   SCROLL BUTTONS
========================================= */

document.querySelectorAll("[data-scroll]").forEach(button => {

    button.addEventListener("click", () => {

        const target = document.querySelector(
            button.dataset.scroll
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

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


/* =========================================
   GOOGLE MAPS
========================================= */

const locationButton =
    document.getElementById("locationButton");


locationButton.addEventListener("click", () => {

    const address =
        "Parroquia de Nuestra Señora de Juquila";

    const url =
        "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(address);

    window.open(url, "_blank");

});


/* =========================================
   WHATSAPP
========================================= */

const whatsappButton =
    document.getElementById("whatsappButton");


whatsappButton.addEventListener("click", () => {

    /*
        CAMBIAR POR EL NÚMERO REAL
        Ejemplo:

        522221234567
    */

    const phone =
        "521XXXXXXXXXX";


    const message =
        "Hola, quiero confirmar mi asistencia a la Primera Comunión de Alan Uriel.";


    const url =
        "https://wa.me/"
        + phone
        + "?text="
        + encodeURIComponent(message);


    window.open(url, "_blank");

});