// import './style.scss'



document.addEventListener("DOMContentLoaded", function(event) {
        var loadLater = document.querySelector('.loadLater');
        var head = document.querySelector('head');
        if(loadLater && head){
            head.insertAdjacentHTML('beforeend', loadLater.innerHTML);
        }
    });


// document.addEventListener("DOMContentLoaded", function() {
//     const modals = document.querySelectorAll(".main-popUp");
//     const modalButtons = document.querySelectorAll(".openModalBtn");
//     const closeButtons = document.querySelectorAll(".close");
//     const orderModal = document.getElementById("orderCall");
//     const headerPhone = document.querySelector(".header__phone");


//     modalButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const targetModalId = button.getAttribute("data-modal-target");
//             const targetModal = document.getElementById(targetModalId);
//             openModal(targetModal);
//         });
//     });


//     closeButtons.forEach(closeButton => {
//         closeButton.addEventListener("click", () => {
//             const modal = closeButton.closest(".main-popUp");
//             closeModal(modal);
//         });
//     });

//     function openModal(modal) {
//         if (modal) {
//             modal.style.display = "block";
//             document.body.classList.add("modal-open"); 
//         }
//     }


     

//     function closeModal(modal) {
//         if (modal) {
//             modal.style.display = "none";
//             document.body.classList.remove("modal-open"); // Enable scrolling
//         }
//     }

//     window.addEventListener("click", event => {
//         if (event.target.classList.contains("main-popUp")) {
//             closeModal(event.target);
//         }
//     });

//     document.addEventListener("keydown", event => {
//         if (event.key === "Escape") {
//             const openModals = document.querySelectorAll(".main-popUp[style='display: block;']");
//             openModals.forEach(openModal => {
//                 closeModal(openModal);
//             });
//         }
//     });
// });




document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll(".main-popUp");
    const modalButtons = document.querySelectorAll(".openModalBtn");
    const closeButtons = document.querySelectorAll(".close");
    const orderModal = document.getElementById("orderCall");
    const headerPhone = document.querySelector(".header__phone");
   let links = document.querySelectorAll(".point");
   



    // Функція для відкриття модального вікна
    function openModal(modal) {
        if (modal) {
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            $.scrollify.disable();
            links.forEach(link => {
                link.classList.add("disabled");
            });
        }
    }

    // Функція для закриття модального вікна
    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            $.scrollify.enable();
              links.forEach(link => {
                link.classList.remove("disabled");
            });
        }
    }

    // Додати обробник кліку на документ для закриття модального вікна при кліку поза ним
    window.addEventListener("click", event => {
        if (event.target.classList.contains("main-popUp")) {
            closeModal(event.target);
        }
    });

    // Додати обробник клавіші Escape для закриття модального вікна
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            const openModals = document.querySelectorAll(".main-popUp[style='display: block;']");
            openModals.forEach(openModal => {
                closeModal(openModal);
            });
        }
    });

    // Додати обробник кліку на іконку бургера
    const burgerIcon = document.querySelector(".burger-icon");
    const menuModal = document.getElementById("headerModal"); // Замініть "#menuModal" на ваш селектор для модального вікна з меню

console.log(menuModal);

    burgerIcon.addEventListener("click", () => {
        if (menuModal.style.display !== "block") {
            openModal(menuModal);
        } else {
            closeModal(menuModal);
        }
    });


     const headerRequest = document.querySelector(".header__request");
    const callModal = document.getElementById("orderCall"); // Замініть "#menuModal" на ваш селектор для модального вікна з меню

    headerRequest.addEventListener("click", () => {
        if (callModal.style.display !== "block") {
            openModal(callModal);
        } else {
            closeModal(callModal);
        }
    });

    const headerPhoneBtn = document.querySelector(".header__phone");
   
    headerPhoneBtn.addEventListener("click", () => {
        if (callModal.style.display !== "block") {
            openModal(callModal);
        } else {
            closeModal(callModal);
        }
    });

    // Додаткові обробники подій для вже існуючих модальних вікон (якщо потрібно)
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


const goBackButton = document.getElementById('goBackBtn');

    // Додавання обробника подій для кнопки
    goBackButton.addEventListener('click', function() {
        // Виклик методу location.reload() для перезавантаження сторінки
        location.reload();
    });


