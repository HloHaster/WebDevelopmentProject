/* Header Script */

const header = document.querySelector('.header');
const slideHeight = document.querySelector('.slide').clientHeight;

window.addEventListener('scroll', function () {
    const scrollFromTop = document.querySelector('html').scrollTop;
    header.style.backgroundColor = scrollFromTop > slideHeight ? '#EBEBEB' : '';
    }
)