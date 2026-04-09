document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const wrapper = button.closest(".number-wrapper");
    const text = wrapper.querySelector(".number")?.innerText;

    if (!text) {
      console.warn("Nothing to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      button.classList.add("copied");
      const original = button.textContent;
      button.textContent = "✓";

      setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = original;
      }, 2000);
    } catch (err) {
      console.error("Clipboard failed:", err);
    }
  });
});