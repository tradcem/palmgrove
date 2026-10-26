(() => {
  const header = document.querySelector("#site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  const galleryGrid = document.querySelector("#gallery-grid");
  const lightbox = document.querySelector("#lightbox");
  const tourViewer = document.querySelector("#tour-viewer");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!header || !menuToggle || !mobileNav || !galleryGrid || !lightbox || !tourViewer) {
    throw new Error("Palmgrove page is missing a required interactive element.");
  }

  const galleryTiles = Array.from(galleryGrid.querySelectorAll(".gallery-tile"));
  const filters = Array.from(document.querySelectorAll(".filter-button"));
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption span");
  const lightboxCategory = lightbox.querySelector(".lightbox-caption small");
  const lightboxCounter = lightbox.querySelector(".lightbox-counter");
  const lightboxEnquire = lightbox.querySelector(".lightbox-enquire");
  const tourImage = tourViewer.querySelector(".tour-image");
  const tourCaption = tourViewer.querySelector(".tour-caption span");
  const tourProgress = tourViewer.querySelector(".tour-progress span");
  const tourPause = tourViewer.querySelector(".tour-pause");
  let visibleTiles = galleryTiles.slice();
  let activeIndex = 0;
  let returnFocus = null;
  let returnHash = "";
  let tourTimer = 0;
  let tourIsPaused = false;
  let touchStartX = 0;

  const categories = {
    apartments: "Apartments",
    garden: "Garden & venue",
    night: "Night",
    details: "Details"
  };

  function setHeaderState() {
    header.classList.toggle("is-scrolled", window.scrollY > 80);
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mobileNav.classList.remove("is-open");
    mobileNav.setAttribute("aria-hidden", "true");
    mobileNav.inert = true;
    document.body.classList.remove("menu-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mobileNav.classList.toggle("is-open", !isOpen);
    mobileNav.setAttribute("aria-hidden", String(isOpen));
    mobileNav.inert = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  document.querySelector("#current-year").textContent = String(new Date().getFullYear());

  const enquiryForm = document.querySelector("#enquiry-form");
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(enquiryForm);
    if (String(formData.get("website") || "").trim()) return;

    const details = [
      "Hello, I'd like to enquire about Palmgrove Luxury.",
      `Name: ${String(formData.get("name")).trim()}`,
      `Phone: ${String(formData.get("phone")).trim()}`,
      `Enquiry: ${String(formData.get("type")).trim()}`
    ];
    const date = String(formData.get("date") || "").trim();
    const guests = String(formData.get("guests") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (date) details.push(`Preferred date: ${date}`);
    if (guests) details.push(`Estimated guests: ${guests}`);
    if (message) details.push(`Message: ${message}`);

    const whatsappUrl = `https://wa.me/2349138833322?text=${encodeURIComponent(details.join("\n"))}`;
    document.querySelector("#form-status").textContent = "Opening WhatsApp with your details. Review and tap Send there.";
    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
  });

  function updateVisibleTiles(filter) {
    visibleTiles = [];
    galleryTiles.forEach((tile) => {
      const isVisible = filter === "all" || tile.dataset.category === filter;
      tile.hidden = !isVisible;
      if (isVisible) visibleTiles.push(tile);
    });
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      updateVisibleTiles(button.dataset.filter);
    });
  });

  function preloadNearby(index, items) {
    [-1, 1].forEach((offset) => {
      const tile = items[(index + offset + items.length) % items.length];
      if (!tile) return;
      const image = new Image();
      image.src = tile.dataset.src;
    });
  }

  function setLightboxImage(index, updateHash = true) {
    activeIndex = (index + visibleTiles.length) % visibleTiles.length;
    const tile = visibleTiles[activeIndex];
    if (!tile) return;

    lightboxImage.src = tile.dataset.src;
    lightboxImage.alt = tile.dataset.alt || "";
    lightboxCaption.textContent = tile.dataset.caption || "";
    lightboxCategory.textContent = categories[tile.dataset.category] || "";
    lightboxCounter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(visibleTiles.length).padStart(2, "0")}`;
    const isApartment = tile.dataset.category === "apartments";
    lightboxEnquire.hidden = !isApartment;
    if (isApartment) {
      const message = `Hello, I'd like to ask about ${tile.dataset.caption} at Palmgrove Luxury.`;
      lightboxEnquire.href = `https://wa.me/2349138833322?text=${encodeURIComponent(message)}`;
    }
    if (updateHash) {
      const globalIndex = galleryTiles.indexOf(tile) + 1;
      history.replaceState(null, "", `#photo-${globalIndex}`);
    }
    preloadNearby(activeIndex, visibleTiles);
  }

  function openLightbox(index, trigger) {
    returnFocus = trigger || document.activeElement;
    returnHash = location.hash.startsWith("#photo-") ? "#gallery" : location.hash;
    lightbox.showModal();
    setLightboxImage(index);
    lightbox.querySelector(".lightbox-close").focus();
  }

  function closeLightbox() {
    if (!lightbox.open) return;
    lightbox.close();
    if (/^#photo-\d+$/.test(location.hash)) {
      history.replaceState(null, "", `${location.pathname}${location.search}${returnHash}`);
    }
  }

  galleryTiles.forEach((tile) => {
    tile.dataset.galleryIndex = String(galleryTiles.indexOf(tile) + 1);
    tile.addEventListener("click", () => {
      const index = visibleTiles.indexOf(tile);
      if (index >= 0) openLightbox(index, tile);
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => setLightboxImage(activeIndex - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => setLightboxImage(activeIndex + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("close", () => {
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  });

  function clearTourTimer() {
    window.clearTimeout(tourTimer);
    tourTimer = 0;
  }

  function setTourImage(index, autoAdvance = true) {
    activeIndex = (index + visibleTiles.length) % visibleTiles.length;
    const tile = visibleTiles[activeIndex];
    if (!tile) return;
    tourImage.src = tile.dataset.src;
    tourImage.alt = tile.dataset.alt || "";
    tourCaption.textContent = tile.dataset.caption || "";
    preloadNearby(activeIndex, visibleTiles);
    clearTourTimer();
    tourProgress.classList.remove("is-playing");
    tourProgress.style.width = "0";

    if (autoAdvance && !tourIsPaused && !prefersReducedMotion.matches) {
      window.requestAnimationFrame(() => {
        tourProgress.classList.add("is-playing");
        tourTimer = window.setTimeout(() => setTourImage(activeIndex + 1), 6000);
      });
    }
  }

  function openTour() {
    returnFocus = document.querySelector("#start-tour");
    tourIsPaused = prefersReducedMotion.matches;
    tourPause.textContent = tourIsPaused ? "Play" : "Pause";
    tourPause.setAttribute("aria-pressed", String(tourIsPaused));
    tourViewer.showModal();
    setTourImage(0, !tourIsPaused);
    tourViewer.querySelector(".tour-exit").focus();
  }

  function closeTour() {
    if (!tourViewer.open) return;
    clearTourTimer();
    tourProgress.classList.remove("is-playing");
    tourViewer.close();
    if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }

  document.querySelector("#start-tour").addEventListener("click", openTour);
  tourViewer.querySelector(".tour-exit").addEventListener("click", closeTour);
  tourViewer.querySelector(".tour-prev").addEventListener("click", () => setTourImage(activeIndex - 1, !tourIsPaused));
  tourViewer.querySelector(".tour-next").addEventListener("click", () => setTourImage(activeIndex + 1, !tourIsPaused));
  tourPause.addEventListener("click", () => {
    tourIsPaused = !tourIsPaused;
    tourPause.textContent = tourIsPaused ? "Play" : "Pause";
    tourPause.setAttribute("aria-pressed", String(tourIsPaused));
    if (tourIsPaused) {
      clearTourTimer();
      tourProgress.classList.remove("is-playing");
      tourProgress.style.width = "0";
    } else {
      setTourImage(activeIndex, true);
    }
  });
  tourViewer.addEventListener("click", (event) => {
    if (event.target === tourViewer) closeTour();
  });

  function handleDialogKeys(event) {
    if (event.key === "Escape") {
      if (lightbox.open) closeLightbox();
      if (tourViewer.open) closeTour();
      closeMenu();
      return;
    }

    if (lightbox.open) {
      if (event.key === "ArrowLeft") setLightboxImage(activeIndex - 1);
      if (event.key === "ArrowRight") setLightboxImage(activeIndex + 1);
    } else if (tourViewer.open) {
      if (event.key === "ArrowLeft") setTourImage(activeIndex - 1, !tourIsPaused);
      if (event.key === "ArrowRight") setTourImage(activeIndex + 1, !tourIsPaused);
      if (event.key === " ") {
        event.preventDefault();
        tourPause.click();
      }
    }
  }

  document.addEventListener("keydown", handleDialogKeys);

  [lightbox, tourViewer].forEach((dialog) => {
    dialog.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    dialog.addEventListener("touchend", (event) => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) < 55) return;
      if (dialog === lightbox && lightbox.open) setLightboxImage(activeIndex + (delta < 0 ? 1 : -1));
      if (dialog === tourViewer && tourViewer.open) setTourImage(activeIndex + (delta < 0 ? 1 : -1), !tourIsPaused);
    }, { passive: true });
  });

  function openPhotoFromHash() {
    const match = location.hash.match(/^#photo-(\d+)$/);
    if (!match || lightbox.open) return;
    const tileIndex = Number(match[1]) - 1;
    if (tileIndex < 0 || tileIndex >= galleryTiles.length) return;
    const tile = galleryTiles[tileIndex];
    const currentFilter = document.querySelector(".filter-button.active")?.dataset.filter || "all";
    if (currentFilter !== "all") {
      filters.find((button) => button.dataset.filter === "all").click();
    }
    openLightbox(galleryTiles.indexOf(tile), null);
    returnHash = "#gallery";
  }

  window.addEventListener("hashchange", openPhotoFromHash);
  openPhotoFromHash();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
