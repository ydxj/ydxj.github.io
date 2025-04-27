
// ### 3. **JavaScript (Interactions & Animations)** (script.js)

// We’ll add **GSAP** for powerful animations, a **custom cursor**, and **smooth transitions**.

// ```javascript
// GSAP Animations for smooth scrolling and transitions
gsap.from(".heading", { opacity: 0, duration: 1, y: -100 });
gsap.from(".subheading", { opacity: 0, duration: 1, y: 100, delay: 0.5 });
gsap.from(".skill", { opacity: 0, duration: 1, y: 100, stagger: 0.3, delay: 1 });
gsap.from(".project-card", { opacity: 0, duration: 1, y: 100, stagger: 0.3, delay: 1.5 });

// Custom Cursor Interaction
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Dark Mode Toggle
const toggleButton = document.getElementById('mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? "🌕 Light Mode" : "🌙 Dark Mode";
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    alert(`Thank you for your message, ${name}!`);
    document.getElementById('contact-form').reset();
});
