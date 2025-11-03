// blog.js (English Version)

const blogPosts = [
    {
        id: 1,
        title: "Tissot PRX Powermatic 80: The Swiss Army Knife of Elegance",
        author: "Aras Tokdemir",
        date: "October 29, 2025",
        tag: "Recommendation",
        // Please update the image path:
        image: "img/tissot/tissot-prx-powermatic-80-t137407110410-495e-b.png", 
        techMin: "The PRX's 80-hour power reserve is fantastic, and its case shape carries the spirit of the 70s with a modern comfort. However, this watch is more than just a piece of technical paper...",
        subjective: "In my opinion, the PRX is the peak of a 'sport-classic' watch. It adds a silver reflection with a suit and a sophisticated touch with a denim jacket. This is the one watch you can keep on your wrist during a Friday evening cocktail or a relaxed Sunday brunch, instead of putting your sports watch away. It is my only recommendation for those looking for a 'one watch' solution in daily life, who want a luxurious feel on a reasonable budget.",
        link: "#" 
    },
    {
        id: 2,
        title: "Seiko SKX007: The Romantic Side of the Legendary Diver",
        author: "WatchCompare Editor",
        date: "October 15, 2025",
        tag: "Nostalgia",
        // Please update the image path:
        image: "images/seiko_skx_example.jpg", 
        techMin: "Does it matter that the SKX is a bit bulkier than modern movements or lacks hacking seconds? No, because the SKX has a character more than a movement...",
        subjective: "This watch carries the scent of a 'true' adventure. Even though it's no longer in production, wearing it makes you feel like an ocean explorer or a former war pilot, not just an office worker. You can create endless variations by changing its strap; this means the watch is your personal canvas. The SKX is not a trend; it's a story to be passed down through generations.",
        link: "#"
    },
    {
        id: 3,
        title: "Rolex Submariner (No-Date): The Majesty of Simplicity",
        author: "Aras Tokdemir",
        date: "October 1, 2025",
        tag: "Review",
        // Please update the image path:
        image: "images/rolex_sub_example.jpg", 
        techMin: "Rolex's flawless quality and caliber are undisputed. But what makes the absence of the date window so special on the Submariner?",
        subjective: "The Submariner is the 'cultural cornerstone' of the watch world. The lack of a date window keeps the dial symmetrical and clean, allowing the watch to focus purely on its time-telling function. This offers mental relief. It might be a status symbol, but it also represents simplicity, perfection, and eternal confidence in the chaos of daily life. When you wear it, you feel that your life is under control. That is an invaluable feeling.",
        link: "#"
    },
    // ===================================
    // EKLENEN YENİ BLOG YAZILARI
    // ===================================
    {
        id: 4,
        title: "Hamilton Khaki Field Mechanical: Minimalist Askeri Ruh",
        author: "WatchCompare Editor",
        date: "November 3, 2025",
        tag: "Military",
        // Lütfen görsel yolunu güncelleyin:
        image: "img/hamilton/hamilton-khaki-field-h69439931-example.png", 
        techMin: "Hafif, 38 mm çaplı kasa ve 80 saatlik Powermatic rezervine sahip mekanik kurmalı kalibre, onu klasik bir askeri saatten modern bir günlük saate taşıyor.",
        subjective: "Bu saati kolunuza taktığınızda, sade, mütevazı ama görev bilinciyle dolu bir karakter hissine kapılırsınız. Parlak ciladan uzak, mat ve keskin hatlara sahiptir. Ofiste veya doğada, sizi odaklanmaya ve 'anlık' olmaya iter (çünkü kurmanız gerekir). Deri bir NATO kayışıyla giyim tarzınızı tamamen değiştirebilecek, gerçek bir saat tutkunu seçimidir.",
        link: "#"
    },
    {
        id: 5,
        title: "Omega Speedmaster Professional (Moonwatch): Bir Efsanenin Ağırlığı",
        author: "Aras Tokdemir",
        date: "October 20, 2025",
        tag: "Classic",
        // Lütfen görsel yolunu güncelleyin:
        image: "img/omega/omega-speedmaster-professional-example.jpg", 
        techMin: "Efsanevi manuel kurmalı kalibre, 1861/3861 (hesap fark etmeksizin), onu 'Ay'a giden saat' yapan şeydir. Su geçirmezlik değeri, dalgıç saatlerine göre mütevazıdır.",
        subjective: "Speedmaster, saatçilikten çok bir tarih dersidir. Kronografı çalıştırdığınızda hissedilen mekanik titreşim, size zamanda yolculuk yaptırır. Bu bir saatten çok bir miras, bir semboldür. Onu takmak, kıyafetinizin değil, hikayenizin bir parçasıdır. Her zaman özel bir durum yaratır.",
        link: "#"
    },
    {
        id: 6,
        title: "Orient Bambino: Bir Vintage Rüyası, Modern Bütçe",
        author: "WatchCompare Editor",
        date: "September 28, 2025",
        tag: "Budget",
        // Lütfen görsel yolunu güncelleyin:
        image: "img/orient/orient-bambino-ra-ac0009s10b-example.png", 
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
        // Disable the button if the link is '#'
        const disabledClass = post.link === '#' ? 'disabled' : '';
        const linkText = post.link === '#' ? 'Coming Soon' : 'Read Full Review →';

        htmlContent += `
            <article class="blog-post-card">
              <div class="post-image-container">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
              </div>
              <div class="post-content">
                <h3>${post.title}</h3>
                <span class="post-meta">By ${post.author} | ${post.date} | **${post.tag}**</span>
                <p><strong>Technical Minimum:</strong> ${post.techMin}</p>
                
                <h4>Personal Opinion & Advice</h4>
                <p>${post.subjective}</p>
                <a href="${post.link}" class="read-more-btn ${disabledClass}">${linkText}</a>
              </div>
            </article>
        `;
    });

    container.innerHTML = htmlContent;
}

// Create cards when the page loads
document.addEventListener('DOMContentLoaded', generateBlogCards);
