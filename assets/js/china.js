(function () {
  "use strict";

  function normalize(text) {
    return (text || "").toString().trim().toLowerCase();
  }

  function initChinaIndex() {
    const searchInput = document.getElementById("album-search");
    const cards = Array.from(document.querySelectorAll(".china-album-card"));
    const filters = Array.from(document.querySelectorAll(".china-filter"));
    const empty = document.getElementById("china-empty-results");
    if (!searchInput || cards.length === 0) return;

    let activeFilter = "all";

    function applyFilters() {
      const keyword = normalize(searchInput.value);
      let visibleCount = 0;

      cards.forEach(function (card) {
        const name = normalize(card.dataset.name);
        const region = card.dataset.region || "";
        const status = card.dataset.status || "waiting";
        const textMatched = !keyword || name.includes(keyword) || normalize(region).includes(keyword);
        const filterMatched = activeFilter === "all" || activeFilter === status || activeFilter === region;
        const visible = textMatched && filterMatched;
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount += 1;
      });

      if (empty) empty.style.display = visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", applyFilters);
    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        filters.forEach(function (btn) { btn.classList.remove("active"); });
        button.classList.add("active");
        activeFilter = button.dataset.filter || "all";
        applyFilters();
      });
    });
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function getAlbumData() {
    const dataEl = document.getElementById("china-album-data");
    if (!dataEl) return [];
    try {
      return JSON.parse(dataEl.textContent || "[]");
    } catch (error) {
      console.error("Failed to parse China album data", error);
      return [];
    }
  }

  function escapeHtml(value) {
    return (value || "").toString().replace(/[&<>'"]/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[char];
    });
  }

  function renderAlbum() {
    const grid = document.getElementById("photo-gallery-grid");
    const title = document.getElementById("album-title");
    const intro = document.getElementById("album-intro");
    if (!grid || !title || !intro) return;

    const slug = getQueryParam("slug");
    const album = getAlbumData().find(function (item) { return item.slug === slug; });

    if (!album) {
      title.textContent = "Album Not Found";
      intro.textContent = "对应相册不存在。";
      grid.innerHTML = '<div class="album-empty-state">请返回 China 页面重新选择相册。</div>';
      return;
    }

    title.textContent = album.display_name || "China Album";
    intro.textContent = album.intro || "";

    if (!album.photos || album.photos.length === 0) {
      grid.innerHTML = '<div class="album-empty-state">该相册暂时为空，等待探索。</div>';
      return;
    }

    grid.innerHTML = album.photos.map(function (photo, index) {
      return [
        '<article class="photo-item" tabindex="0" role="button" data-photo-index="' + index + '">',
        '  <img src="' + escapeHtml(photo.file) + '" alt="' + escapeHtml(photo.title) + '">',
        '  <div class="photo-item-caption">',
        '    <h3>' + escapeHtml(photo.title) + '</h3>',
        '    <p>' + escapeHtml(photo.place) + '</p>',
        '  </div>',
        '</article>'
      ].join("");
    }).join("");

    Array.from(grid.querySelectorAll(".photo-item")).forEach(function (item) {
      item.addEventListener("click", function () {
        const photo = album.photos[Number(item.dataset.photoIndex)];
        openLightbox(photo);
      });
      item.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          const photo = album.photos[Number(item.dataset.photoIndex)];
          openLightbox(photo);
        }
      });
    });
  }

  function buildAIPrompt(photo) {
    return [
      "请根据图片名称与地点，为我的个人主页 China 相册生成一段自然、克制、有画面感的描述。",
      "要求：120字左右；不要写成旅游攻略；从自然景观、人文历史、空间氛围三个角度进行表达；语言适合作为网页相册说明。",
      "图片名称：" + (photo.title || ""),
      "地点：" + (photo.place || ""),
      photo.description ? "已有参考描述：" + photo.description : ""
    ].filter(Boolean).join("\n");
  }

  function openLightbox(photo) {
    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const desc = document.getElementById("lightbox-desc");
    const button = document.getElementById("ai-desc-btn");
    if (!lightbox || !image || !title || !desc || !button) return;

    image.src = photo.file || "";
    image.alt = photo.title || "";
    title.textContent = photo.title || "";
    desc.textContent = photo.description || photo.place || "";

    button.onclick = function () {
      const prompt = buildAIPrompt(photo);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt).then(function () {
          window.open("https://chatgpt.com/", "_blank");
        }).catch(function () {
          window.open("https://chatgpt.com/", "_blank");
        });
      } else {
        window.open("https://chatgpt.com/", "_blank");
      }
    };

    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initChinaIndex();
    renderAlbum();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });

  window.ChinaAtlas = { closeLightbox: closeLightbox };
}());
