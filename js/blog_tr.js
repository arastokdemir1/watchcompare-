// blog.js

const blogPosts = [
    {
        id: 1,
        title: "Tissot PRX Powermatic 80: İsviçre Çakısı Zarafeti",
        author: "Aras Tokdemir",
        date: "29 Ekim 2025",
        tag: "Tavsiye",
        image: "img/tissot-prx-powermatic-80-t137407110410-495e-b.png", // Lütfen bu yolu kendi görselinizle güncelleyin
        techMin: "PRX'in 80 saatlik güç rezervi harika, kasa formu ise 70'lerin ruhunu modern bir rahatlıkla taşıyor. Ancak bu saat sadece teknik bir kağıt parçası değil...",
        subjective: "Bana göre PRX, bir 'spor klasik' saatin zirvesidir. Takım elbiseyle gümüş bir yansıması, kot ceketle ise sofistike bir dokunuş katar. Spor saatinizi çıkarıp saklamak yerine, bir Cuma iş çıkışı kokteylinde veya rahat bir Pazar kahvaltısında bileğinizde tutmaya devam edebileceğiniz tek saat budur. Günlük yaşamda 'tek saat' arayan, lüks hissiyatı uygun bütçeyle isteyenler için tek tavsiyemdir.",
        link: "#" 
    },
    {
        id: 2,
        title: "Seiko SKX007: Efsanevi Dalış Saatinin Romantik Yanı",
        author: "WatchCompare Editör",
        date: "15 Ekim 2025",
        tag: "Nostalji",
        image: "https://www.abtsaat.com/ProductImages/98634/big/skx007j-4.jpg", // Lütfen bu yolu kendi görselinizle güncelleyin
        techMin: "SKX'in güncel mekanizmalara göre biraz hantal kalması veya saniye durdurma özelliğinin olmaması önemli mi? Hayır, çünkü SKX bir saatten çok bir karaktere sahip...",
        subjective: "Bu saat, 'gerçek' bir maceranın kokusunu taşıyor. Her ne kadar artık üretilmese de, bileğinizde taşıdığınızda size bir ofis çalışanı değil de, okyanus kaşifi veya eski bir savaş pilotu hissi veriyor. Kordonunu değiştirerek sonsuz varyasyon yaratabilirsiniz; bu, saatin sizin kişisel tuvaliniz olması demektir. SKX bir trend değil, nesilden nesile aktarılacak bir hikayedir.",
        link: "#"
    },
    {
        id: 3,
        title: "Rolex Submariner (No-Date): Sadeliğin İhtişamı",
        author: "Aras Tokdemir",
        date: "1 Ekim 2025",
        tag: "İnceleme",
        image: "img/rolex/submariner_no_date.png", // Lütfen bu yolu kendi görselinizle güncelleyin
        techMin: "Rolex'in kusursuz kalitesi ve kalibresi tartışılmaz. Fakat tarih penceresinin olmaması, Submariner'ı neden bu kadar özel kılıyor?",
        subjective: "Submariner, saatçilik dünyasının 'kültürel taşı'dır. Tarih penceresinin olmaması, kadranı simetrik ve temiz tutarak, saatin zamanı gösterme işlevine odaklanmasını sağlıyor. Bu, zihinsel bir rahatlama sağlar. O bir statü sembolü olabilir ama aynı zamanda günlük hayatın karmaşasında basitliği, mükemmelliği ve sonsuz bir güveni temsil eder. Onu taktığınızda, hayatınızın kontrol altında olduğunu hissedersiniz. Bu paha biçilmez bir histir.",
        link: "#"
    },
    {
        id: 4,
        title: "Hamilton Khaki Field Mechanical: Minimalist Askeri Ruh",
        author: "WatchCompare Editörü",
        date: "3 Kasım 2025",
        tag: "Askeri",
        // Lütfen görsel yolunu güncelleyin:
        image: "https://www.abtsaat.com/productimages/100582/original/hamilton-h69439931-khaki-field-mechanical-erkek-kol-saati-221.png", 
        techMin: "Hafif, 38 mm çaplı kasa ve 80 saatlik Powermatic rezervine sahip mekanik kurmalı kalibre, onu klasik bir askeri saatten modern bir günlük saate taşıyor.",
        subjective: "Bu saati kolunuza taktığınızda, sade, mütevazı ama görev bilinciyle dolu bir karakter hissine kapılırsınız. Parlak ciladan uzak, mat ve keskin hatlara sahiptir. Ofiste veya doğada, sizi odaklanmaya ve 'anlık' olmaya iter (çünkü kurmanız gerekir). Deri bir NATO kayışıyla giyim tarzınızı tamamen değiştirebilecek, gerçek bir saat tutkunu seçimidir.",
        link: "#"
    },
    {
        id: 5,
        title: "Omega Speedmaster Professional (Moonwatch): Bir Efsanenin Ağırlığı",
        author: "Aras Tokdemir",
        date: "20 Ekim 2025",
        tag: "Klasik",
        // Lütfen görsel yolunu güncelleyin:
        image: "https://static.ticimax.cloud/45295/uploads/urunresimleri/buyuk/omega-310.30.42.50.01-df3dc6.jpg", 
        techMin: "Efsanevi manuel kurmalı kalibre, 1861/3861 (hesap fark etmeksizin), onu 'Ay'a giden saat' yapan şeydir. Su geçirmezlik değeri, dalgıç saatlerine göre mütevazıdır.",
        subjective: "Speedmaster, saatçilikten çok bir tarih dersidir. Kronografı çalıştırdığınızda hissedilen mekanik titreşim, size zamanda yolculuk yaptırır. Bu bir saatten çok bir miras, bir semboldür. Onu takmak, kıyafetinizin değil, hikayenizin bir parçasıdır. Her zaman özel bir durum yaratır.",
        link: "#"
    },
    {
        id: 6,
        title: "Orient Bambino: Bir Vintage Rüyası, Modern Bütçe",
        author: "WatchCompare Editörü",
        date: "28 Eylül 2025",
        tag: "Bütçe",
        // Lütfen görsel yolunu güncelleyin:
        image: "https://www.aslansaat.com/orient-otomatik-erkek-kol-saati-fac00009n0-1834-bambino-12073-18-B.jpg", 
        techMin: "Çoğu modelde Japon in-house mekanizma (F6724) bulunur. Ancak teknik özelliklerden çok, bombeli camı ve zarif kadranı, onu bir 'Dress Watch' klasiği yapar.",
        subjective: "Bambino'nun bombeli kristali, ışığı yakalama şekli ve zarif ibreleri, ona 10 kat daha pahalı saatlerin estetiğini kazandırır. Bu saat, ilk iş görüşmeniz, düğününüz veya resmi bir etkinliğiniz için mükemmel bir seçimdir. Takım elbisenizle veya blazer ceketinizle harika durur. Bu saati, ucuz fiyata satılan yüksek kaliteli bir vintage rüyası olarak görmelisiniz.",
        link: "#"
    }
];

function generateBlogCards() {
    const container = document.getElementById('blog-list-container');
    if (!container) return; 

    let htmlContent = '';
    
    blogPosts.forEach(post => {
        // Eğer link adresi '#' ise butonu pasif (disabled) yap
        const disabledClass = post.link === '#' ? 'disabled' : '';
        const linkText = post.link === '#' ? '' : '';

        htmlContent += `
            <article class="blog-post-card">
              <div class="post-image-container">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
              </div>
              <div class="post-content">
                <h3>${post.title}</h3>
                <span class="post-meta">By ${post.author} | ${post.date} | **${post.tag}**</span>
                <p><strong>Teknik Özellikler Minimumda:</strong> ${post.techMin}</p>
                
                <h4>Kişisel Görüş ve Tavsiye</h4>
                <p>${post.subjective}</p>
                <a href="${post.link}" class="read-more-btn ${disabledClass}">${linkText}</a>
              </div>
            </article>
        `;
    });

    container.innerHTML = htmlContent;
}

// Sayfa yüklendiğinde kartları oluştur
document.addEventListener('DOMContentLoaded', generateBlogCards);
