// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode/Light Mode Toggle
// Dark Mode/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const elementsToToggle = [body, themeToggleBtn, document.querySelector('.navbar'), document.querySelector('footer')];

themeToggleBtn.addEventListener('click', () => {
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

