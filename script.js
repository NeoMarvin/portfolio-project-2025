// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site ready! ");

    // ========== 1. Contact Form Validation ==========
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop default submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠️ Please fill in all fields before submitting.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            alert("Thank you, your message has been submitted!");
            form.reset(); // Clear form
        });
    }

    // ========== 2. Skill Card Hover Alert ==========
    const skillCards = document.querySelectorAll(".card");
    skillCards.forEach((card) => {
        card.addEventListener("click", () => {
            alert(`You clicked on ${card.textContent} skill!`);
        });
    });

    // ========== 3. Hero Section Animation ==========
    const heroHeading = document.querySelector(".hero h2");
    if (heroHeading) {
        heroHeading.style.opacity = "0";
        setTimeout(() => {
            heroHeading.style.transition = "opacity 2s ease-in-out";
            heroHeading.style.opacity = "1";
        }, 500);
    }
});
