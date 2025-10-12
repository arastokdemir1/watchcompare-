// js/matches.js

// data.js dosyasından saatleri alıyoruz
const watches = window.watches || []; 

// Özellik etiketleri (compare.js'den alınmıştır)
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


// Önceden Tanımlı Karşılaştırmalar (Örnekleriniz baz alınarak ID'ler kullanıldı)
// LÜTFEN NOT EDİN: Bu ID'ler (r1, o3, vb.) data.js dosyanızdaki saatlerin 'id' alanlarıyla eşleşmelidir.
const predefinedMatches = [
    {
        title: "Diver Watch Duel: Rolex Submariner vs. Omega Seamaster",
        watch1ID: "r1", // Örnek ID
        watch2ID: "o3"  // Örnek ID
    },
    {
        title: "Chronograph Icons: Omega Speedmaster vs. Rolex Daytona",
        watch1ID: "o1", // Örnek ID
        watch2ID: "r2"  // Örnek ID
    },
    {
        title: "High-End Sport: Audemars Piguet Royal Oak vs. Patek Philippe Nautilus",
        watch1ID: "ap1", // Örnek ID
        watch2ID: "pp1"  // Örnek ID
    }
];

function getWatchByID(id) {
    return watches.find(watch => watch.id === id);
}

function createMatchTable(match) {
    const watch1 = getWatchByID(match.watch1ID);
    const watch2 = getWatchByID(match.watch2ID);

    // Eğer saatlerden herhangi biri data.js'de bulunamazsa hata mesajı dön
    if (!watch1 || !watch2) {
        return `<p style="color: red;">Error: One or both watches for the match "${match.title}" (IDs: ${match.watch1ID}, ${match.watch2ID}) could not be found in the data. Please check your js/data.js file.</p>`;
    }

    let tableHTML = `
        <div class="match-pair">
            <h3>${match.title}</h3>
            <div class="match-table-container">
                <table class="match-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>
                                <img src="${watch1.image}" alt="${watch1.model}">
                                ${watch1.brand} ${watch1.model}
                            </th>
                            <th>
                                <img src="${watch2.image}" alt="${watch2.model}">
                                ${watch2.brand} ${watch2.model}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    for (const key in features) {
        let val1 = watch1[key];
        let val2 = watch2[key];
        
        // Değerleri İngilizce formatına dönüştür
        if (val1 === true) val1 = 'Yes'; 
        else if (val1 === false) val1 = 'No'; 
        else if (val1 === null || val1 === '' || typeof val1 === 'undefined') val1 = '-';
        
        if (val2 === true) val2 = 'Yes'; 
        else if (val2 === false) val2 = 'No'; 
        else if (val2 === null || val2 === '' || typeof val2 === 'undefined') val2 = '-';

        // İki saatte de bu özellik boşsa satırı atla
        if (val1 === '-' && val2 === '-') {
            continue;
        }

        tableHTML += `
            <tr>
                <td>${features[key]}</td>
                <td>${val1}</td>
                <td>${val2}</td>
            </tr>
        `;
    }

    tableHTML += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    return tableHTML;
}

function renderMatches() {
    const container = document.getElementById('matches-container');
    let allMatchesHTML = '';

    predefinedMatches.forEach(match => {
        allMatchesHTML += createMatchTable(match);
    });

    container.innerHTML = allMatchesHTML;
}

window.addEventListener('DOMContentLoaded', renderMatches);
