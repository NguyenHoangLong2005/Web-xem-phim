document.addEventListener('DOMContentLoaded', function () {
    // Khởi tạo Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,  // Hiển thị 4 phim cùng lúc
        spaceBetween: 30,   // Khoảng cách giữa các slide
        loop: true,         // Tự động quay vòng
        navigation: {
            nextEl: '.swiper-button-next',  // Nút next
            prevEl: '.swiper-button-prev',  // Nút prev
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,   // 4 phim trên màn hình rộng
            },
            768: {
                slidesPerView: 2,   // 2 phim trên màn hình trung
            },
            480: {
                slidesPerView: 1,   // 1 phim trên màn hình nhỏ
            },
        },
    });

    // Hiệu ứng hover cho các phim (Play button)
    const movieBoxes = document.querySelectorAll('.movie-box');

    movieBoxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            const playButton = box.querySelector('.watch-btn');
            playButton.style.display = 'block'; // Hiển thị nút play khi hover vào movie box
        });

        box.addEventListener('mouseleave', () => {
            const playButton = box.querySelector('.watch-btn');
            playButton.style.display = 'none'; // Ẩn nút play khi rời chuột khỏi movie box
        });
    });
});
