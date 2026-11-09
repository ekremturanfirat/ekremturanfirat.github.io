/* Photo viewer for project entries.
   Markup: <a class="photos-btn" href="first.webp" data-photos="a.webp, b.webp" data-title="Board name">…</a>
   Without JavaScript the link simply opens the first image. */
(function () {
    var buttons = document.querySelectorAll(".photos-btn");
    if (!buttons.length || typeof HTMLDialogElement !== "function") return;

    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.innerHTML =
        '<figure>' +
            '<img alt="">' +
            '<figcaption><span class="lb-title"></span><span class="lb-count"></span>' +
                '<small class="lb-credit"></small></figcaption>' +
        '</figure>' +
        '<button type="button" class="lb-close" aria-label="Close">×</button>' +
        '<button type="button" class="lb-prev" aria-label="Previous photo">‹</button>' +
        '<button type="button" class="lb-next" aria-label="Next photo">›</button>';
    document.body.appendChild(dialog);

    var img = dialog.querySelector("img");
    var title = dialog.querySelector(".lb-title");
    var count = dialog.querySelector(".lb-count");
    var credit = dialog.querySelector(".lb-credit");
    var prev = dialog.querySelector(".lb-prev");
    var next = dialog.querySelector(".lb-next");
    var photos = [];
    var index = 0;

    function show(i) {
        index = (i + photos.length) % photos.length;
        img.src = photos[index];
        count.textContent = photos.length > 1 ? (index + 1) + " / " + photos.length : "";
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            photos = (button.dataset.photos || button.getAttribute("href"))
                .split(",").map(function (s) { return s.trim(); }).filter(Boolean);
            title.textContent = button.dataset.title || "";
            credit.textContent = button.dataset.credit || "";
            img.alt = button.dataset.title ? "Render of the " + button.dataset.title : "Project photo";
            prev.hidden = next.hidden = photos.length < 2;
            show(0);
            dialog.showModal();
        });
    });

    prev.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });
    dialog.querySelector(".lb-close").addEventListener("click", function () { dialog.close(); });

    // Click outside the photo closes the viewer
    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", function (event) {
        if (photos.length < 2) return;
        if (event.key === "ArrowLeft") show(index - 1);
        if (event.key === "ArrowRight") show(index + 1);
    });

    dialog.addEventListener("close", function () { img.removeAttribute("src"); });
})();
