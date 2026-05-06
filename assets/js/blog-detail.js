(function () {
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function getBlogsData() {
    const el = document.getElementById("blogs-data");
    if (!el) return [];

    try {
      return JSON.parse(el.textContent);
    } catch (error) {
      console.error("Failed to parse blogs data:", error);
      return [];
    }
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderRating(rating) {
    if (!rating) return "";

    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += i <= rating ? "<span>★</span>" : "<span class='empty'>★</span>";
    }
    return html;
  }

  function renderCover(item) {
    const coverEl = document.getElementById("detail-cover");
    if (!coverEl) return;

    if (item.cover && item.cover.trim() !== "") {
      coverEl.innerHTML = `<img src="${item.cover}" alt="${escapeHtml(item.title)}">`;
    } else {
      coverEl.innerHTML = `
        <div class="blog-detail-cover-placeholder">
          <span>${escapeHtml(item.type || "Note")}</span>
        </div>
      `;
    }
  }

  function renderBlogDetail() {
    const id = getQueryParam("id");
    const entries = getBlogsData();
    const item = entries.find(entry => entry.id === id);

    const emptyEl = document.getElementById("blog-detail-empty");
    const heroEl = document.querySelector(".blog-detail-hero");
    const layoutEl = document.querySelector(".blog-detail-layout");

    if (!item) {
      if (emptyEl) emptyEl.hidden = false;
      if (heroEl) heroEl.style.display = "none";
      if (layoutEl) layoutEl.style.display = "none";
      return;
    }

    document.title = `${item.title} | Blogs`;

    document.getElementById("detail-type").innerText = item.type || "";
    document.getElementById("detail-date").innerText = item.date || "";
    document.getElementById("detail-title").innerText = item.title || "";
    document.getElementById("detail-title-en").innerText = item.title_en || "";
    document.getElementById("detail-creator").innerText = item.creator || "";
    document.getElementById("detail-year").innerText = item.year || "";
    document.getElementById("detail-rating").innerHTML = renderRating(item.rating);

    document.getElementById("detail-note").innerText = item.note || "";
    document.getElementById("detail-content").innerText = item.content || item.note || "暂无详细有感。";

    const tagsEl = document.getElementById("detail-tags");
    if (tagsEl) {
      const tags = item.tags || [];
      tagsEl.innerHTML = tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("");
    }

    renderCover(item);
  }

  document.addEventListener("DOMContentLoaded", renderBlogDetail);
})();