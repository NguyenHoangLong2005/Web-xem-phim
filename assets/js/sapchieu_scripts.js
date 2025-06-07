// Toggle menu hiển thị/ẩn
function toggleMenu() {
  document.getElementById('menuu').classList.toggle('show');
}

// Khởi tạo Swiper slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Cuộn mượt đến các phần tử có ID từ anchor link
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Xử lý tìm kiếm phim
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const keywordInput = document.getElementById('search-input');
    if (keywordInput) {
      const keyword = keywordInput.value.trim();
      if (keyword !== '') {
        window.location.href = `timkiem.html?query=${encodeURIComponent(keyword)}`;
      }
    }
  });
}
