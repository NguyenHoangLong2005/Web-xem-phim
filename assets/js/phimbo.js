document.addEventListener("DOMContentLoaded", function () {
    const movieSelect = document.getElementById("movieSelect");
    const movieResults = document.getElementById("movieResults");

    const movies = {
        phim1: [
            { title: "Chiến binh bí ẩn", img: "../assets/images/phim1.webp" },
            { title: "Đầu gấu học nhóm", img: "../assets/images/phim13.webp" }
        ],
        phim2: [
            { title: "The little rascals", img: "../assets/images/phim2.webp" },
            { title: "Ngày đẹp trời trở thành cún", img: "../assets/images/phim38.webp" }
        ],
        phim3: [
            { title: "Loving vincomt", img: "../assets/images/phim3.webp" },
            { title: "Cậu út nhà tài phiệt", img: "../assets/images/phim19.webp" }
        ],
        phim4: [
            { title: "Perfect strangers", img: "../assets/images/phim4.webp" }
        ],
        phim5: [
            { title: "Lời thỉnh cầu của quái vật", img: "../assets/images/phim5.webp" }
        ],
        phim6: [
            { title: "Puss Boots", img: "../assets/images/phim6.webp" },
            { title: "Hôn nhân hợp đồng", img: "../assets/images/phim26.webp" }
        ]
    };

    movieSelect.addEventListener("change", function () {
        const selected = this.value;
        movieResults.innerHTML = "";

        if (selected === "") {
            movieResults.innerHTML = "<p>Vui lòng chọn thể loại để xem phim.</p>";
            return;
        }

        const selectedMovies = movies[selected] || [];
        if (selectedMovies.length === 0) {
            movieResults.innerHTML = "<p>Không có phim nào thuộc thể loại này.</p>";
            return;
        }

        selectedMovies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "movie-card me-3 mb-3 text-center";
            card.style.width = "180px";
            card.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}" style="width:100%">
                <h5 class="mt-2">${movie.title}</h5>
            `;
            movieResults.appendChild(card);
        });
    });
});
