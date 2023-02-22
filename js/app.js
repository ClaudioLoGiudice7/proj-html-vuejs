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
            links: [
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
            ]
        };
    },
});
app.mount("#app");