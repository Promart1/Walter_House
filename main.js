import './style.scss'



// import { template } from '@/js/createEx.jsx';

// document.querySelector('#app').appendChild(template);

//////////header menu

// document.addEventListener("DOMContentLoaded", function() {
//     // var modal = document.getElementById("headerModal");
//      var modal = document.querySelectorAll(".main-popUp");
//     var btn = document.getElementById("openHeaderModalBtn");
//     var span = document.getElementsByClassName("close")[0];

//     if (btn && modal && span) {
//         btn.onclick = function() {
//             modal.style.display = "block";
//             document.body.classList.add("modal-open"); // Disable scrolling
//         };

//         span.onclick = function() {
//             closeModal();
//         };

//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 closeModal();
//             }
//         };

//         // Додайте обробник події для клавіші "Escape"
//         document.addEventListener("keydown", function(event) {
//             if (event.key === "Escape") {
//                 closeModal();
//             }
//         });
//     }

//     // Функція для закриття модального вікна і відновлення прокрутки сторінки
//     function closeModal() {
//         modal.style.display = "none";
//         document.body.classList.remove("modal-open"); // Enable scrolling
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll(".main-popUp");
    const modalButtons = document.querySelectorAll(".openModalBtn");
    const closeButtons = document.querySelectorAll(".close");

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetModalId = button.getAttribute("data-modal-target");
            const targetModal = document.getElementById(targetModalId);
            openModal(targetModal);
        });
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", () => {
            const modal = closeButton.closest(".main-popUp");
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal) {
            modal.style.display = "block";
            document.body.classList.add("modal-open"); // Disable scrolling
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open"); // Enable scrolling
        }
    }

    window.addEventListener("click", event => {
        if (event.target.classList.contains("main-popUp")) {
            closeModal(event.target);
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            const openModals = document.querySelectorAll(".main-popUp[style='display: block;']");
            openModals.forEach(openModal => {
                closeModal(openModal);
            });
        }
    });
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
                form.submit(); 
            }
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            location.reload(); 
        });
    }
});


/////////services list


document.addEventListener('DOMContentLoaded', function() {
  
  const services = [
    'Dismantling and erection of interior partitions',
    'Wall treatments (alignment, finishing, wallpapering)',
    'Electrical and low-current installations',
    'Flooring services (screed pouring, laminate installation)',
    'Installation of PVC floor plinth',
    'Stretch ceiling',
      'Cleaning after renovation',
      'Aligning walls to look like a lighthouse, finishing walls to look like wallpaper',
      'Drawing 90 degree angles',
      'Electrical installation work (according to the project)',
      'Installation of low-current wiring (Internet, antenna)',
      'Waterproofing wet areas',
      'Pouring floor screed (up to 10 cm, sand concrete/expanded clay)',
      'Preparing walls for wallpapering',
      'Wallpapering',
      'Cleaning after renovation',
      'Installation of gypsum board ceiling',
      'Installation of inspection hatch in riser',
      'Sink installation',
    'Installation of bathtub/shower cabin',
    
  ];

  
  const serviceList = document.getElementById('service-list');

  
  services.map(function(serviceDescription) {
    const listItem = document.createElement('li');
    listItem.className = 'e-service__item';

    const pointDiv = document.createElement('div');
    pointDiv.className = 'e-service__point';

    const textParagraph = document.createElement('p');
    textParagraph.className = 'e-service__text';
    textParagraph.textContent = serviceDescription;

    
    listItem.appendChild(pointDiv);
    listItem.appendChild(textParagraph);

   
    serviceList.appendChild(listItem);
  });
    
     const vipServiceList = document.getElementById('vip-service-list');

  
  services.map(function(serviceDescription) {
    const listItem = document.createElement('li');
    listItem.className = 'e-service__item';

    const pointDiv = document.createElement('div');
    pointDiv.className = 'e-service__point';

    const textParagraph = document.createElement('p');
    textParagraph.className = 'e-service__text';
    textParagraph.textContent = serviceDescription;

    
    listItem.appendChild(pointDiv);
    listItem.appendChild(textParagraph);

   
    vipServiceList.appendChild(listItem);
  });
    
     const extraServiceList = document.getElementById('extra-service-list');

  
  services.map(function(serviceDescription) {
    const listItem = document.createElement('li');
    listItem.className = 'e-service__item';

    const pointDiv = document.createElement('div');
    pointDiv.className = 'e-service__point';

    const textParagraph = document.createElement('p');
    textParagraph.className = 'e-service__text';
    textParagraph.textContent = serviceDescription;

    
    listItem.appendChild(pointDiv);
    listItem.appendChild(textParagraph);

   
    extraServiceList.appendChild(listItem);
  });
});

