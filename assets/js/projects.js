(function () {
    "use strict";

    const filters = document.querySelector(".projects-filters");
    if (!filters) return;

    const buttons = Array.from(filters.querySelectorAll(".projects-filter"));
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const count = document.getElementById("projects-count");
    const empty = document.querySelector(".projects-no-results");

    filters.hidden = false;
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const category = button.dataset.category;
            let visible = 0;

            cards.forEach(function (card) {
                card.hidden = Boolean(category && card.dataset.category !== category);
                if (!card.hidden) visible += 1;
            });
            buttons.forEach(function (item) {
                const active = item === button;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-pressed", String(active));
            });
            if (count) count.textContent = visible + (visible === 1 ? " project" : " projects");
            if (empty) empty.hidden = visible !== 0;
        });
    });
}());
