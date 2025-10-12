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

// compare.html'deki yeni ID'leri yakalar (1'den 4'e kadar)
const panels = [null];
const markaListeleri = [null];
const modelListeleri = [null];
const selectBtns = [null];

for (let i = 1; i <= 4; i++) {
    panels.push(document.getElementById(`dropdown-panel-${i}`));
    markaListeleri.push(document.getElementById(`marka-listesi-${i}`));
    modelListeleri.push(document.getElementById(`model-listesi-${i}`));
    selectBtns.push(document.getElementById(`select-watch-${i}-btn`));
}

const resultsContainer = document.getElementById('compare-results');
const initialMessage = document.getElementById('initial-message');

// Seçilen saatlerin tam saat objesini tutar: [null, saat1, saat2, saat3, saat4]
let secilenSaatler = [null, null, null, null, null]; 


// --- TEMEL İŞLEVLER ---

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
        
        // Markaya tıklayınca modelleri göster
        markaDiv.onclick = () => modelleriGoster(marka, panelIndex);
        
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
    baslik.textContent = `< ${marka} (Back to Brands)`; // İngilizce metin
    baslik.style.fontWeight = 'bold';
    baslik.onclick = () => markalariYukle(panelIndex); // Marka listesine geri dön
    modelContainer.appendChild(baslik);
    
    // Modelleri listele (Alfabetik sıralama)
    saatVerileri[marka].sort((a, b) => a.model.localeCompare(b.model)).forEach(saat => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model-item';
        modelDiv.innerHTML = `
            <img src="${saat.image}" alt="${saat.model}" style="float:left; margin-right: 10px; height:35px; border-radius:3px;">
            <span style="display: block;">${saat.model}</span>
            <small style="display: block; color: #888;">${saat.price}</small>
        `;
        
        // Model seçimi yapıldığında
        modelDiv.onclick = () => saatSec(saat, panelIndex);
        
        modelContainer.appendChild(modelDiv);
    });
    
    // Görünümü değiştir
    markaListeleri[panelIndex].style.display = 'none';
    modelContainer.style.display = 'block';
}

// 3. Saat Seçimi ve Kapanma (MODEL TIKLANDIĞINDA KUTUYU GÜNCELLEYEN FONKSİYON - GÖRSEL EKLENDİ)
function saatSec(saatObjesi, panelIndex) {
    const selectBtn = selectBtns[panelIndex];
    const panel = panels[panelIndex];

    // Butonun yeni içeriği: Resim, Marka ve Model (Ekran görüntüsüne uygun)
    selectBtn.innerHTML = `
        <img src="${saatObjesi.image}" alt="${saatObjesi.brand} ${saatObjesi.model}">
        <span style="font-size:16px;">${saatObjesi.brand}</span>
        <span style="font-size:14px; display:block; font-weight: normal;">${saatObjesi.model}</span>
    `;
    selectBtn.classList.add('selected'); 
    
    // Seçimi kaydet
    secilenSaatler[panelIndex] = saatObjesi;
    
    // Paneli kapat
    panel.style.display = 'none';
    
    // Karşılaştırmayı kontrol et
    karsilastirmaKontrol();
}

// 4. Açılır/Kapanır İşlevi (Toggle)
function panelToggle(panelIndex) {
    const panel = panels[panelIndex];
    
    // Diğer panelleri kapat
    for (let i = 1; i <= 4; i++) {
        if (i !== panelIndex) {
            panels[i].style.display = 'none';
        }
    }

    // Mevcut paneli aç/kapat
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    
    // Açıldığında markaları yükle
    if (panel.style.display === 'block') {
        markalariYukle(panelIndex);
    }
}

// 5. Karşılaştırma Sonuçlarını Yönetme (4 Saate Göre Tablo)
function karsilastirmaKontrol() {
    // Dizideki 1, 2, 3 ve 4. indeksleri alır ve boş (null) olanları filtreler
    const filledWatches = [secilenSaatler[1], secilenSaatler[2], secilenSaatler[3], secilenSaatler[4]].filter(s => s !== null);

    // İlk saat eklendiğinde özellikleri göster
    if (filledWatches.length < 1) { // Burası değiştirildi: < 2 yerine < 1
        initialMessage.style.display = 'block';
        resultsContainer.innerHTML = '';
        
        // Resetleme: Seçilmemiş butonları '+' işaretine geri çevir.
        for(let i = 1; i <= 4; i++){
            if (secilenSaatler[i] === null) {
                selectBtns[i].innerHTML = '+'; 
                selectBtns[i].classList.remove('selected');
            }
        }
        return;
    } 

    initialMessage.style.display = 'none';
    
    // Tablo başlığını oluşturma
    let tableHTML = `
        <table id="compareTable" border="1" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Feature</th> `;
    filledWatches.forEach(watch => {
        tableHTML += `
            <th>
                <img src="${watch.image}" alt="${watch.model}" style="height: 50px; display: block; margin: 5px auto;">
                <p><strong>${watch.brand}</strong></p>
                <p>${watch.model}</p>
            </th>
        `;
    });
    tableHTML += '</tr></thead><tbody>';

    // Tablo gövdesini oluşturma (Özellikler)
    for (const key in features) {
        // Bu özelliğe sahip olmayan veya boş olan saatler varsa atla
        if (filledWatches.every(w => !w.hasOwnProperty(key) || w[key] === null || w[key] === '' || typeof w[key] === 'undefined')) { 
            continue; 
        }

        let row = '<tr>';
        const featureName = features[key]; 
        row += `<td class="feature-name" style="font-weight:bold;">${featureName}</td>`; 

        filledWatches.forEach(watch => {
            // Değer yoksa "-" göster. Boolean değerleri (is_chronograph gibi) Yes/No olarak göster.
            let value = watch[key]; 
            if (value === true) value = 'Yes'; // İngilizce
            else if (value === false) value = 'No'; // İngilizce
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
    // Butonlara açılır/kapanır işlevini ekle (1'den 4'e kadar)
    for (let i = 1; i <= 4; i++) {
        if (selectBtns[i]) {
            selectBtns[i].onclick = () => panelToggle(i);
            selectBtns[i].innerHTML = '+';
        }
    }
    // Sayfa yüklendiğinde de bir kere karşılaştırma kontrolü yapalım
    // Eğer linkten gelinirse veya sayfa yenilenirse, seçilen saatler varsa tablo oluşur.
    karsilastirmaKontrol(); 
}

// Sayfa yüklendiğinde başlat
window.addEventListener('DOMContentLoaded', initComparePage);
