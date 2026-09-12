const contactButton = document.getElementById("contactButton");

const year = document.getElementById("year");


year.textContent = new Date().getFullYear();


contactButton.addEventListener("click", function () {

    const email = "erdemciftcitr@gmail.com";

    const subject = "Erdem Digital - Proje Talebi";

    window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}`;

});