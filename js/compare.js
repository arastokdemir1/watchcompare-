// js/compare.js

// Bu script, compare.html sayfasındaki 4 adet saat seçicisini yönetir,
// markaya göre gruplama yapar ve seçilen saatler için detaylı bir tablo oluşturur.

// data.js'den gelen düz "watches" dizisini, markaya göre gruplandırılmış hiyerarşik bir objeye dönüştürür.
const saatVerileri = watches.reduce((acc, saat) => {
    const marka = saat.brand;
    if (!acc[marka]) {
        acc[marka] = [];
    }
    acc[marka].push(saat);
    return acc;
}, {});

// Karşılaştırma tablosunda gösterilecek özellikler ve İNGİLİZCE etiketleri
const features = {
    // TEMEL ÖZELLİKLER
    'brand': 'Brand',
    'model': 'Model',
    'price': 'Price (€)', 
    'diameter': 'Case Diameter',
    'thickness': 'Case Thickness',
    'weight': 'Weight',

    // MEKANİZMA VE TEKNİK ÖZELLİKLER
    'movement': 'Movement Type',
    'movement_calibre': 'Movement Caliber',
    'power_reserve': 'Power Reserve',
    'frequency_vph': 'Frequency (vph)',
    'jewels': 'Jewels',
    
    // KASA VE YAPI ÖZELLİKLERİ
    'case_material': 'Case Material',
    'crystal_type': 'Crystal Type',
    'waterResistance': 'Water Resistance',
    'crown_type': 'Crown Type',
    'lug_width': 'Lug Width',
    'strap_material': 'Strap Material',
    
    // FONKSİYONLAR
    'is_chronograph': 'Chronograph',
    'has_date': 'Date Window',
    'bezel_function': 'Bezel Function',
};


// --- DOM ELEMENTLERİ ve STATE (4 Kutu için Genişletildi) ---

const panels = [null];
const markaListeleri = [null];
const modelListeleri = [null];
const selectBtns = [null];
const compareBoxes = [null];
const removeBtns = [null];
const dropdownOverlay = document.getElementById('dropdown-overlay'); // Modal arka plan karartma

for (let i = 1; i <= 4; i++) {
    const box = document.querySelector(`.compare-box[data-index="${i}"]`); 
    compareBoxes.push(box);
    panels.push(document.getElementById(`dropdown-panel-${i}`));
    markaListeleri.push(document.getElementById(`marka-listesi-${i}`));
    modelListeleri.push(document.getElementById(`model-listesi-${i}`));
    selectBtns.push(document.getElementById(`select-watch-${i}-btn`));
    removeBtns.push(document.getElementById(`remove-watch-${i}-btn`)); 
}

const resultsContainer = document.getElementById('compare-results');
const initialMessage = document.getElementById('initial-message');

let secilenSaatler = [null, null, null, null, null]; 


// --- TEMEL İŞLEVLER ---

// Saati Karşılaştırmadan Kaldır
function saatiKaldir(panelIndex) {
    secilenSaatler[panelIndex] = null;
    
    const btn = selectBtns[panelIndex];
    const box = compareBoxes[panelIndex];

    btn.classList.remove('selected');
    box.classList.remove('selected'); 
    
    btn.innerHTML = '+';

    removeBtns[panelIndex].style.display = 'none';

    tabloyuOlustur(); 
    console.log(`Watch ${panelIndex} removed.`);
}

// Paneli Kapat
function panelKapat(panelIndex) {
    if (!panels[panelIndex]) return;

    panels[panelIndex].style.display = 'none';
    compareBoxes[panelIndex].classList.remove('active'); 
    
    dropdownOverlay.style.display = 'none'; 
    document.body.classList.remove('modal-open'); 

    // JS ile z-index atamasını kaldırdık. CSS'deki sabit değerlere güveniyoruz.
}

// Panel Açma/Kapama (Toggle) - Modal yönetimi ve Efekt
function panelToggle(panelIndex) {
    const panel = panels[panelIndex];
    const box = compareBoxes[panelIndex];

    // Açık olan paneli kapat
    for (let i = 1; i <= 4; i++) {
        if (i !== panelIndex && panels[i].style.display === 'block') {
            panelKapat(i);
        }
    }

    if (panel.style.display === 'block') {
        panelKapat(panelIndex);
    } else {
        // Paneli aç
        panel.style.display = 'block';
        box.classList.add('active'); 

        dropdownOverlay.style.display = 'block'; // Overlay'i göster
        document.body.classList.add('modal-open'); // Body scroll'unu engelle
        
        // Panelin açılışında markaları yükle
        markalariYukle(panelIndex);
    }
}


// 1. Markaları Yükleme (Butona basıldığında açılan ilk liste)
function markalariYukle(panelIndex) {
    const listContainer = markaListeleri[panelIndex];
    if (!listContainer) return;

    listContainer.innerHTML = ''; 
    modelListeleri[panelIndex].style.display = 'none'; 
    listContainer.style.display = 'block'; 

    Object.keys(saatVerileri).sort().forEach(marka => {
        const markaDiv = document.createElement('div');
        markaDiv.className = 'marka-item';
        markaDiv.textContent = marka;
        
        // Markaya tıklayınca modelleri göster - Hata ayıklama eklendi
        markaDiv.onclick = (event) => {
            console.log(`Marka Tıklandı (Panel ${panelIndex}): ${marka}. Model listesi açılıyor...`); 
            modelleriGoster(marka, panelIndex);
        };
        
        listContainer.appendChild(markaDiv);
    });
}

