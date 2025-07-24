document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".product-select");

  selects.forEach(select => {
    select.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      const newPrice = selectedOption.text;

      const button = this.closest(".card-body").querySelector(".btn-precio");
      if (button) {
        button.innerHTML = ` ${newPrice}`;
      }
    });
  });
});