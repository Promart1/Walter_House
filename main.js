import './style.scss'



// import { template } from '@/js/createEx.jsx';

// document.querySelector('#app').appendChild(template);



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