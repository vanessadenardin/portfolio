const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.hamburger-links');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    const isActive = hamburger.classList.contains('is-active');
    if (isActive) {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }
})
// remove hamburger if menu is open and window gets resized
window.addEventListener('resize', function () {
    var currentWidth = document.documentElement.clientWidth;
    if (currentWidth > 600) {
        const isActive = hamburger.classList.contains('is-active');
        if (isActive) {
            links.style.display = 'none';
            hamburger.classList.remove('is-active');
        }
    }
});
