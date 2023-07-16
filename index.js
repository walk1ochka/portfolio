const header = document.querySelector('header');
const nav = document.getElementById('nav');
header.addEventListener('click', e => {
    e.stopPropagation();
    const target = e.target;
    console.log(target.classList);
    if (target.classList.contains('header__burger')) {
        nav.classList.add('active');
    } else if (target.classList.contains('close') || target.classList.contains('header__link')) {
        nav.classList.remove('active');
    }
});