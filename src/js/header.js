function toggleMenu() {
    var menu = document.getElementById('navMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function closeMenu() {
    var menu = document.getElementById('navMenu');
    menu.style.display = 'none';
}