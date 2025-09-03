(function () {
    // Бургер 
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
    // Модалки
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }
    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-conrols__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')

    }

    // Аккардеон 

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });


    // Слайдер-галерея
    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 320px
            451: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });




    // Слайдер-отзывы
    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,


        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },


        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }

        }
    });


// инпут с номером телефона 

    document.addEventListener('DOMContentLoaded', function () {
        const phoneInput = document.getElementById('phone-input');

        const originalPlaceholder = phoneInput.placeholder || 'телефон';
        const formattedPlaceholder = '+7 (___) ___-__-__';

        phoneInput.addEventListener('focus', function () {
            this.placeholder = formattedPlaceholder;
        });

        phoneInput.addEventListener('blur', function () {
            if (this.value === '') {
                this.placeholder = originalPlaceholder;
            }
        });



        phoneInput.addEventListener('input', function (e) {
            let numbers = this.value.replace(/\D/g, '');
            if (numbers.startsWith('8')) {
                numbers = '7' + numbers.substring(1);
            }
            if (!numbers.startsWith('7') && numbers.length > 0) {
                numbers = '7' + numbers;
            }
            if (numbers.length > 11) {
                numbers = numbers.substring(0, 11);
            }
            let formatted = '';
            if (numbers.length > 0) {
                formatted = '+7';
                if (numbers.length > 1) {
                    formatted += ' (' + numbers.substring(1, 4);
                }
                if (numbers.length > 4) {
                    formatted += ') ' + numbers.substring(4, 7);
                }
                if (numbers.length > 7) {
                    formatted += '-' + numbers.substring(7, 9);
                }
                if (numbers.length > 9) {
                    formatted += '-' + numbers.substring(9, 11);
                }
            }

            this.value = formatted;
        });

        phoneInput.addEventListener('paste', function (e) {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text');
            const numbers = text.replace(/\D/g, '');

            this.value = numbers;
            this.dispatchEvent(new Event('input', { bubbles: true }));
        });
    });
})()