// 2. Modelleri Gösterme (Marka tıklandığında açılan model listesi)
function modelleriGoster(marka, panelIndex) {
    const modelContainer = modelListeleri[panelIndex];
    
    modelContainer.innerHTML = '';
    
    // Geri dönme butonu/başlığı
    const baslik = document.createElement('div');
    baslik.className = 'marka-item';
    baslik.textContent = `< ${marka} (Markalara Geri Dön)`; 
    baslik.style.fontWeight = 'bold';
    baslik.onclick = () => markalariYukle(panelIndex); // Marka listesine geri dön
    modelContainer.appendChild(baslik);
    
    // Modelleri listele (Alfabetik sıralama)
    saatVerileri[marka].sort((a, b) => a.model.localeCompare(b.model)).forEach(saat => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model-item';
        // HTML yapısı
        modelDiv.innerHTML = `
            <img src="${saat.image}" alt="${saat.model}" style="float:left; margin-right: 10px; height:35px; border-radius:3px;">
            <span style="display: block;">${saat.model}</span>
            <small style="display: block; color: #666; font-style: italic;">${saat.price}</small>
            <div style="clear:both;"></div>
        `;
        // Modele tıklayınca saati seç
        modelDiv.onclick = (event) => {
            console.log(`Model Tıklandı (Panel ${panelIndex}): ${saat.model}. Seçim yapılıyor...`);
            saatiSec(saat, panelIndex);
        };
        
        modelContainer.appendChild(modelDiv);
    });
    
    markaListeleri[panelIndex].style.display = 'none'; 
    modelContainer.style.display = 'block'; 
}


// 3. Saati Seçme (Model tıklandığında)
function saatiSec(saat, panelIndex) {
    secilenSaatler[panelIndex] = saat;
    panelKapat(panelIndex); // Seçim yapıldıktan sonra paneli kapat

    const btn = selectBtns[panelIndex];
    const box = compareBoxes[panelIndex];
    
    // Buton içeriğini güncelle
    btn.classList.add('selected');
    box.classList.add('selected'); 

    btn.innerHTML = `
        <img src="${saat.image}" alt="${saat.model}">
        <span style="display:block; margin-top: 5px;">${saat.model}</span>
        <small style="color:#777;">${saat.brand}</small>
    `;

    // X butonunu göster
    removeBtns[panelIndex].style.display = 'flex'; 

    tabloyuOlustur();
}


// 4. Karşılaştırma Tablosunu Oluşturma/Güncelleme
function tabloyuOlustur() {
    const filledWatches = secilenSaatler.filter(s => s !== null);

    if (filledWatches.length < 1) {
        initialMessage.style.display = 'block';
        resultsContainer.innerHTML = '';
        return;
    }

    initialMessage.style.display = 'none';

    let tableHTML = '<table><thead><tr><th>Feature</th>';
    
    filledWatches.forEach(watch => {
        tableHTML += `<th>${watch.brand} <br> ${watch.model}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';

    for (const key in features) {
        const hasValue = filledWatches.some(w => 
            w.hasOwnProperty(key) && w[key] !== null && w[key] !== '' && typeof w[key] !== 'undefined'
        );
        if (!hasValue) { 
            continue; 
        }

        let row = '<tr>';
        const featureName = features[key]; 
        row += `<td class="feature-name" style="font-weight:bold;">${featureName}</td>`; 

        filledWatches.forEach(watch => {
            let value = watch[key]; 
            if (value === true) value = 'Yes';
            else if (value === false) value = 'No';
            else if (value === null || value === '' || typeof value === 'undefined') value = '-';
            
            row += `<td>${value}</td>`;
        });
        
        row += '</tr>';
        tableHTML += row;
    }
    
    tableHTML += '</tbody></table>';
    resultsContainer.innerHTML = tableHTML;
}


// --- BAŞLANGIÇ VE OLAY DİNLEYİCİLERİ ---

function initComparePage() {
    for (let i = 1; i <= 4; i++) {
        if (selectBtns[i]) {
            // compare.html'deki onclick="panelToggle(i)" kullanıldığı için burada tekrar atamaya gerek yok.
            selectBtns[i].innerHTML = '+';
        }
        // Kaldırma butonuna işlevi ekle ve başlangıçta gizle
        if (removeBtns[i]) {
            removeBtns[i].onclick = () => saatiKaldir(i);
            removeBtns[i].style.display = 'none'; 
        }
    }
    
    // Overlay'e tıklandığında paneli kapatma işlevi 
    dropdownOverlay.onclick = (event) => {
         // Tıklamanın sadece overlay'de gerçekleştiğinden emin olmak için
         if (event.target !== dropdownOverlay) return;
         
         // Açık olan paneli bul ve kapat
        for (let i = 1; i <= 4; i++) {
            if (panels[i].style.display === 'block') {
                panelKapat(i);
                return; 
            }
        }
    };

    tabloyuOlustur();
}

initComparePage();
