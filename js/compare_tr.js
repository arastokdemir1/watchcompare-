// js/compare_tr.js
// Bu script, compare_tr.html sayfasındaki 4 adet saat seçicisini yönetir,
// markaya göre gruplama yapar ve seçilen saatler için detaylı bir tablo oluşturur.

// NOT: data_tr.js'den gelen watches dizisinin bu script'ten ÖNCE yüklenmiş olması ZORUNLUDUR.
const saatVerileri = watches.reduce((acc, saat) => {
    const marka = saat.brand;
    if (!acc[marka]) {
        acc[marka] = [];
    }
    acc[marka].push(saat);
    return acc;
}, {});

// Karşılaştırma tablosunda gösterilecek özellikler ve TÜRKÇE etiketleri
const features = {
    // TEMEL ÖZELLİKLER
    'brand': 'Marka',
    'model': 'Model',
    'price': 'Fiyat (€)', 
    'diameter': 'Kasa Çapı',
    'thickness': 'Kasa Kalınlığı',
    'weight': 'Ağırlık',

    // MEKANİZMA VE TEKNİK ÖZELLİKLER
    'movement': 'Mekanizma Tipi',
    'movement_calibre': 'Mekanizma Kalibresi',
    'power_reserve': 'Güç Rezervi',
    'frequency_vph': 'Frekans (vph)',
    'jewels': 'Jewels',
    
    // KASA VE YAPI ÖZELLİKLERİ
    'case_material': 'Kasa Materyali',
    'crystal_type': 'Kristal Tipi',
    'waterResistance': 'Suya Dayanıklılık',
    'crown_type': 'Tepe Tipi',
    'lug_width': 'Bacak Açıklığı',
    'strap_material': 'Kordon Materyali',
    
    // FONKSİYONLAR
    'is_chronograph': 'Kronograf',
    'has_date': 'Tarih Penceresi',
    'bezel_function': 'Bezel Fonksiyonu',
};



// --- GENEL DEĞİŞKENLER VE PANEL YÖNETİMİ ---

let activePanelIndex = null;
const activeWatches = JSON.parse(localStorage.getItem('activeWatches')) || [null, null, null, null];

const dropdownOverlay = document.getElementById('dropdown-overlay');


/**
 * Belirtilen paneldeki marka listesini doldurur.
 * @param {number} panelIndex - Hangi panelin güncelleneceği (1-4).
 */
function fillMarkaListesi(panelIndex) {
    const markaListesi = document.getElementById(`marka-listesi-${panelIndex}`);
    markaListesi.innerHTML = '';
    
    // Marka başlığını ekle (Türkçe)
    const h3 = document.createElement('h3');
    h3.textContent = 'Marka Seçiniz:';
    markaListesi.appendChild(h3);
    
    const brands = Object.keys(saatVerileri).sort();
    
    brands.forEach(marka => {
        const markaDiv = document.createElement('div');
        markaDiv.className = 'marka-item';
        markaDiv.textContent = marka;
        // Marka seçildiğinde bir sonraki adımı çağır
        markaDiv.onclick = () => selectBrand(panelIndex, marka);
        markaListesi.appendChild(markaDiv);
    });
}

/**
 * Marka seçildiğinde model listesini doldurur ve görüntüler.
 * @param {number} panelIndex - Hangi panelin güncelleneceği (1-4).
 * @param {string} brandName - Seçilen markanın adı.
 */
function selectBrand(panelIndex, brandName) {
    const markaListesi = document.getElementById(`marka-listesi-${panelIndex}`);
    const modelListesi = document.getElementById(`model-listesi-${panelIndex}`);

    modelListesi.innerHTML = '';
    
    // Model başlığını ekle (Türkçe)
    const h3 = document.createElement('h3');
    h3.innerHTML = `${brandName} Modelleri: <span class="back-link" onclick="backToMarkaListesi(${panelIndex})">(Geri Dön)</span>`;
    modelListesi.appendChild(h3);
    
    const models = saatVerileri[brandName] || [];

    models.forEach(saat => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model-item';
        modelDiv.textContent = saat.model;
        // Modeli seç ve paneli kapat
        modelDiv.onclick = () => selectWatch(panelIndex, saat.id);
        modelListesi.appendChild(modelDiv);
    });

    markaListesi.style.display = 'none';
    modelListesi.style.display = 'block';
}

