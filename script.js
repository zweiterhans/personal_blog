// New features
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Topo";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.fontSize = "16px";
backToTopBtn.style.display = "none";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.borderRadius = "5px";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ======= MODO ESCURO/CLARO =======
const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "🌙";
themeToggleBtn.id = "themeToggle";
document.body.appendChild(themeToggleBtn);

themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.bottom = "60px";
themeToggleBtn.style.right = "20px";
themeToggleBtn.style.padding = "10px";
themeToggleBtn.style.fontSize = "16px";
themeToggleBtn.style.cursor = "pointer";
themeToggleBtn.style.borderRadius = "5px";

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggleBtn.innerText = theme === "dark" ? "☀️" : "🌙";
}

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme === "light" ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
});


const progressBar = document.createElement("div");
progressBar.id = "progressBar";
document.body.appendChild(progressBar);

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.backgroundColor = "#29d";
progressBar.style.width = "0%";
progressBar.style.zIndex = "1000";

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});


const animatedElements = document.querySelectorAll(".animate-on-scroll");

function checkScrollAnimations() {
    const triggerBottom = window.innerHeight * 0.85;
    animatedElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScrollAnimations);
checkScrollAnimations();
