function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // When at least 10% of the video card is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    videoCards.forEach(card => observer.observe(card));
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // عندما يتجاوز التمرير 50 بكسل
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
});



