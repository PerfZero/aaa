const swiper = new Swiper(".swiper-w", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-1",
  },
  // autoplay: {
  //   delay: 3000,
  // },

  // Breakpoints for responsive design
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper1 = new Swiper(".swiper-bank", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
  },
  autoplay: {
    delay: 3000,
  },

  // Breakpoints for responsive design
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openNewPopup() {
  // Копируем значения из основной формы в попап
  document.getElementById("popup-name").value =
    document.getElementById("name").value;
  document.getElementById("popup-phone").value =
    document.getElementById("phone").value;

  // Копируем выбранное значение суммы кредита
  const selectedAmount = document.querySelector('input[name="amount"]:checked');
  if (selectedAmount) {
    document.querySelector(
      `input[name="popup-amount"][value="${selectedAmount.value}"]`
    ).checked = true;
  }

  // Показываем попап
  document.getElementById("new-popup-overlay").style.display = "block";
  document.getElementById("new-popup").style.display = "block";

  // Добавляем обработчик событий для закрытия попапа при клике за его пределами
  document.getElementById("new-popup-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
      closeNewPopup();
    }
  });
}




function closeNewPopup() {
  // Скрываем попап и оверлей
  document.getElementById("new-popup-overlay").style.display = "none";
  document.getElementById("new-popup").style.display = "none";
}

function closeNewPopup() {
  // Скрываем попап
  document.getElementById("new-popup-overlay").style.display = "none";
  document.getElementById("new-popup").style.display = "none";
}

function openSuccessPopup() {
  // Показываем успешное сообщение
  document.getElementById("success-popup-overlay").style.display = "block";
  document.getElementById("success-popup").style.display = "block";

  // Закрываем успешное сообщение через 3 секунды
  setTimeout(() => {
    closeSuccessPopup();
  }, 3000);
}

function closeSuccessPopup() {
  // Скрываем успешное сообщение
  document.getElementById("success-popup-overlay").style.display = "none";
  document.getElementById("success-popup").style.display = "none";
}

// Обработчик отправки формы в попапе
document
  .getElementById("popup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное действие формы
    closeNewPopup(); // Закрываем попап
    openSuccessPopup(); // Показываем сообщение об успешной отправке
  });

document.addEventListener("DOMContentLoaded", function () {
  const physicalButton = document.getElementById("physicalButton");
  const legalButton = document.getElementById("legalButton");
  const physicalContent = document.getElementById("physicalContent");
  const legalContent = document.getElementById("legalContent");

  physicalButton.addEventListener("click", function () {
    physicalButton.classList.add("actives");
    legalButton.classList.remove("actives");
    physicalContent.classList.add("actives");
    legalContent.classList.remove("actives");
  });

  legalButton.addEventListener("click", function () {
    legalButton.classList.add("actives");
    physicalButton.classList.remove("actives");
    legalContent.classList.add("actives");
    physicalContent.classList.remove("actives");
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
  const passportSeriesInput = document.getElementById('popup-passport-series');
  const passportNumberInput = document.getElementById('popup-passport-number');
  const birthdateInput = document.getElementById('popup-birthdate');
  const incomeInput = document.getElementById('popup-income');

  // Маска для номера телефона
  phoneInput.addEventListener('input', function() {
      let value = phoneInput.value.replace(/\D+/g, '');
      let formattedValue = '';

      if (value.length > 0) {
          formattedValue = '+7 (';
      }
      if (value.length > 1) {
          formattedValue += value.substring(1, 4);
      }
      if (value.length >= 5) {
          formattedValue += ') ' + value.substring(4, 7);
      }
      if (value.length >= 8) {
          formattedValue += '-' + value.substring(7, 9);
      }
      if (value.length >= 10) {
          formattedValue += '-' + value.substring(9, 11);
      }

      phoneInput.value = formattedValue;
  });

  phoneInput.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && phoneInput.value.replace(/\D+/g, '').length === 1) {
          e.preventDefault();
          phoneInput.value = '';
      }
  });

  // Маска для серии паспорта
  passportSeriesInput.addEventListener('input', function() {
      passportSeriesInput.value = passportSeriesInput.value.replace(/\D+/g, '').substring(0, 4);
  });

  // Маска для номера паспорта
  passportNumberInput.addEventListener('input', function() {
      passportNumberInput.value = passportNumberInput.value.replace(/\D+/g, '').substring(0, 6);
  });

  // Маска для даты рождения
  birthdateInput.addEventListener('input', function() {
      let value = birthdateInput.value.replace(/\D+/g, '');
      let formattedValue = '';

      if (value.length > 0) {
          formattedValue = value.substring(0, 2);
      }
      if (value.length >= 3) {
          formattedValue += '.' + value.substring(2, 4);
      }
      if (value.length >= 5) {
          formattedValue += '.' + value.substring(4, 8);
      }

      birthdateInput.value = formattedValue;
  });

  // Маска для дохода
  incomeInput.addEventListener('input', function() {
      let value = incomeInput.value.replace(/\D+/g, '');
      incomeInput.value = new Intl.NumberFormat('ru-RU').format(value);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');
  const switchButtons = document.querySelectorAll('.switch-btn');
  const menuLists = document.querySelectorAll('.menu-list');
  const submenuItems = document.querySelectorAll('.submenu > span');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show-menu');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
  });

  switchButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      menuLists.forEach(list => {
        if (list.id === target) {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      });

      switchButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  submenuItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('submenu-open');
      
      // Toggle class to rotate arrow
      const arrow = parent.querySelector('::after');
      if (parent.classList.contains('submenu-open')) {
        arrow.style.transform = 'rotate(180deg)';
      } else {
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Initialize the view
  document.querySelector('.switch-btn[data-target="legal"]').click();
});
