document.addEventListener("DOMContentLoaded", () => {
  let activeDropdown: Element|null = null;

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const selectWrapper = dropdown.querySelector<HTMLElement>(".dropdown__select-wrapper");
    const listWrapper = dropdown.querySelector<HTMLElement>(".dropdown__list-wrapper");

    selectWrapper?.addEventListener("click", () => {
      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.remove("open");
      }

      dropdown.classList.toggle("open");
      activeDropdown = dropdown.classList.contains("open") ? dropdown : null;
    });

    dropdown.querySelectorAll<HTMLElement>(".dropdown__item").forEach(item => {
      item.addEventListener("click", () => {
        const value = item.getAttribute("data-item");
        const text = item.textContent;

        const hiddenInput = dropdown.querySelector<HTMLInputElement>("input[type='hidden']");
        const selectSpan = dropdown.querySelector<HTMLElement>(".dropdown__select");

        if (hiddenInput) hiddenInput.value = value ?? "";
        if (selectSpan) selectSpan.textContent = text ?? "Тип карты";

        dropdown.classList.remove("open");
        activeDropdown = null;
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (activeDropdown && !activeDropdown.contains(event.target as Node)) {
      activeDropdown.classList.remove("open");
      activeDropdown = null;
    }
  });
});