/**
 * Model listesinden marka listesine geri döner.
 * @param {number} panelIndex - Hangi panelin geri döneceği (1-4).
 */
function backToMarkaListesi(panelIndex) {
    const markaListesi = document.getElementById(`marka-listesi-${panelIndex}`);
    const modelListesi = document.getElementById(`model-listesi-${panelIndex}`);

    modelListesi.style.display = 'none';
    markaListesi.style.display = 'block';
}


/**
 * Seçilen saati aktif saatler listesine ekler ve paneli kapatır.
 * @param {number} panelIndex - Hangi slotun güncelleneceği (1-4).
 * @param {string} watchId - Seçilen saatin ID'si.
 */
function selectWatch(panelIndex, watchId) {
    const selectedWatch = watches.find(w => w.id === watchId);
    
    if (selectedWatch) {
        activeWatches[panelIndex - 1] = selectedWatch;
        localStorage.setItem('activeWatches', JSON.stringify(activeWatches));
        updateCompareBox(panelIndex);
        updateComparisonTable();
    }
    kapatPaneli(panelIndex);
}

/**
 * Karşılaştırma kutusunun içeriğini günceller.
 * @param {number} panelIndex - Hangi kutunun güncelleneceği (1-4).
 */
function updateCompareBox(panelIndex) {
    const box = document.querySelector(`.compare-box[data-index="${panelIndex}"]`);
    const watch = activeWatches[panelIndex - 1];
    const selectBtn = document.getElementById(`select-watch-${panelIndex}-btn`);
    const removeBtn = document.getElementById(`remove-watch-${panelIndex}-btn`);
    
    if (watch) {
        // Saat seçili
        box.classList.add('selected');
        
        // Kutunun içeriğini saat görseli ve adı ile doldur
        box.innerHTML = `
            <button id="remove-watch-${panelIndex}-btn" class="remove-btn" onclick="removeWatch(${panelIndex})">&times;</button>
            <img src="${watch.image}" alt="${watch.brand} ${watch.model}" class="watch-image">
            <div class="watch-info">
                <p class="watch-brand">${watch.brand}</p>
                <p class="watch-model">${watch.model}</p>
            </div>
            <button id="select-watch-${panelIndex}-btn" class="select-btn select-btn-update" onclick="panelToggle(${panelIndex})">DEĞİŞTİR</button>
        `;
        
    } else {
        // Saat seçili değil
        box.classList.remove('selected');
        
        // Kutunun içeriğini varsayılan butonlarla doldur (Türkçe)
        box.innerHTML = `
            <button id="remove-watch-${panelIndex}-btn" class="remove-btn" style="display: none;">&times;</button>
            <button id="select-watch-${panelIndex}-btn" class="select-btn" onclick="panelToggle(${panelIndex})">+</button>
        `;
    }
}


/**
 * Seçilen saati listeden kaldırır.
 * @param {number} panelIndex - Hangi slotun kaldırılacağı (1-4).
 */
function removeWatch(panelIndex) {
    activeWatches[panelIndex - 1] = null;
    localStorage.setItem('activeWatches', JSON.stringify(activeWatches));
    updateCompareBox(panelIndex);
    updateComparisonTable();
}


/**
 * Karşılaştırma tablosunu günceller.
 */
