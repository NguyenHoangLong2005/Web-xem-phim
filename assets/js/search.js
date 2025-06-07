// Danh sách các phim mẫu
const movies = [
  { title: "Avengers: Endgame", description: "Siêu anh hùng bảo vệ vũ trụ.", genre: "Action", image: "1.jpg" },
  { title: "Inception", description: "Một giấc mơ trong giấc mơ.", genre: "Sci-Fi", image: "2.jpg" },
  { title: "Parasite", description: "Cuộc sống giữa hai thế giới giàu nghèo.", genre: "Drama", image: "3.jpg" },
  { title: "Spirited Away", description: "Câu chuyện kỳ ảo ở thế giới linh hồn.", genre: "Animation", image: "4.jpg" },
  { title: "The Dark Knight", description: "Hiệp sĩ bóng đêm chiến đấu với Joker.", genre: "Action", image: "5.jpg" },
  { title: "Your Name", description: "Một câu chuyện tình yêu kỳ diệu.", genre: "Romance", image: "6.jpg" }
];

// Lấy phần tử tìm kiếm và kết quả
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const noResult = document.getElementById("noResult");

// Hàm tìm kiếm phim
const searchMovies = () => {
  const query = searchInput.value.toLowerCase();  // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)  // Kiểm tra tên phim có chứa từ khóa tìm kiếm
  );

  // Xóa kết quả cũ trước khi hiển thị kết quả mới
  resultsContainer.innerHTML = "";

  if (filteredMovies.length > 0) {
    filteredMovies.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie";
      div.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="title">${movie.title}</div>
        <div class="genre"><strong>Thể loại:</strong> ${movie.genre}</div>
        <div class="description"><strong>Mô tả:</strong> ${movie.description}</div>
        <button class="btn">Xem chi tiết</button>
      `;
      resultsContainer.appendChild(div);
    });
    noResult.style.display = "none";  // Ẩn thông báo không tìm thấy phim
  } else {
    noResult.style.display = "block";  // Hiển thị thông báo không tìm thấy phim
  }
};

// Lắng nghe sự kiện nhấn nút tìm kiếm
searchBtn.addEventListener("click", searchMovies);

// Lắng nghe sự kiện khi người dùng gõ vào ô tìm kiếm
searchInput.addEventListener("input", searchMovies);
