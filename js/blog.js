// blog.js

const blogPosts = [
    {
        id: 1,
        title: "Tissot PRX Powermatic 80: İsviçre Çakısı Zarafeti",
        author: "Aras Tokdemir",
        date: "29 Ekim 2025",
        tag: "Tavsiye",
        image: "img/tissot/tissot-prx-powermatic-80-t137407110410-495e-b.png", // Lütfen bu yolu kendi görselinizle güncelleyin
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
        image: "img/seiko/seiko_skx_example.jpg", // Lütfen bu yolu kendi görselinizle güncelleyin
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