const validateInputsCallOrder = () => {
    const inputs = document.querySelectorAll('.order-call__input');
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
            const hasInputError = validateInputsCallOrder();

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



////////sale


 


// function showPopup() {
//     let timerId;
//     document.getElementById('popupWindow').style.display = 'block';
    
//     timerId = setTimeout(hidePopup, 20000);


//     function hidePopup() {
//         document.getElementById('popupWindow').style.display = 'none';
       
//         timerId = setTimeout(showPopup, 10000);
//     }

    
//     function checkScreenWidth() {
//         if (window.innerWidth >= 920) {
            
//             clearTimeout(timerId);
//         }
//     }

//     // Додаємо обробник події для визову функції перевірки ширини екрана при зміні розміру вікна
//     window.addEventListener('resize', checkScreenWidth);
// }

// // Додаємо обробник події для визову функції showPopup при завантаженні сторінки
// window.addEventListener('load', showPopup);


function showPopup() {
    let timerId; // Змінна для зберігання ідентифікатора таймера
    const popupWindow = document.getElementById('popupWindow');

    // Функція для приховування віконечка
    function hidePopup() {
        popupWindow.style.display = 'none';
        // Передаємо в setTimeout showPopup через 10 секунд
        timerId = setTimeout(showPopup, 10000); // 10000 мілісекунд = 10 секунд
    }

    // Функція для перевірки ширини екрана і зупинки таймера при необхідності
    function checkScreenWidth() {
        if (window.innerWidth < 920) {
            // Якщо ширина екрана менше 920px, ховаємо віконечко і зупиняємо таймер
            popupWindow.style.display = 'none';
            clearTimeout(timerId);
        }
    }

    // Встановлюємо відображення віконечка
    popupWindow.style.display = 'block';

    // Передаємо в setTimeout hidePopup через 20 секунд
    timerId = setTimeout(hidePopup, 20000); // 20000 мілісекунд = 20 секунд

    // Додаємо обробник події для визову функції перевірки ширини екрана при зміні розміру вікна
    window.addEventListener('resize', checkScreenWidth);

    // Викликаємо функцію перевірки ширини екрана одразу після показу віконечка
    checkScreenWidth();
}

// Додаємо обробник події для визову функції showPopup при завантаженні сторінки
window.addEventListener('load', showPopup);


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

/////////// sixth-screen modal



document.addEventListener('DOMContentLoaded', function() {
        const openModalButtons = document.querySelectorAll('.openModalBtnSix');
        const modals = document.querySelectorAll('.popUp-tab-sixth-screen__modal');

        openModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modalId = button.getAttribute('data-modal-target');
                const modal = document.getElementById(modalId);

                if (modal) {
                    modal.classList.add('active');
                }
            });
        });

        modals.forEach(modal => {
            const closeModalButton = modal.querySelector('.e-service__close');

            if (closeModalButton) {
                closeModalButton.addEventListener('click', function() {
                    modal.classList.remove('active');
                });
            }
        });
});
    

document.addEventListener('DOMContentLoaded', function() {
        const showMoreButton = document.getElementById('showMoreButton');
    const hiddenItems = document.querySelectorAll('.sixth-screen__item');
    const contactForm = document.querySelector('.sixth-screen__contact-form-s');
const list = document.querySelector('.sixth-screen__list');
        if (showMoreButton) {
            showMoreButton.addEventListener('click', function() {
                
                if (hiddenItems.length > 0) {
                   
                    hiddenItems.forEach(item => {
                        item.style.display = 'block';
                        contactForm.style.bottom = '0';
                        list.style.marginBottom = '0';
                    });

                    
                    showMoreButton.style.display = 'none';
                }
            });
        }
    });




/////////////////

