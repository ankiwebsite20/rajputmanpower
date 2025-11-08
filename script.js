// ---------------- Smooth Scrolling for Navigation ----------------
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ---------------- Slideshow Functionality ----------------
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // change every 5 s
}


// ---------------- Contact Form Validation + Redirect ----------------
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert('⚠️ Please fill in all required fields.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('📧 Please enter a valid email address.');
        return;
    }

    // Success Message
    alert('✅ Thank you for your message! We’ll get back to you soon.');

    // Reset the form
    this.reset();

    // Redirect to homepage (or any section you prefer)
    window.location.href = "index.html";
    // For internal smooth scroll use:
    // window.location.href = "#home";
});


// ---------------- Scroll-to-Top Button ----------------
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

// Button Styles (inline to avoid dependency on CSS file order)
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.backgroundColor = "#007bff";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.width = "45px";
scrollBtn.style.height = "45px";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
scrollBtn.style.zIndex = "999";
scrollBtn.style.transition = "opacity 0.3s, transform 0.3s";

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
        scrollBtn.style.opacity = "1";
    } else {
        scrollBtn.style.opacity = "0";
        setTimeout(() => (scrollBtn.style.display = "none"), 300);
    }
});

scrollBtn.addEventListener("mouseenter", () => {
    scrollBtn.style.transform = "scale(1.1)";
});
scrollBtn.addEventListener("mouseleave", () => {
    scrollBtn.style.transform = "scale(1)";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ---------------- Fade-in Animation on Scroll ----------------
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});
