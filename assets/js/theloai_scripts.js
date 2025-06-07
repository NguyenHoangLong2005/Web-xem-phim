// Đoạn mã JavaScript giúp hiện/ẩn ô tìm kiếm khi người dùng click vào biểu tượng tìm kiếm
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function() {
  searchInput.classList.toggle('active'); // Thêm hoặc bỏ class active để hiển thị ô tìm kiếm
});

// Kiểm tra khi người dùng nhấn nút "Xem Trailer" - yêu cầu đăng nhập trước nếu chưa đăng nhập
const watchTrailerBtn = document.querySelector('.watch-trailer-btn');

watchTrailerBtn.addEventListener('click', function(e) {
  const isLoggedIn = false; // Thay đổi giá trị này khi kiểm tra trạng thái đăng nhập thực tế

  if (!isLoggedIn) {
    e.preventDefault(); // Ngừng hành động mặc định (mở trailer)
    alert('Bạn cần đăng nhập để xem trailer!');
  }
});

// Hiệu ứng cuộn trang khi click vào liên kết
const scrollLinks = document.querySelectorAll('a[href^="#"]'); // Chọn tất cả các liên kết có href bắt đầu bằng '#'

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Ngừng hành động mặc định của liên kết
    const targetId = link.getAttribute('href').substring(1); // Lấy ID của phần tử mục tiêu
    const targetElement = document.getElementById(targetId);

    // Cuộn trang đến vị trí phần tử mục tiêu
    targetElement.scrollIntoView({
      behavior: 'smooth', // Cuộn mượt mà
      block: 'start' // Cuộn đến vị trí đầu phần tử
    });
  });
});
