import './styles/styles.scss';


(function smoothAnchor() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = anchor.getAttribute('href').substr(1);
            document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }
})();

(function changeNumberInForm() {
    //variables for work this form
    const formBlok = document.querySelector('.tickects__form-right');
    const formInputSenior = document.querySelector('.tickects__senior');
    const formInputBasic = document.querySelector('.tickects__basic');
    //variables for work this form in popup
    const popupBlok = document.querySelector('.popup__ticket');
    const popupInputSenior = document.querySelector('.popup__senior');
    const popupInputBasic = document.querySelector('.popup__basic');
    formBlok.addEventListener('click', (e) => {
        changeValue(e, formInputBasic, formInputSenior);
    });
    popupBlok.addEventListener('click', (e) => {
        changeValue(e, popupInputBasic, popupInputSenior);
    });

    function changeValue(e, inputBasic, inputSenior) {
        if (e.target.className != 'tickects__input-button' && e.target.className != 'popup__input-button') return;

        const button = e.target;
        switch (button.name) {
            case 'basic':
                {
                    if (button.value === '+') {
                        inputBasic.value = +inputBasic.value + 1;
                        break;
                    } else {
                        if (inputBasic.value > 0) {
                            inputBasic.value = +inputBasic.value - 1;
                        }
                        break;
                    }
                }
            case 'senior':
                {
                    if (button.value === '+') {
                        inputSenior.value = +inputSenior.value + 1;
                        break;
                    } else {
                        if (inputSenior.value > 0) {
                            inputSenior.value = +inputSenior.value - 1;
                        }
                        break;
                    }
                }
        }
    }
})();

(function popup() {
    //variables for work this popup
    const popup = document.querySelector(".popup");
    const popupClose = document.querySelector('.close-popup');
    const contactButton = document.querySelector('.tickects__button');

    popupClose.addEventListener("click", hidePopup);
    contactButton.addEventListener("click", showPopup);

    function showPopup() {
        popup.style.display = "flex";
    }

    function hidePopup() {
        popup.style.display = "none";
    }
    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            hidePopup();
        }
    });
})();

(function slider() {
    $(document).ready(function() {
        $('.welcome__slider').slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
        });
        $('.video__first').slick({
            arrows: false,
            dots: false,
            slidesToShow: 1,
        });
        $('.video__second').slick({
            arrows: true,
            dots: true,
            slidesToShow: 3,
            asNavFor: ".video__first",
            responsive: [{
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            }, ]
        });
    })
})();