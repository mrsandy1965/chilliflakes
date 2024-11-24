// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');

function updateHeaderSticky() {
    const scrollPosition = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (scrollPosition > heroBottom) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', updateHeaderSticky);
window.addEventListener('resize', updateHeaderSticky);

