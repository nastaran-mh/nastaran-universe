console.log("The script.js file was loaded correctly!");//To check the file in the console to make sure it is uploaded correctly
//Soft scroll
document.addEventListener("DOMContentLoaded", () => {
    //Select all the links in the menu
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Avoid sudden page jumps

            const targetId = this.getAttribute("href"); // Getting the ID of the destination (like #about)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                console.log("scroll to ${targetId}"); // Check in the console
            } else {
                console.log("Section ${targetId} not found!");
            }
        });
    });
});
//checking button
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    
    if (themeToggle) {
        console.log("Button found!");
    } else {
        console.log("Button not found! Check that the id is correct.");
    }
});
//theme changinge
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            console.log("theme changed!!");
        });
    }
});
//Add animation to the page
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            console.log("Check section: ${sectionTop < triggerPoint}");

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
                console.log("The section has been displayed!");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Check at the moment the page loads
});

