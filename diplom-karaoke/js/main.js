(function () {
    // Бургер

    document.addEventListener("click", burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest(".burger-icon");
        const burgerNavLink = e.target.closest(".info__link");
        const burgerNavButton = e.target.closest(".header-top__button");

        if (!burgerIcon && !burgerNavLink && !burgerNavButton) return;
        if (document.documentElement.clientWidth > 1450) return;

        if (!document.body.classList.contains("body--opened-burger")) {
            document.body.classList.add("body--opened-burger");
        } else {
            document.body.classList.remove("body--opened-burger");
        }
    }

    // Табы и слайдеры
    const tabControls = document.querySelector(".tab-conrols");
    const swipers = {}; // Объект для хранения всех свайперов

    // Функция инициализации всех свайперов при загрузке
    function initAllSwipers() {
        // Инициализируем свайперы для каждой галереи
        for (let i = 1; i <= 4; i++) {
            const gallery = document.querySelector(`#gallery${i}`);
            if (!gallery) continue;

            const slider = gallery.querySelector(".karaoke-rooms__slider");
            const thumbs = gallery.querySelector(".karaoke-rooms__thumbs");

            // Инициализируем слайдер миниатюр
            const thumbsSwiper = new Swiper(thumbs, {
                loop: true,
                centeredSlides: false,
                slidesPerView: 6,
                freeMode: true,
                watchSlidesProgress: true,
                allowTouchMove: false, // Отключаем свайп для миниатюр
                updateOnWindowResize: true,
                resizeObserver: true,
                observer: true,
                observeParents: true
            });

            // Инициализируем основной слайдер
            const mainSwiper = new Swiper(slider, {
                loop: true,
                centeredSlides: false,
                slidesPerView: 1,
                updateOnWindowResize: true,
                resizeObserver: true,
                observer: true,
                observeParents: true,
                allowTouchMove: false, // Отключаем свайп для неактивных слайдеров
                thumbs: {
                    swiper: thumbsSwiper
                },
                pagination: {
                    el: ".karaoke-rooms__pagination",
                    type: "fraction",
                    renderFraction: function (currentClass, totalClass) {
                        return (
                            '<span class="' +
                            currentClass +
                            ' custom-pagination-left"></span>' +
                            '<span class="custom-pagination-center">  из  </span>' +
                            '<span class="' +
                            totalClass +
                            ' custom-pagination-right"></span>'
                        );
                    },
                },
                navigation: {
                    nextEl: ".karaoke-rooms__next",
                    prevEl: ".karaoke-rooms__prev",
                },
            });

            // Сохраняем свайперы в объект
            swipers[`gallery${i}`] = {
                main: mainSwiper,
                thumbs: thumbsSwiper
            };

            // Для неактивных галерей отключаем управление
            if (!gallery.classList.contains('karaoke-rooms__gallery--show')) {
                mainSwiper.disable();
                thumbsSwiper.disable();
            }
        }
    }

    // Функция переключения активного свайпера
    function switchActiveSwiper(newGalleryId) {
        // Деактивируем все свайперы
        Object.keys(swipers).forEach(galleryId => {
            if (swipers[galleryId]) {
                swipers[galleryId].main.disable();
                swipers[galleryId].thumbs.disable();
            }
        });

        // Активируем новый свайпер
        if (swipers[newGalleryId]) {
            swipers[newGalleryId].main.enable();
            swipers[newGalleryId].thumbs.enable();
            swipers[newGalleryId].main.update();
            swipers[newGalleryId].thumbs.update();
        }
    }

    // Обработчик переключения табов
    tabControls.addEventListener("click", toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest(".tab-conrols__link");
        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains("tab-conrols__link--active")) return;

        const tabContentID = tabControl.getAttribute("href");
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector(".tab-conrols__link--active");
        const activeContent = document.querySelector(".tab-content--show");

        const tabNumber = tabContentID.replace('#tab', '');
        const galleryID = `gallery${tabNumber}`;
        const gallery = document.querySelector(`#${galleryID}`);
        const activeGallery = document.querySelector(".karaoke-rooms__gallery--show");

        // Снимаем активные классы
        if (activeControl) activeControl.classList.remove("tab-conrols__link--active");
        if (activeContent) activeContent.classList.remove("tab-content--show");
        if (activeGallery) activeGallery.classList.remove("karaoke-rooms__gallery--show");

        // Добавляем активные классы
        tabControl.classList.add("tab-conrols__link--active");
        tabContent.classList.add("tab-content--show");
        if (gallery) gallery.classList.add("karaoke-rooms__gallery--show");

        // Переключаем активный свайпер
        switchActiveSwiper(galleryID);
    }

    // Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', function () {
        initAllSwipers();
    });

    // Обновление свайперов при изменении размера окна
    window.addEventListener('resize', function () {
        Object.keys(swipers).forEach(galleryId => {
            if (swipers[galleryId]) {
                swipers[galleryId].main.update();
                swipers[galleryId].thumbs.update();
            }
        });
    });




    // // Слайдер-айфон

    const swiper = new Swiper(".telegram-booking__slider", {
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 100,
        breakpoints: {
            1801: {
                centeredSlides: true,
                slidesPerView: 5,
                spaceBetween: 100,
            },
            1451: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 100,
            },
            1001: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 100,
            },
            651: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 100,
            },
        },
        pagination: {
            el: ".telegram-booking__pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return (
                    '<span class="' +
                    currentClass +
                    ' custom-pagination-left"></span>' +
                    '<span class="custom-pagination-center">  из  </span>' +
                    '<span class="' +
                    totalClass +
                    ' custom-pagination-right"></span>'
                );
            },
        },

        navigation: {
            nextEl: ".telegram-booking__next",
            prevEl: ".telegram-booking__prev",
        },
    });

    // Аккордеон

    const accordionLists = document.querySelectorAll(".accordion-list");

    accordionLists.forEach((el) => {
        el.addEventListener("click", (e) => {
            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector(".accordion-list__item--opened");
            const accordionOpenedContent = accordionList.querySelector(".accordion-list__item--opened .accordion-list__content");

            const accordionControl = e.target.closest(".accordion-list__control");
            if (!accordionControl) return;
            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove("accordion-list__item--opened");
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle("accordion-list__item--opened");

            if (accordionItem.classList.contains("accordion-list__item--opened")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });


// Модальное окно - ультра-простой вариант
const modal = document.querySelector('.modal');
const body = document.body;

function openModal() {
    // Просто показываем модалку и блокируем скролл
    body.classList.add('body-modal--opened');
    modal.classList.add('modal--active');
}

function closeModal() {
    // Просто скрываем модалку и разблокируем скролл
    modal.classList.remove('modal--active');
    body.classList.remove('body-modal--opened');
}

// Обработчики событий
document.addEventListener('click', function(e) {
    // Открытие модалки
    if (e.target.closest('.button--modal')) {
        e.preventDefault();
        openModal();
    }
    
    // Закрытие модалки
    if (e.target.closest('.modal__exit') || e.target === modal) {
        e.preventDefault();
        closeModal();
    }
});

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
        closeModal();
    }
});

// Обработка формы
const modalForm = document.querySelector('.modal__form');
if (modalForm) {
    modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Форма отправлена');
        closeModal();
    });
}


    // маска для номера телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})();
