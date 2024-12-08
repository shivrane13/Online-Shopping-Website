const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuEle = document.getElementById('mobile-menu');
console.log('10');
function toggleMobileMenu() {
    mobileMenuEle.classList.toggle('open');
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);