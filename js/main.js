// js/main.js
window.addEventListener("DOMContentLoaded", () => {
  if (typeof brands !== 'undefined' && brands.length > 0) {
    const random = brands[Math.floor(Math.random() * brands.length)];
    
    // Marka bilgisini yükle
    document.getElementById("brandName").textContent = random.name;
    document.getElementById("brandHistory").textContent = random.history;

    // YENİ: Marka görselini yükle
    const imgContainer = document.getElementById("brandImageContainer");
    if (imgContainer && random.brandImage) {
        imgContainer.innerHTML = `<img src="${random.brandImage}" alt="${random.name} Markası" class="brand-logo">`;
    }
  }
});