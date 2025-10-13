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
// Bu fonksiyon, 'brands' dizisinden rastgele bir marka seçer ve HTML içeriğini günceller.
function displayRandomBrand() {
    // 1. Rastgele bir marka seçimi yap
    // 'brands' dizisi data.js dosyasından yüklenir.
    const randomIndex = Math.floor(Math.random() * brands.length);
    const selectedBrand = brands[randomIndex];

    // 2. DOM elementlerini al
    const nameElement = document.getElementById('brandName');
    const historyElement = document.getElementById('brandHistory');
    const imageContainer = document.getElementById('brandImageContainer');
    
    // Geçiş efekti için mevcut içeriği hızlıca gizle
    if (imageContainer.querySelector('img')) {
        imageContainer.querySelector('img').classList.remove('fade-in');
    }

    // 3. Element içeriğini güncelle
    nameElement.textContent = selectedBrand.name;
    historyElement.textContent = selectedBrand.history;

    // 4. Marka logosu için <img> elementini oluştur/güncelle
    let imgElement = imageContainer.querySelector('img');

    // Eğer <img> elementi yoksa oluştur ve imageContainer'a ekle
    if (!imgElement) {
        imgElement = document.createElement('img');
        imageContainer.appendChild(imgElement);
    }
    
    // Resim kaynağını ve alternatif metni ayarla
    imgElement.src = selectedBrand.brandImage;
    imgElement.alt = selectedBrand.name + " Logo";
    
    // Kısa bir gecikme ile tekrar görünür yapmak için class ekle (geçiş efekti için)
    setTimeout(() => {
        imgElement.classList.add('fade-in');
    }, 50);
}

// Sayfa yüklendiğinde bir kez çalıştır (ilk markayı göstermek için)
displayRandomBrand();

// Markayı her 10 saniyede bir (10000 milisaniye) değiştirmek için setInterval kullan
setInterval(displayRandomBrand, 10000);