document.addEventListener('DOMContentLoaded', function() {
    const styleItemElite = document.querySelector('.forth-screen__style-item-elite');
    const styleItemVip = document.querySelector('.forth-screen__style-item-vip');
    const styleItemExtra = document.querySelector('.forth-screen__style-item-extra');
    const contactForm = document.querySelector('.forth-screen__contact-form');
    const contactInfoElite = document.querySelector('.forth-screen__info-elite');
    const contactInfoVip = document.querySelector('.forth-screen__info-vip');
    const contactInfoExtra = document.querySelector('.forth-screen__info-extra');

    
        styleItemElite.addEventListener('mouseover', function() {
            contactForm.style.opacity = 0;
            contactInfoElite.style.display = "block";
           
        });

        styleItemElite.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoElite.style.display = "none";
            
        });
    
    
    styleItemVip.addEventListener('mouseover', function() {
            contactForm.style.opacity = 0;
            contactInfoVip.style.display = "block";
           
        });

        styleItemVip.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoVip.style.display = "none";
            
        });
    
    
    styleItemExtra.addEventListener('mouseover', function() {
            contactForm.style.opacity = 0;
            contactInfoExtra.style.display = "block";;
           
        });

        styleItemExtra.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoExtra.style.display = "none";;
            
        });
    
});




document.addEventListener('DOMContentLoaded', function() {
    const styleItems = document.querySelectorAll('.forth-screen__style-item');

    styleItems.forEach(item => {
        item.addEventListener('click', function() {
            
            styleItems.forEach(element => {
                element.classList.remove('active');
            });

            
            item.classList.add('active');

            
            const text = item.querySelector('.forth-screen__style-text').textContent;

            
            showCircleForText(text);
        });
    });

    function showCircleForText(text) {
        const allCircles = document.querySelectorAll('.forth-screen__circle-wrapper');
        const allNumber = document.querySelectorAll('.forth-screen__total-number');

        
        allCircles.forEach(circle => {
            circle.style.display = 'none';
    
        });

        allNumber.forEach(number => {
            number.style.opacity = '0';
        });


        
        const targetCircle = document.querySelector(`.forth-screen__circle-wrapper-${text.toLowerCase()}`);
        if (targetCircle) {
            targetCircle.style.display = 'block';
   
        }

        const targetNumber = document.querySelector(`.forth-screen__total-number-${text.toLowerCase()}`);
        if (targetNumber) {
            targetNumber.style.opacity = '1';
        }
    }
});




const items = document.querySelectorAll('.sixth-screen__item');


const infoBlocks = document.querySelectorAll('.sixth-screen__info');
const contactForm = document.querySelectorAll('.sixth-screen__contact-form');



items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        
        infoBlocks[index].style.display = 'block';
        
    });

    item.addEventListener('mouseleave', () => {
       
        infoBlocks[index].style.display = 'none';
        
    });
});









document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.fifth-screen__main-point');
    const circles = document.querySelectorAll('.fifth-screen__circle');

   
    circles[0].closest('.fifth-screen__circle-wrapper').style.display = 'block';

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.classList[1].replace('fifth-screen__main-point-', ''); // Отримуємо номер круга з класу кнопки
            const targetCircle = document.querySelector(`[data-number-type="${number}"]`); // Знаходимо круг за номером кнопки

            if (targetCircle) {
               
                circles.forEach(circle => {
                    circle.closest('.fifth-screen__circle-wrapper').style.display = 'none';
                });

                
                targetCircle.closest('.fifth-screen__circle-wrapper').style.display = 'block';
            }
        });
    });
});














 $(document).ready(function() {
    $.scrollify({
        section: ".section",  
        scrollSpeed: 600,
       
        easing: "easeOutExpo",       
        setHeights: false,           
        overflowScroll: true,        
        updateHash: false,           
        touchScroll: true,           
        before: function(index, sections) {
          
        },
        after: function(index, sections) {
             
        },
         pagination: {
        el: ".pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<a href="#" class="point ' + className + '"></a>'; 
        },
    },
    afterRender: function () {
        $(".pagination .point").eq(0).addClass("point-active"); 
    },
    after: function (index) {
        $(".pagination .point").removeClass("point-active"); 
        $(".pagination .point").eq(index).addClass("point-active"); 
    },
    });
 });

 $(document).ready(function() {
   
    checkWindowSize();

    
    $(window).resize(function() {
        checkWindowSize();
    });
});

function checkWindowSize() {
    
    var windowWidth = $(window).width();

    
    if (windowWidth <= 920) {
        $.scrollify.disable(); 
    } else {
        $.scrollify.enable(); 
    }
}













