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
    const orderModal = document.getElementById("orderCall");
    const headerPhone = document.querySelector(".header__phone");


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


 


function showPopup() {
    let timerId; 
    document.getElementById('popupWindow').style.display = 'block';
    
    timerId = setTimeout(hidePopup, 20000); 


    function hidePopup() {
        document.getElementById('popupWindow').style.display = 'none';
       
        timerId = setTimeout(showPopup, 10000); 
    }

    
    function checkScreenWidth() {
        if (window.innerWidth >= 920) {
            
            clearTimeout(timerId);
        }
    }

    // Додаємо обробник події для визову функції перевірки ширини екрана при зміні розміру вікна
    window.addEventListener('resize', checkScreenWidth);
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

// document.addEventListener('DOMContentLoaded', function() {
//     const openModalButtons = document.querySelectorAll('.openModalBtnSix');
//     const closeModalButton = document.getElementById('closeModalButtonSix');
//     const modal = document.querySelector('.popUp-tab-sixth-screen__modal');

//     if (closeModalButton && modal) {
        
//         closeModalButton.addEventListener('click', function() {
//             modal.classList.remove('active');
//         });
//     }

    
//     if (openModalButtons.length > 0 && modal) {
        
//         openModalButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 if (window.innerWidth <= 920) {
//                     modal.classList.add('active');
//                 }
//             });
//         });
//     }
// });

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
            contactInfoElite.style.opacity = 1;
           
        });

        styleItemElite.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoElite.style.opacity = 0;
            
        });
    
    
    styleItemVip.addEventListener('mouseover', function() {
            contactForm.style.opacity = 0;
            contactInfoVip.style.opacity = 1;
           
        });

        styleItemVip.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoVip.style.opacity = 0;
            
        });
    
    
    styleItemExtra.addEventListener('mouseover', function() {
            contactForm.style.opacity = 0;
            contactInfoExtra.style.opacity = 1;
           
        });

        styleItemExtra.addEventListener('mouseout', function() {
            contactForm.style.opacity = 1;
            contactInfoExtra.style.opacity = 0;
            
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
    //          circle.style.opacity = '0';
    // setTimeout(() => {
    //     circle.style.visibility = 'hidden';
    // }, 300);
        });

        allNumber.forEach(number => {
            number.style.opacity = '0';
        });


        
        const targetCircle = document.querySelector(`.forth-screen__circle-wrapper-${text.toLowerCase()}`);
        if (targetCircle) {
            targetCircle.style.display = 'block';
    //           circle.style.opacity = '1';
    // circle.style.visibility = 'visible';
        }

        const targetNumber = document.querySelector(`.forth-screen__total-number-${text.toLowerCase()}`);
        if (targetNumber) {
            targetNumber.style.opacity = '1';
        }
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     const mainPoints = document.querySelectorAll('.fifth-screen__main-point');

//     mainPoints.forEach(mainPoint => {
//         mainPoint.addEventListener('click', function() {
//             const circleWrapper = mainPoint.parentElement.parentElement; // Отримати батьківський circle-wrapper
//             const circleNumber = circleWrapper.getAttribute('number');
//             const allCircles = document.querySelectorAll('.fifth-screen__circle-wrapper');

//             // Приховати всі кола
//             allCircles.forEach(circle => {
//                 circle.style.display = "none";
//             });

//             // Показати вибране коло за допомогою data-number
//             const selectedCircle = document.querySelector(`.fifth-screen__circle-wrapper-${circleNumber}`);
//             if (selectedCircle) {
//                 selectedCircle.style.display = "block";
//             }
//         });
//     });
// });


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






///////////fifth-screen
// document.addEventListener('DOMContentLoaded', function() {
//     // Отримання всіх кнопок і кругів
//     const buttons = document.querySelectorAll('.fifth-screen__main-point');
//     const circles = document.querySelectorAll('.fifth-screen__circle-wrapper');
//     console.log(circles);
    
//     let selectedCircle = null;
//     // Додавання обробника подій для кожної кнопки
//     buttons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             // Приховання всіх кругів
//             circles.forEach(circle => {
//                 circle[index].style.display = 'block';
                
//             });

            

//             // Показ потрібного круга, використовуючи індекс кнопки (плюс 1, оскільки індекси починаються з 0)
//             circles.style.display = 'none';

//             // selectedCircle = circles[index];
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.fifth-screen__main-point');
    const circles = document.querySelectorAll('.fifth-screen__circle');

   
    circles[0].closest('.fifth-screen__circle-wrapper').style.display = 'block';

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.classList[1].replace('fifth-screen__main-point-', ''); // Отримуємо номер круга з класу кнопки
            const targetCircle = document.querySelector(`[number="${number}"]`); // Знаходимо круг за номером кнопки

            if (targetCircle) {
               
                circles.forEach(circle => {
                    circle.closest('.fifth-screen__circle-wrapper').style.display = 'none';
                });

                
                targetCircle.closest('.fifth-screen__circle-wrapper').style.display = 'block';
            }
        });
    });
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



// new fullpage('#fullpage', {
//         // Опції fullpage.js
//         autoScrolling: true, // Автоматична прокрутка
//         navigation: true, // Показувати навігацію (точки)
//         anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'], // Які ідентифікатори призначені секціям
//         responsiveWidth: 768 // Перехід до повноекранного режиму при ширині менше 768px
// });
    


// new fullpage('#fullpage', {
    
//     licenseKey: 'gplv3-license',
//         autoScrolling: true,
//         navigation: true,
//         navigationPosition: 'right',
//        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
//         responsiveWidth: 920
//     });


 $(document).ready(function() {
    $.scrollify({
        section: ".section",  // CSS-селектор секцій, які будуть прокручуватись
        scrollSpeed: 800,
       // Швидкість прокрутки (в мілісекундах)
        easing: "easeOutExpo",       // Анімаційна функція прокрутки
        setHeights: false,           // Автоматично встановити висоту секцій
        overflowScroll: true,        // Прокрутка за межами секцій
        updateHash: false,           // Оновлювати хеш URL під час прокрутки
        touchScroll: true,           // Дозволити прокрутку на сенсорних пристроях
        before: function(index, sections) {
            // Функція, яка викликається перед переходом до нової секції
        },
        after: function(index, sections) {
            // Функція, яка викликається після переходу до нової секції
        },
         pagination: {
        el: ".pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<a href="#" class="point ' + className + '"></a>'; // Додаємо клас point
        },
    },
    afterRender: function () {
        $(".pagination .point").eq(0).addClass("point-active"); // Додаємо клас active до першої крапочки
    },
    after: function (index) {
        $(".pagination .point").removeClass("point-active"); // Видаляємо клас active у всіх крапочок
        $(".pagination .point").eq(index).addClass("point-active"); // Додаємо клас active до поточної крапочки
    },
    });
 });

 $(document).ready(function() {
    // Перевіряємо розмір екрану при завантаженні сторінки
    checkWindowSize();

    // Перевіряємо розмір екрану при зміні розміру вікна
    $(window).resize(function() {
        checkWindowSize();
    });
});

function checkWindowSize() {
    // Отримуємо ширину вікна
    var windowWidth = $(window).width();

    // Якщо ширина екрану менше або дорівнює 768px (ширина планшетного екрану),
    // або вище (відключаємо Scrollify для мобільних пристроїв), то відключаємо Scrollify
    if (windowWidth <= 920) {
        $.scrollify.disable(); // Відключаємо Scrollify
    } else {
        $.scrollify.enable(); // Увімкнемо Scrollify, якщо розмір екрану дозволяє
    }
}