function updateComparisonTable() {
    const resultsContainer = document.getElementById('compare-results');
    
    // Aktif saatleri filtrele (null olmayanları al)
    const validWatches = activeWatches.filter(w => w !== null);

    // Başlangıç mesajını Türkçe yap:
    if (validWatches.length === 0) {
        resultsContainer.innerHTML = `<p id="initial-message" style="text-align: center;">Lütfen karşılaştırmak için en az bir saat seçiniz.</p>`;
        return;
    }

    // Tabloyu oluşturma
    let tableHTML = '<table><thead><tr><th></th>';
    validWatches.forEach(watch => {
        tableHTML += `<th>${watch.brand} ${watch.model}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';

    // Özellik satırları döngüsü:
    for (const key in features) {
        if (!features.hasOwnProperty(key)) continue;

        const featureLabel = features[key]; // features objesi artık Türkçe etiketleri içeriyor
        
        let row = `<tr><td><strong>${featureLabel}</strong></td>`;
        
        validWatches.forEach(watch => {
            let value = watch[key]; 
            
            // Veri formatlama ve ÇEVİRİ
            if (value === true) value = 'Var';
            else if (value === false) value = 'Yok';
            else if (value === null || value === '' || typeof value === 'undefined') value = '-';
            
            row += `<td>${value}</td>`;
        });
        
        row += '</tr>';
        tableHTML += row;
    }
    
    tableHTML += '</tbody></table>';
    resultsContainer.innerHTML = tableHTML;
}

/**
 * Dropdown paneli açıp/kapatır ve içeriğini doldurur.
 * @param {number} panelIndex - Hangi panelin açılıp kapatılacağı (1-4).
 */
function panelToggle(panelIndex) {
    const panel = document.getElementById(`dropdown-panel-${panelIndex}`);
    const isActive = panel.classList.contains('active');

    // Açık olan paneli kapat (varsa)
    if (activePanelIndex !== null) {
        kapatPaneli(activePanelIndex);
    }
    
    if (!isActive) {
        // Paneli aç
        panel.classList.add('active');
        dropdownOverlay.classList.add('active');
        activePanelIndex = panelIndex;
        
        // Marka listesini doldur
        fillMarkaListesi(panelIndex);
        
        // Başlangıçta marka listesini göster
        document.getElementById(`marka-listesi-${panelIndex}`).style.display = 'block';
        document.getElementById(`model-listesi-${panelIndex}`).style.display = 'none';

        // Seçilen kutunun altına konumlandır (CSS'de halledilebilir ancak JS ile de pozisyon ayarlanabilir)
        // Bu kısım CSS ile yapıldığı varsayılırsa boş kalır.
        
    } else {
        // Paneli kapat
        kapatPaneli(panelIndex);
    }
}


/**
 * Dropdown paneli kapatır ve overlay'i kaldırır.
 * @param {number} panelIndex - Kapatılacak panelin indeksi (1-4).
 */
function kapatPaneli(panelIndex) {
    const panel = document.getElementById(`dropdown-panel-${panelIndex}`);
    if (panel) {
        panel.classList.remove('active');
    }
    dropdownOverlay.classList.remove('active');
    activePanelIndex = null;
}


// --- BAŞLANGIÇ VE OLAY DİNLEYİCİLERİ ---

/**
 * Sayfa yüklendiğinde çalışacak ana başlatma fonksiyonu.
 * Bu fonksiyon çağrılmadığı için saatler yüklenmiyordu.
 */
function initComparePage() {
    // Tüm slotları başlangıç durumuna getir
    for (let i = 1; i <= 4; i++) {
        updateCompareBox(i); 
    }
    
    // Overlay'e tıklandığında paneli kapatma işlevi 
    dropdownOverlay.onclick = (event) => {
         // Tıklamanın sadece overlay'de gerçekleştiğinden emin olmak için
         if (event.target !== dropdownOverlay) return;
         
         // Açık olan aktif paneli kapat
         kapatPaneli(activePanelIndex);
    };
    
    // İlk yüklemede tabloyu boş olarak güncelle (başlangıç mesajı görünür)
    updateComparisonTable(); 
}


// Sayfa yüklendiğinde başlatma fonksiyonunu çalıştır
window.addEventListener("DOMContentLoaded", initComparePage);
