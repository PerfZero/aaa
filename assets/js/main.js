const swiper = new Swiper(".swiper", {
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
    el: ".swiper-pagination",
  },

  // Breakpoints for responsive design
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
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
  slidesPerView: 6,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints for responsive design
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
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
    physicalButton.classList.add("active");
    legalButton.classList.remove("active");
    physicalContent.classList.add("active");
    legalContent.classList.remove("active");
  });

  legalButton.addEventListener("click", function () {
    legalButton.classList.add("active");
    physicalButton.classList.remove("active");
    legalContent.classList.add("active");
    physicalContent.classList.remove("active");
  });
});
