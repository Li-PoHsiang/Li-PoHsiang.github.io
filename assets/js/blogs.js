(function () {
  function normalize(text) {
    return String(text || "").toLowerCase();
  }

  function initBlogsPage() {
    const searchInput = document.getElementById("blogs-search");
    const filterButtons = document.querySelectorAll(".blogs-filter");
    const cards = document.querySelectorAll(".blog-card");
    const emptyState = document.getElementById("blogs-empty");

    if (!searchInput || !cards.length) return;

    let currentFilter = "all";

    function applyFilters() {
      const keyword = normalize(searchInput.value.trim());
      let visibleCount = 0;

      cards.forEach(card => {
        const type = normalize(card.dataset.type);
        const text = normalize([
          card.dataset.title,
          card.dataset.creator,
          card.dataset.tags,
          card.dataset.note
        ].join(" "));

        const matchType = currentFilter === "all" || type === currentFilter;
        const matchKeyword = keyword === "" || text.includes(keyword);

        if (matchType && matchKeyword) {
          card.style.display = "";
          visibleCount += 1;
        } else {
          card.style.display = "none";
        }
      });

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    }

    searchInput.addEventListener("input", applyFilters);

    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        currentFilter = this.dataset.filter || "all";
        applyFilters();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initBlogsPage);
})();