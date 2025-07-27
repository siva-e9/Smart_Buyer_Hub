function searchProduct() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    document.getElementById("filtersSection").classList.remove("hidden");
  } else {
    alert("Please enter a product to search.");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Button group selection logic
  const groups = document.querySelectorAll('.btn-group');
  groups.forEach(group => {
    group.addEventListener('click', function (e) {
      if (e.target.classList.contains('btn')) {
        const buttons = group.querySelectorAll('.btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
      }
    });
  });

  // Final filter search button
  const finalSearchBtn = document.querySelector('.search-btn');
  finalSearchBtn.addEventListener('click', function () {
    const quantity = document.querySelector('input[type="number"]').value;
    const unit = document.querySelector('[data-group="unit"] .btn.selected')?.textContent;
    const packaging = document.querySelector('[data-group="packaging"] .btn.selected')?.textContent;
    const buyerType = document.querySelector('[data-group="buyer"] .btn.selected')?.textContent;
    const city = document.querySelector('#filtersSection input[type="text"]').value;
    const supplierFilter = document.querySelector('input[name="supplierFilter"]:checked')?.nextSibling?.textContent?.trim();

    if (!quantity || !city) {
      alert("Please fill in Quantity and City.");
      return;
    }

    sessionStorage.setItem("quantity", quantity);
    sessionStorage.setItem("unit", unit);
    sessionStorage.setItem("packaging", packaging);
    sessionStorage.setItem("buyerType", buyerType);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("supplierFilter", supplierFilter);

    window.location.href = "buyer_other_page.html";
  });
});