////////scroll

const container = document.querySelector('.scroll-container');


container.addEventListener('scroll', function(event) {
   
    console.log('Прокрутка відбувається!');
});




/////////swiper


const swiper = new Swiper(".swiper", {
  
  direction: "horizontal",
  loop: true,

  pagination: {
        el: ".swiper-custom-pagination",
      type: "fraction",
      clickable: true,
      formatFractionCurrent: function (number) {
            return '0' + number;
      },
      
      formatFractionTotal: function (number) {
            return '0' + number;
        }
      
      },

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  
});

 


import gallery from './gallery.json';
import Handlebars from 'handlebars';


const data = gallery;


const source = document.getElementById('galleryTemplate').innerHTML;
const template = Handlebars.compile(source);


const galleryElements = document.querySelectorAll('.gallery-modal__point-block');


galleryElements.forEach(element => {
    const html = template(data);
    element.innerHTML = html;
});



// modal
document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const modal = document.querySelector('.popUp-mob-gallery__modal');

    if (closeModalButton && modal) {
        
        closeModalButton.addEventListener('click', function() {
            modal.classList.remove('active'); 
        });
    }

    
    if (openModalButtons.length > 0 && modal) {
        
        openModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (window.innerWidth <= 630) {
                    modal.classList.add('active'); 
                }
            });
        });
    }
});











// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector(".slider");

//     // Прокрутка до вказаної секції
//     function scrollToSection(index) {
//         const sections = document.querySelectorAll(".section");
//         if (index >= 0 && index < sections.length) {
//             sections[index].scrollIntoView({ behavior: "smooth" });
//         }
//     }

//     // Додати обробник подій клавіш для прокрутки слайдів
//     document.addEventListener("keydown", function(event) {
//         if (event.key === "ArrowDown" || event.key === "ArrowRight") {
//             scrollToSection(getNextSectionIndex());
//         } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
//             scrollToSection(getPrevSectionIndex());
//         }
//     });

//     // Отримати індекс наступної секції для прокрутки
//     function getNextSectionIndex() {
//         const currentSectionIndex = getCurrentSectionIndex();
//         return currentSectionIndex + 1;
//     }

//     // Отримати індекс попередньої секції для прокрутки
//     function getPrevSectionIndex() {
//         const currentSectionIndex = getCurrentSectionIndex();
//         return currentSectionIndex - 1;
//     }

//     // Отримати поточний індекс видимої секції
//     function getCurrentSectionIndex() {
//         const sections = document.querySelectorAll(".section");
//         const scrollTop = slider.scrollTop;
//         let currentIndex = 0;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;

//             if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
//                 currentIndex = index;
//             }
//         });

//         return currentIndex;
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector(".slider");
//     const sections = document.querySelectorAll(".section");

//     // Отримати індекс видимої секції
//     function getCurrentSectionIndex() {
//         const sliderScrollTop = slider.scrollTop;
//         let currentIndex = 0;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;

//             if (sliderScrollTop >= sectionTop && sliderScrollTop < sectionTop + sectionHeight) {
//                 currentIndex = index;
//             }
//         });

//         return currentIndex;
//     }

//     // Прокрутка до вказаної секції
//     function scrollToSection(index) {
//         if (index >= 0 && index < sections.length) {
//             const sectionTop = sections[index].offsetTop;
//             slider.scrollTo({ top: sectionTop, behavior: "smooth" });
//         }
//     }

//     // Додати обробник подій клавіш для прокрутки слайдів
//     document.addEventListener("keydown", function(event) {
//         if (event.key === "ArrowDown" || event.key === "ArrowRight") {
//             event.preventDefault(); // Заборона стандартної прокрутки сторінки
//             scrollToSection(getCurrentSectionIndex() + 1);
//         } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
//             event.preventDefault(); // Заборона стандартної прокрутки сторінки
//             scrollToSection(getCurrentSectionIndex() - 1);
//         }
//     });
// });










