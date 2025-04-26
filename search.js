const movies = [
  {
    title: "Khi điện thoại đổ chuông",
    type: "Tâm Lý",
    img: "dochuong.jpg"
  },
  {
    title: "Gửi thời thanh xuân ấm áp của chúng ta",
    type: "Lãng Mạn",
    img: "thanhxuan.jpg"
  },
  {
    title: "Em của thời niên thiếu",
    type: "Học Đường",
    img: "ecuathoinienthieu.jpg"
  }
];

function searchMovie() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultContainer = document.getElementById('results');
  resultContainer.innerHTML = '';

  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(input));

  if (filtered.length === 0) {
    resultContainer.innerHTML = '<p>Không tìm thấy phim nào.</p>';
    return;
  }

  filtered.forEach(movie => {
    resultContainer.innerHTML += `
      <div class="movie-box">
        <img src="${movie.img}" alt="${movie.title}" class="movie-box-img" />
        <div class="box-text">
          <h2>${movie.title}</h2>
          <span>${movie.type}</span>
        </div>
      </div>
    `;
  });
}
