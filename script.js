/* =====================================
   MOBILE MENU
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");

    } else {

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");

    }

});


/* =====================================
   CLOSE MENU AFTER CLICKING A LINK
===================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


/* =====================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================== */

document.addEventListener("click", function (event) {

    const clickedMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuBtn.contains(event.target);

    if (
        !clickedMenu &&
        !clickedButton &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

});


/* =====================================
   COPY EMAIL
===================================== */

const copyEmailBtn =
    document.getElementById("copyEmailBtn");

const emailAddress =
    document.getElementById("emailAddress");

const copyMessage =
    document.getElementById("copyMessage");


copyEmailBtn.addEventListener("click", async function () {

    const email =
        emailAddress.textContent.trim();

    try {

        await navigator.clipboard.writeText(email);

        copyMessage.textContent =
            "✓ Email copied successfully!";

        copyEmailBtn.textContent =
            "Copied!";

        setTimeout(function () {

            copyMessage.textContent = "";

            copyEmailBtn.textContent =
                "Copy Email";

        }, 2000);

    } catch (error) {

        copyMessage.textContent =
            "Please copy the email manually.";

    }

});