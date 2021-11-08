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


// Прокрутка при клике на ссылку в шапке
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


function activateElement(event, className, elements) {
    if (event.currentTarget.classList.contains(className)) {
        event.currentTarget.classList.remove(className)
    } else {
        elements.forEach(item => {
            item.classList.remove(className);
        })
        event.currentTarget.classList.add(className);
    }
}

/* Slide Script */

// Изменение кнопки
const slideButtons = document.querySelectorAll('.button-block__button');

if (slideButtons.length > 0) {
    slideButtons.forEach(item => {
        item.addEventListener("click", activateButton);
    });

    function activateButton(e) {
        activateElement(e, 'activeSlideButton', slideButtons);
    }
}


// Services script

//нажатие на карточки
const serviceCards = document.querySelectorAll('.services-blocks__service');

if (serviceCards.length > 0) {
    serviceCards.forEach(item => {
        item.addEventListener("click", activateServiceCard);
    });

    function activateServiceCard(e) {
        activateElement(e, 'activeServiceCard', serviceCards);
    }
}

// для мобильной версии показ карточек
document.getElementById('serviceButton').onclick = showAll;

function showAll() {
    const hiddenService = document.querySelectorAll('.hidden-service');

    hiddenService.forEach(item => {
        item.classList.toggle('show-service');
    })
}


// Price script

// При нажатии на кнопку меняется стиль
const priceButtons = document.querySelectorAll('.tariff__button');

if (priceButtons.length > 0) {
    priceButtons.forEach(item => {
        item.addEventListener("click", activatePriceButton);
    });

    function activatePriceButton(e) {
        activateElement(e, 'activePriceButton', priceButtons);
    }
}

// При наведении на блок появляется тень
const priceCards = document.querySelectorAll('.tariff-block__tariff');

if (priceCards.length > 0) {
    priceCards.forEach(item => {
        item.addEventListener("mouseover", addShadow);
        item.addEventListener("mouseout", deleteShadow);
    });

    function addShadow(e) {
        e.currentTarget.classList.add('tariff-block__tariff-shadow');
    }

    function deleteShadow(e) {
        e.currentTarget.classList.remove('tariff-block__tariff-shadow');
    }
}


// Contact script

//Валидация формы

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

let formReq = document.querySelectorAll('.required')
let emailInput;
let nameInput;
let telInput;

for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    if (input.classList.contains('email')) {
        emailInput = input;
        input.addEventListener('change', validateEmail);
    }
    if (input.classList.contains('name')) {
        nameInput = input;
        input.addEventListener('change', validateName);
    }
    if (input.classList.contains('tel')) {
        telInput = input;
        input.addEventListener('change', validateTel);
    }
}

function validateEmail() {
    if (!testEmail(emailInput)) {
        formAddError(emailInput);
        return;
    } else {
        formRemoveError(emailInput);
    }
    if (testName(nameInput) && testTel(telInput)) {
        activateFormButton();
    }
}

function validateName() {
    if (!testName(nameInput)) {
        formAddError(nameInput);
        return;
    } else {
        formRemoveError(nameInput);
    }
    if (testEmail(emailInput) && testTel(telInput)) {
        activateFormButton();
    }
}

function validateTel() {
    if (!testTel(telInput)) {
        formAddError(telInput);
        return;
    } else {
        formRemoveError(telInput);
    }
    if (testName(nameInput) && testEmail(emailInput)) {
        activateFormButton();
    }
}

function activateFormButton() {
    console.log('activated');
    const button = document.querySelector('.form__button');
    button.classList.add('activeButton');
}

function deactivateFormButton() {
    const button = document.querySelector('.form__button');
    button.classList.remove('activeButton');
}

function formSend(e) {
    e.preventDefault();
    // будем отправлять :)
}


function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
    deactivateFormButton();
}

function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
}

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
let telRegex = /^((80)|(\+375))(((29)|(33)|(25)|(44))|\(((29)|(33)|(25)|(44)\)))\d{3}-?\d{2}-?\d{2}$/;

//функция теста email
function testEmail(input) {
    return input.value !== '' && emailRegex.test(input.value);
}

//функция теста name
function testName(input) {
    return input.value !== '';
}

//функция теста tel
function testTel(input) {
    return input.value !== '' && telRegex.test(input.value);
}




// Стрелки в мобильной версии
const arrowList = document.querySelectorAll('.arrow');

if (arrowList.length > 0) {
    arrowList.forEach(item => {
        item.addEventListener("click", showClass);
    });

    function showClass(e) {
        const arrow = e.target;
        arrow.classList.toggle('arrowUp');

        const hiddenBlocks = Array.from(arrow.parentElement.children).filter(item => {
            return item.classList.contains('hidden-class');
        });

        hiddenBlocks.forEach(item => {
            item.classList.toggle('active');
        })
    }
}
