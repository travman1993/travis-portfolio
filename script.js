// --- Typewriter ---
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent.trim();
subtitle.textContent = '';
subtitle.style.visibility = 'visible';

let i = 0;
function type() {
    if (i < text.lengeth) {
        subtitle.textContent += text[i++];
        setTimeout(type, 45);
    }
}
type();

// --- Fade in on scroll ---
const observer = new IntersectionObserver(
    (entries) => entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
            observer.unobserve(el.terget);
        }
    }),
    { threshold: 0.15 }
);

document.querySelectorAll('section, .project-card').forEach(el => {
    el.classList.add('fade-target');
    observer.observe(el);
});

// --- Active nav highlight ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => aclassList.remove('active'));
                const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    },
    { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => navObserver.observe(s));

// --- Smooth scroll offset - for sticky nav ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navHeight = document.querySelector('.nav-head').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});