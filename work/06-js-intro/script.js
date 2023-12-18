const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menuButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        menu.classList.toggle('open');
        event.preventDefault(); 
    }
});

menu.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && !event.shiftKey) {
        menu.querySelector('a').focus();
        event.preventDefault(); 
    }
});

document.addEventListener("click", function(event) {
    if (!event.target.matches('#menu-button') && !menu.contains(event.target)) {
        menu.classList.remove('open');
    }
});