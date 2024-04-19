import './style.scss'



// import { template } from '@/js/createEx.jsx';

// document.querySelector('#app').appendChild(template);

//////////header menu

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("headerModal");
    var btn = document.getElementById("openHeaderModalBtn");
    var span = document.getElementsByClassName("close")[0];

    if (btn && modal && span) {
        btn.onclick = function() {
            modal.style.display = "block";
            document.body.classList.add("modal-open"); // Disable scrolling
        };

        span.onclick = function() {
            closeModal();
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };

        // Додайте обробник події для клавіші "Escape"
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }

    // Функція для закриття модального вікна і відновлення прокрутки сторінки
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Enable scrolling
    }
});


///////validation form



const validateInputs = () => {
    const inputs = document.querySelectorAll('.first-screen__input');
    let hasError = false;

    inputs.forEach(function(input) {
        const value = input.value.trim();
        const validationTextDanger = input.nextElementSibling;

        if (value === '') {
            input.classList.add('first-screen__input-error');
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block';
            }
            hasError = true;
        } else {
            input.classList.remove('first-screen__input-error');
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });

    return hasError;
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.first-screen__form-btn');

    if (submitBtn && form) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const hasInputError = validateInputs();

            if (!hasInputError) {
                form.submit(); // Відправляє форму
            }
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Зупиняє дію за замовчуванням (відправку форми)
            location.reload(); // Оновлює сторінку після відправки форми (опціонально)
        });
    }
});






