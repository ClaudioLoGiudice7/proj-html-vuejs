//* NAV

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("scroll-top").style.display = "block";
    } else {
        document.getElementById("scroll-top").style.display = "none";
    }
}

const app = Vue.createApp({
    data() {
        return {
            headerLinks: [
                {
                    text: "Home",
                    href: "#",
                    class: "fs-5 yellow jump"
                },
                {
                    text: "About Us",
                    href: "#",
                    class: "fs-5 jump"
                },
                {
                    text: "Services",
                    href: "#",
                    class: "fs-5 jump"
                },
                {
                    text: "Shop",
                    href: "#",
                    class: "fs-5 jump"
                },
                {
                    text: "Our Team",
                    href: "#",
                    class: "fs-5 jump"
                },
                {
                    text: "Blog",
                    href: "#",
                    class: "fs-5 jump"
                },
                {
                    text: "Contact Us",
                    href: "#",
                    class: "fs-5 jump"
                },
            ],

            // PROVA FOOTER CON VUE NON RIUSCITA

            // upperLinks: [
            //     {
            //         image: "./img/avadabarbers_footer_shop_image-300x234.png",
            //         imageLink: "#",
            //         alt: "shop image",
            //         button: "SHOP OUR RANGE NOW",
            //     },
            //     {
            //         image: "./img/avadabarbers-logo-x1.png",
            //         imageLink: "#",
            //         alt: "logo footer",
            //         name: "Avada Barbers",
            //         street: "123 New York Street",
            //         city: "New York City",
            //         email: "info@yourwebsite.com",
            //         phone: "+1 (555) 555-1212",
            //     },
            //     {
            //         image: "./img/avadabarbers_footer_appointment_image-300x234.png",
            //         imageLink: "#",
            //         alt: "appointment image",
            //         button: "BOOK YOUR APPOINTMENT",
            //     },
            // ],

            // bottomText:
            //     "Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress",
        };
    },
});
app.mount("#app");