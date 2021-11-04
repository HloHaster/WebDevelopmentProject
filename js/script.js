/* Header Script */

// При прокрутке меняет цвет header
const header = document.querySelector('.header');
const slideHeight = document.querySelector('.slide').offsetHeight;

window.addEventListener('scroll', function () {
    const scrollFromTop = document.querySelector('html').scrollTop;
    header.style.backgroundColor = scrollFromTop > slideHeight ? '#EBEBEB' : '';
    }
)

// Burger
document.getElementById('trigger').onclick = function () {
    open()
};

function open() {
    document.getElementById('menu').classList.toggle('active');
    document.body.classList.toggle('lock')
    document.getElementById('trigger').classList.toggle('header__close');
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.list__item');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}


/* Slide Script */

// Изменение кнопки
const slideButtons = document.querySelectorAll('.button-block__button');

if (slideButtons.length > 0) {
    slideButtons.forEach(item => {
        item.addEventListener("click", addClass);
    });

    function addClass(e) {
        e.target.classList.toggle('activeSlideButton');
    }
}
